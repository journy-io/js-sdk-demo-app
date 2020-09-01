import { Server } from "./app/Server";
import express from "express";

const app = express();

const port = 3001;

const server = new Server(app);
server.start(port);
