BCI API Node Client
=================

An API client that comes handy to connect with BCI developers API.

## Setup

Instalacion:

```
$ npm install bci --save
```
## Usage

Inicializar modulo bci:
```
const bci = require('bci');
const tokens = 'YOUR_TOKENS';

let consulta = new bci.Bci(tokens); // obtenemos los metodos de consulta de bci

-> consulta.indicadores() // Nos retorna los indicadores financieros del Banco Bci
-> consulta.sucursales() // Nos retorna todas las sucursales del Banco Bci
-> consulta.cajeros() // Nos retorna todos los cajeros del Banco Bci
-> consulta.beneficios(PARAMS) // nos retorna los beneficios asociados al Banco Bci

//PARAMS: parametro que debemos pasar al metodo benificios() para obtener los datos, los parametros pueden ser los siguientes:

-> 'descuentos-shopping'
-> 'productos-tienda'
-> 'descuentos-salud-belleza'
-> 'descuentos-venta-online'
-> 'descuentos-panoramas'
-> 'descuentos-sabores'


let credito_consumo = new bci.Consumo(tokens);

-> credito_consumo.simulacion(objeto) :  Nos permite simular un credito de consumo para lo cual le pasamos un objeto con parametros.


//ejemplo:

objeto = { 
    rut: '777777777',
    dv: '7',
    montoCredito: '1000000',
    cantidadCuotas: '24',
    fechaPrimerVencimiento: '26/07/2017',
    canal: '110',
    modalidad: 'SG2',
    tipoCredito: 'UNI',
    renta: '2000000',
    codigoJournal: '1',
    mesNoPago1: 0,
    mesNoPago2: 0,
    json: true 
};


let hipotecario = new bci.Hipotecario(tokens);

-> hipotecario.find() // nos retorna los tipos de creditos hipotecario existentes
-> hipotecario.findById(id) // nos retorna un tipo de credito hipotecario segun el id
-> hipotecario.tasas(id,plazo) // nos retorna el resultado de un credito segun el plazo
-> hipotecario.simulacion(id,objeto) //  Nos permite simular un credito hipotecario para lo cual le pasamos un objeto con parametros.

// ejemplo: 
var objeto = { anosTasaFija: 2,
    codMesExclusion: 0,
    diaVencimiento: 10,
    indDfl2: false,
    indPAC: false,
    mesesGracia: 2,
    seguroHogarContenido: false,
    seguroCesantia: false,
    seguroEnfermedadGrave: false,
    seguroHospitalizacion: false,
    codeudor: false,
    codeudorConSeguroDesgravamen: false,
    seguroCesantiaServiu: 0,
    seguroCesantiaDobleProtecion: false,
    seguroDesgravamenTitular: false,
    fechaNacimientoTitular: '',
    fechaNacimientoCodeudor: '',
    plazo: 5,
    renta: 1200000,
    valorPropiedadUf: 10000,
    montoCreditoUf: 7037,
    codTipoBienRaiz: 'casa',
    comuna: 'Santiago Centro',
    nombreCliente: 'Juan',
    apellidoCliente: 'Soto',
    emailCliente: 'jsoto@mailinator.com',
    fonoCliente: 93849284,
    ciudad: 320,
    rutCliente: 17307813,
    dvCliente: '7',
    codProducto: 12,
    codSeguro: 1,
    region: 23,
    json: true 
};
```
## Development

License

Copyright (c) 2017 Luis Vilches. Sempli is licensed under the MIT License