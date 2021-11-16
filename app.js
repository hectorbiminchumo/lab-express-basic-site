// IMPORTACIONES
const express   = require("express")
const app       = express()

require("dotenv").config()


// MIDDLEWARES

app.use(express.static('public'))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")



//RUTAS

app.get("/", (req, res) => {
    res.render("home")

})
app.get("/about", (req, res) => {
    res.render("about")

})
app.get("/works", (req, res) => {
    res.render("works")

})
app.get("/photo-gallery", (req, res) => {
    res.render("photo-gallery")

})



//SERVIDOR

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
})