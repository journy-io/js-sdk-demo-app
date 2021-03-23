import { Client } from "@journyio/sdk";
import { HttpClientNode } from "@journyio/http";

export const client = new Client(new HttpClientNode(5000), {
  apiKey: process.env.API_KEY,
  rootUrl: process.env.API_URL,
});
