const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("./config/config").argv;
/*const argv=require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;//obtenemos los argumentos*/

//dar la lactitud y la longitud
/*
clima.getClima(40.750000,-74.000000 )
    .then(console.log)
    .catch(console.log)*/

//lugar.getLugarLatLng(argv.direccion).then(console.log);
/*const getInfo=async(direccion)=>{
    try {
        const coords=await lugar.getLugarLatLng(direccion);
    const temp=await clima.getClima(coords.lat,coords.lng)
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return`No se pudo determinar el clima de ${direccion}`    
    }
    
}*/

/*getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)*/

const getInfo = (dir) => {
  lugar
    .getLugarLatLng(dir)
    .then((c) => {
      clima
        .getClima(c.lat, c.lon)
        .then((t) => {
          console.log(`El clima de ${c.direccion} es de ${t}`);
        })
        .catch(console.log);
    })
    .catch((err) => {
      console.log(err.response.data.cod);
      console.log(err.response.data.message);
      console.log(`No se pudo determinar el clima de ${dir}`);
    });
};

getInfo(argv.direccion);
