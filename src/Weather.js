import React from "react";
import axios from "axios";

export default function Weather (props){
function handleResponse (response){
    console.log (response.data.name)
    alert 
    (`The weather in ${response.data.name} is ${response.data.main.temp} C`);
}

let apiKey = "f21a32773c5be9756a640ddc720ea283";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get (apiUrl).then(handleResponse);
return <h2>Hello from Weather</h2>;
}


