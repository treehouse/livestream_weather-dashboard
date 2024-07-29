import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";

const SearchHistory = ({ history, fetchWeather }) => {
  return (
    <div className="search-history">
      <Typography variant="h6">Search History</Typography>
      <List>
        {history
          .slice()
          .reverse()
          .map((city, index) => (
            <ListItem button key={index} onClick={() => fetchWeather(city)}>
              <ListItemText primary={city} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default SearchHistory;
