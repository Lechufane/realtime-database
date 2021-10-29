//dotenv config
require('dotenv').config();

//imports
import express from 'express';
import morgan from 'morgan';
import { Client } from 'pg';
import { Server as SocketServer } from 'socket.io';
import path from 'path';
import http from 'http'

const port = 5000;
const pgClient = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

//public
app.use(express.static(path.join(__dirname, "./public")))

//middlewares
app.use(morgan('dev'));
app.use(express.json());

server.listen(port, () => {
    console.log(`Levantado en localhost:${port}`);
})


pgClient.connect()

pgClient.query('LISTEN canal')
    .then(data => console.log(data.command, "I'm listening"))

pgClient.on('notification', ({ channel, payload }) => {
    payload = JSON.parse(payload)
    io.emit('data', payload);
    console.log(channel, payload)
})