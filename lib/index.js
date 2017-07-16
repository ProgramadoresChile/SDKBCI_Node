var fetch = require('node-fetch-npm');

class Bci {
    constructor(Key){
        this.apiKey = Key;
        this.base = 'https://api.us.apiconnect.ibmcloud.com/portal-api-developers-desarrollo/sandbox/';

        this.retornarPost = function(mtd,url,obj){
            return fetch(url,{
                method:mtd,
                body: JSON.stringify(obj),
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-ibm-client-id':this.apiKey
                }
            })
            .then(res => res.json())
            .then(json => {
                return json;
            })
        };
        this.retornarGet = function(mtd,url,plz){
            return fetch(url,{
                method:mtd,
                qs: { 'plazo': plz },
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-ibm-client-id':this.apiKey
                }
            })
            .then(res => res.json())
            .then(json => {
                return json;
            })
        }
        this.retornar = function(mtd,url,plz){
            return fetch(url,{
                method:mtd,
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-ibm-client-id':this.apiKey
                }
            })
            .then(res => res.json())
            .then(json => {
                return json;
            })
        };
    }

    indicadores(){
        const url = 'info-banco/indicadores';
        return this.retornar('GET',this.base+url,null);
    }
    sucursales(){
        const url = '/info-banco/sucursales';
        return this.retornar('GET',this.base+url,null);
    }
    cajeros(){
        const url = '/info-banco/cajeros';
        return this.retornar('GET',this.base+url,null);
    }
    beneficios(args){
        const url = 'beneficios/'+args; 
        console.log(url)
        return this.retornar('GET',this.base+url);
    }
} 

class Consumo extends Bci {
    constructor(key){
        super();
        this.apiKey = key;
    }

    simulacion(obj){
        const url = 'creditos_consumo'; 
        return this.retornarPost('POST',this.base+url,obj);
    }
}

class Hipotecario extends Bci {
    constructor(key){
        super();
        this.apiKey = key;
    }

    find(){
        const url = 'creditos_hipotecarios/';
        return this.retornar('GET',this.base+url,null);
    }
    findById(id){
        const url = 'creditos_hipotecarios/'+id;    
        return this.retornar('GET',this.base+url,null);
    }
    
    tasas(id,a){
        const url = 'creditos_hipotecarios/'+id+'/tasas'; 
        console.log(url)
        return this.retornarGet('GET',this.base+url,a);
    }
    simulacion(id,obj){
        const url = 'creditos_hipotecarios/'+id+'/simulaciones'; 
        return this.retornarPost('POST',this.base+url,obj);
    }
}


module.exports = {
    Bci,
    Hipotecario,
    Consumo
};