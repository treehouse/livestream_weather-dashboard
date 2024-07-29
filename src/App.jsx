import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setHistory([...history, city]);
      setError("");
    } catch (error) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="app">
      <Typography variant="h3" gutterBottom>
        Weather Dashboard
      </Typography>
      <SearchBar fetchWeather={fetchWeather} />
      {loading && <CircularProgress />}
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
      {weatherData && <WeatherCard weatherData={weatherData} />}
      <SearchHistory history={history} fetchWeather={fetchWeather} />
    </Container>
  );
};

export default App;
