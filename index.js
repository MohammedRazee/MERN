import express from "express"
import path from "path"

const app = express()
const port = 3000

const __dirname = import.meta.dirname;
const templateDir = path.join(__dirname, "view")

app.get('/', (req, res) => {
    res.sendFile(path.join(templateDir, "index.html"))
})

app.listen(port, (res, req)=> {
    console.log(`Listening on port http://localhost:${port}`)
})
