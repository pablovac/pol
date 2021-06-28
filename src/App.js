import React, {useState, useEffect} from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contacts, PaginaError} from "./pages";

// https://api.github.com/users/pablovac

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then (setData)
    .then (()=> setLoading(false))
    .catch(setError);
  }, [login]);

  if (loading) 
    return <h1>...loading....</h1>;
  if (error) 
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) 
    return null;

    return (
      <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="*" element={<PaginaError />}/>
      </Routes>
        </div>
  );


}
export default App;
