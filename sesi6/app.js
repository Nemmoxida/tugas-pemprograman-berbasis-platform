import express from "express"
import data from "./movies.json" with {type : "json"}

const app = express()
// const route = app.router()
const time = new Date
const port = 4000


app.use("/movies", (req,res) => {
    res.json(data)
})

app.use("/movie", (req,res) => {
    const year = req.query.year
    const title = req.query.title

    const filteredData = data.map((item) => {
        if(item.Year === year || item.Title.toLocaleLowerCase === title.toLocaleLowerCase){
            res.json(item)
        } 

    })

        res.send("Entry not found")

})


app.use("/info", (req,res) => {
    res.send(`Server initialize at : ${time}`)
})

app.use("/anggota", (req,res) => {
    res.json({
        "nama kelompok" : "Chrono Genesis",
        "Nama Anggota" : {
            1 : "Ilham",
            2 : "rado",
            
        }
    })
})

app.use("/", (req,res) => {
    res.send("Welcome to Group Chrono Genesis Server")
})



app.listen(port,() =>{
    console.log(`server running at port : ${port}`)
} )

