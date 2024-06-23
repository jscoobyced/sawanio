import fs from 'fs'
import express from 'express'
import https from 'https'
import { Server } from 'socket.io'
import cors from 'cors'
import { ExpressPeerServer } from 'peer'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.local' })

const httpsKey = process.env.HTTPS_KEY || './server.key'
const httpsCert = process.env.HTTPS_CERT || './server.key'
const httpPort = process.env.HTTPS_PORT || 3443
const corsOrigin = process.env.CORS_ORIGIN?.split(',') || ['*']

// Express server
const app = express()

// HTTPS server
const options = {
  key: fs.readFileSync(httpsKey),
  cert: fs.readFileSync(httpsCert),
}
const httpsServer = https.createServer(options, app)

// Socket.io server
const io = new Server(httpsServer, {
  cors: {
    origin: corsOrigin,
    methods: ['GET', 'POST'],
  },
})

// Peer server
const peerServer = ExpressPeerServer(httpsServer)

peerServer.on('connection', (client) => {
  console.log(`Client ${client.getId()} connected.`)
})

peerServer.on('disconnect', (client) => {
  console.log(`Client ${client.getId()} disconnected.`)
})

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res, next) => res.redirect('/index.html'))
app.use('/peerjs', peerServer)

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('A user disconnected.')
  })

  socket.on('join-room', (roomId, peerId) => {
    console.log(`Peer ${peerId} joined room ${roomId}`);
    socket.join(roomId);
    socket.to(roomId).emit('user-connected', peerId);
  });

})

httpsServer.listen(httpPort, () => {
  console.log(`Server listening on port ${httpPort}`)
})
