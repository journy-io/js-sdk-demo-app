import express, { Express, Request, Response } from "express";

import { Client, Event } from "@journyio/sdk";
import { HttpClientNode } from "@journyio/http";

import path from "path";
import dotenv from "dotenv";
import { readFile } from "fs";
// import { AppEvent } from "@journyio/sdk/dist/AppEvent";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

passport.use(
  new LocalStrategy(function (username, password, done) {
    if (
      username &&
      username.trim().length &&
      password &&
      password.trim().length
    ) {
      const user = {
        id: "userId",
        name: "userName",
        email: username,
      };
      // Check if user exists and password is correct
      return done(null, user);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (id, done) {
  const user = {
    userId: "userId",
    username: "userName",
    email: id,
  };
  // Check if user exists and password is correct
  return done(null, user);
});

interface User {
  id: string;
  name: string;
  email: string;
}

interface Account {
  accountId: string;
  name: string;
  members: string[];
}

// dummy code
function getAccount(user: User): Account {
  return {
    accountId: "accountId",
    name: "accountName",
    members: [user.id],
  };
}

// dummy code
function getDeviceId(_: User) {
  return "deviceId";
}

dotenv.config({ path: path.join(__dirname, "/../.env") });

export class Server {
  private app: Express;
  private client: Client;

  constructor(app: Express) {
    this.app = app;

    const config = {
      apiKey: process.env.API_KEY,
      rootUrl: process.env.API_URL,
    };

    this.client = new Client(new HttpClientNode(5000), config);

    this.client.getApiKeyDetails().then((details) => {
      console.log(
        details,
        `ApiKey details: ${details.requestId}, ${details.callsRemaining}, ${details.success}`
      );
    });

    app.use(express.static(path.join(__dirname, "/../frontend")));

    app.use(
      session({ secret: "journy", saveUninitialized: false, resave: true })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static("../frontend"));

    this.app.post(
      "/login",
      passport.authenticate("local", { failureRedirect: "/" }),
      async (request: Request, response: Response) => {
        const user: User = <User>request.user;
        const account: Account = getAccount(<User>request.user);
        if (account) {
          // If user is linked to account
          console.lg("in login");

          await this.client.upsertAccount({
            accountId: account.accountId,
            name: account.name,
            memberIds: account.members,
          });
        }
        const deviceId = getDeviceId(<User>request.user);
        if (deviceId) {
          // If the deviceId is known, link it to the userId so more precise tracking can be done

          await this.client.link({ userId: user.id, deviceId: deviceId });
        }

        // Upsert the App user
        await this.client.upsertUser({ userId: user.id, email: user.email });

        response.status(200).send({ message: "Logged in." });
      }
    );

    this.app.post(
      "/create-invoice",
      passport.authenticate("local", { failureRedirect: "/" }),
      async (request: Request, response: Response) => {
        const user: User = <User>request.user;
        const account: Account = getAccount(<User>request.user);
        if (account) {
          // If user is linked to an account, the event should be added for the user in an account
          try {
            await this.client.addEvent(
              Event.forUserInAccount(
                "create-invoice",
                user.id,
                account.accountId
              )
            );
          } catch (err) {
            console.log(err);
          }
        }
        // Store the event for the user
        await this.client.addEvent(Event.forUser("create-invoice", user.id));
        response.status(201).send({ message: "Invoice created." });
      }
    );

    this.app.use(
      passport.authenticate("local", { failureRedirect: "/" }),
      (request: Request, response: Response) => {
        readFile(
          path.join(__dirname, "/../frontend/index.html"),
          (error, contents) => {
            if (error) throw error;

            response.send(contents);
          }
        );
      }
    );
  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.log(`🚀 Server listening on http://localhost:${port}!`)
    );
  }
}
