import React from "react";
import UrlShortenerForm from "./components/UrlShortenerForm";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
      <UrlShortenerForm />
      <Stats />
    </div>
  );
}

export default App;
