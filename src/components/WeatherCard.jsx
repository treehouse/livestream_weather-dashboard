import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;

  return (
    <Card className="weather-card">
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{weather[0].description}</Typography>
        <Typography variant="body1">Temperature: {main.temp}°C</Typography>
        <Typography variant="body1">Humidity: {main.humidity}%</Typography>
        <Typography variant="body1">Wind Speed: {wind.speed} m/s</Typography>
        <Typography variant="body1">Pressure: {main.pressure} hPa</Typography>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
