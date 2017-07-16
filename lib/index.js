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
    hipotecarios(){
        const url = 'creditos_hipotecarios/';
        return this.retornar('GET',this.base+url,null);
    }
    hipotecarioById(id){
        const url = 'creditos_hipotecarios/'+id;    
        return this.retornar('GET',this.base+url,null);
    }
    
    hipotecarioTasas(id,a){
        const url = 'creditos_hipotecarios/'+id+'/tasas'; 
        console.log(url)
        return this.retornarGet('GET',this.base+url,a);
    }
    hipotecarioSimulacion(id,obj){
        const url = 'creditos_hipotecarios/'+id+'/simulaciones'; 
        return this.retornarPost('POST',this.base+url,obj);
    }
    consumo(obj){
        const url = 'creditos_consumo'; 
        return this.retornarPost('POST',this.base+url,obj);
    }
    beneficios(args){
        const url = 'beneficios/'+args; 
        console.log(url)
        return this.retornar('GET',this.base+url);
    }
} 


module.exports = Bci;