import http from "http"

const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end("Test")
})

const port = 3000

server.listen(port, () => {
    console.log(`server running at ${port}`)
})