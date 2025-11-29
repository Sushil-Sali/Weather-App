import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
 const RAIN="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbiUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD="https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAIN:info.temp<15?COLD:HOT}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C </p>
              <p>Humadity = {info.humidity}</p>
              <p>Max Temprature = {info.tempMax}&deg;C</p>
              <p>Min Temprature = {info.tempMin}&deg;C</p>
              <p>
                The weather can be describe as <b>{info.weather}</b> feels Like{" "}
                {info.feelsLike}&deg;C
              </p>
              <p></p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
