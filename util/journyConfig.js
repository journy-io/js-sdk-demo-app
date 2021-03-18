import { Client } from "@journyio/sdk";
import { HttpClientNode } from "@journyio/http";

const config = {
  apiKey: process.env.API_KEY,
  rootUrl: process.env.API_URL,
};

export const client = new Client(new HttpClientNode(5000), config);