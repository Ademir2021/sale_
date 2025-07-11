const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors());
const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server is run: http://localhost:${PORT}`))

