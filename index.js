const express = require("express");
const request = require("request");
let app = express();
const port = 8080;
let path = require("path");

const apikey = "566b8d4d198278711e444f7178fcced9";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

app.post("/", (req, res) => {
  let city = req.body.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  request(url, function (err, response, body) {
    if (err) {
      res.render("index", {
        weather: null,
        error: "Error fetching weather data.",
      });
    } else {
      let weather = JSON.parse(body);
      if (weather.main == undefined) {
        res.render("index", { weather: null, error: "City not found. Try again." });
      } else {
        let weatherText = `It's ${weather.main.temp}°C Temperature in ${weather.name}`;
        res.render("index", { weather: weatherText, error: null });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
