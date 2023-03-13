import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"

const app = express()

const port = 8088

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
}

app.use(cors(corsOptions))
app.use(morgan("combined"))
app.use(bodyParser.json())

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

app.get("/home", async (req, res) => {
  await sleep(1500)

  res.json({ name: "homepage", magicNb: 6 })
})

app.get("/about", async (req, res) => {
  await sleep(1000)
  res.json({ name: "aboutpage", magicNb: 108 })
})

function error(err, req, res, next) {
  console.error(err.stack)

  if (err.message === "UnauthorizedError") {
    res.status(401).send({
      message: "UnauthorizedError",
    })
  } else {
    res.json({ message: "Internal Server Error", status: "500" })
  }
}

app.use(error)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
