let nombres=['carne','rana','huevos','tentaculos','galletas']
let tipos=['vegetal','animal', 'insecto']
let nivel_energia=[100,250,500,480,330]

let alimento={}
let comidas=[]

for(let i=0; i<50; i++){


//cargar un atributo de mi objeto con cada console.log
    comidas.nombre=(nombres[Math.floor(Math.random()*nombres.lenght)])
    comidas.tipos=(tipos[Math.floor(Math.random()*tipos.lenght)])
    comidas.nivel_energia=(nivel_energia[Math.floor(Math.random()*nivel_energia.lenght)])

    comidas.push(comidas)
}
   
//Empieza mi ejercicio
//function clasificar comida(comidas,callback)
function alimentos(callback){
    setTimeout(function(){
        let filtro=comidas.filter(function(comida){
            return comida.tipos="vegetal " && comida.nivel_energia>=200
        })

        callback(filtro)
    },5000)
}

alimentos(function(filtro){
    contador=0
    ForEach(function(suma){
       let  sumatoria=contador+suma
    })
})















