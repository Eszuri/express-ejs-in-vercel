import "module-alias/register"
import express from "express";
import path from "path";
import data from "@root/controller/data";
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// tampilan home
app.get("/", (req, res) => {
    res.render('index', { title: "This Is Template Engine" })
});

// endpoint test
app.get("/test", data)


// "_moduleAliases": {
//     "@data": "build"
// }


app.listen(3000, () => {
    console.log("express Running");
})