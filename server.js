const express = require("express")
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const server = http.createServer(app)
const io = new Server(server)

const PORT = process.env.PORT || 3000

app.use(express.static("view"))

io.on("connection", (socket) =>{
    console.log("seseorang terhubung")

    //diskonek
    socket.on("disconnect", () =>{
        console.log("seseorang terputus")
    })

    //msg
    socket.on("chat message", (msg) =>{
        console.log("chat message : " + msg)
        io.emit("chat message", msg)
    })
})

server.listen(PORT, () =>{
    console.log(`aplikasi berjalan pada port = ${PORT}`)
})