import express, { Express, Request, Response } from "express";
import { Client, createClient } from "@journyio/sdk";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import { readFile } from "fs";

dotenv.config({ path: path.join(__dirname, "/../.env") });

export class Server {
  private app: Express;
  private client: Client;

  constructor(app: Express) {
    this.app = app;

    const config = {
      apiKey: process.env.API_KEY
    };
    this.client = createClient(config);

    app.use(express.static(path.join(__dirname, "/../frontend")));
    app.use(bodyParser.json());

    this.app.post(
      "/pet-information",
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

    this.app.use((request: Request, response: Response) => {
      readFile(path.join(__dirname, "/../frontend/index.html"), (error, contents) => {
        if (error) throw error;

        response.send(contents);
      });
    });
  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.log(`🚀 Server listening on http://localhost:${port}!`)
    );
  }
}
