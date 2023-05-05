import React from "react";
import Header from "./components/Header/Header";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import data from "./site-settings.json";
import "./style.scss";
import mockData from "./mockApi";

function App() {
  return (
    <div className="App">
      <Header title={data.siteTitle} />
      <FileExplorer {...mockData} />
    </div>
  );
}

export default App;
