//const { require } = require('yargs');
const axios = require("axios");
const getLugarLatLng = async(dir) => {

  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
      baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}`,
      headers: { 'x-api-key': '5a72231852ad2263b396d569c381cd0a' }
  });

  const resp = await instance.get();

  const data = resp.data;
  const direccion = data.name;
  const lat = data.coord.lat;
  const lon = data.coord.lon;
  return {
      direccion,
      lat,
      lon
  }
}
module.exports = {
  getLugarLatLng
}


/*
const getLugarLatLng = async (dir => {
  //no se reasigna y es mas ligera
  //argv.direccion
  const encodeUlr = encodeUrl(dir);
  //console.log(encodeUlr); //encodeUrl:convierte el url seguro
  //obtener la direccion de la api para obtener respuesta
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: {
      "X-RapidAPI-Key": "YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK",
    },
  });

  const resp = await instance.get(); //obtenemos la informacion y lo almacenamos en respuesta
  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }
  const data = resp.data.Results[0];
  const direccion = data.name;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng,
  }
}

module.exports={
    getLugarLatLng
}*/