import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  function getData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=7d8db3a49de7c4affd734cb6dfcab991`
    )
      .then((data) => data.json())
      .then((data) => setData(data));
  }
  console.log(data);
  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        className="search"
        onChange={(e) => {
          getData(e.target.value)
          setQuery(e.target.value);
        }}
        value={query}
      />
      {data?.main && (
        <div className="weather">
          <h1>{data.main.temp} F</h1>
        </div>
      )}
    </div>
  );
};

export default App;
