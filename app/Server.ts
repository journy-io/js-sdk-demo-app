import { Express, Request, Response } from "express";
import { Client, createClient } from "@journyio/sdk";

const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

export class Server {
  private app: Express;
  private client: Client;

  constructor(app: Express) {
    this.app = app;

    const config = {
      apiKeySecret: process.env.API_KEY,
      apiUrl: process.env.API_URL,
    };
    this.client = createClient(config);

    app.use(bodyParser.json());
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    this.app.post(
      "/pet-information",
      cors(),
      async (req: Request, res: Response): Promise<void> => {
        const {
          email,
          petName,
          petSpecies,
          petToys,
          petDate,
          petInsured,
        } = req.body;

        let response;
        response = await this.client.trackEvent({
          email: email,
          tag: "pet-information",
          campaign: "pets",
          source: "demo-application",
        });
        if (!response.success) {
          res.status(500).send({
            message:
              "There went something wrong submitting your information. Please try again later.",
          });
          return;
        }
        response = await this.client.trackProperties({
          email: email,
          properties: {
            petName: petName,
            petSpecies: petSpecies,
            petToys: petToys,
            petDate: petDate,
            petInsured: petInsured,
          },
        });
        if (!response.success) {
          res.status(500).send({
            message:
              "There went something wrong submitting your information. Please try again later.",
          });
          return;
        }

        res
          .status(201)
          .send({ message: "The information is correctly stored." });
      }
    );
  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.log(`Server listening on port ${port}!`)
    );
  }
}
