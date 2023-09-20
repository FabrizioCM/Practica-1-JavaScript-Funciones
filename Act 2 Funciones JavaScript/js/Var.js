// calcular el perimetro de un circulo 
function calcularPerimetroCirculo (radio){
    let PI = 3.1415;
    let perimetro = radio*2*PI
    console.log(`El perimetro del circulo es: ${perimetro} cm`);
}
//Calcular el area de un rectangulo
function calcularAreaRectangulo (Altura,Base){
    let areaRectangulo = Altura*Base
    console.log(`El area del rectangulo es: ${areaRectangulo} cm`);
}
//Cuadrado de un numero
function calcularCuadradoNumero (numCuadrado){
    let cuadrado = numCuadrado*numCuadrado;
    console.log (`El cuadrado de este numero es: ${cuadrado}`);
}
// Conversion de Centigrados a Farenheit
function centigradoFarenheit (temperatura){
    let Farenheit = (temperatura * 1.8) + 32;
    console.log(`La temperatura es: ${Farenheit}°`);
}

// Calcular el valor del voltaje dadas la resistencia y la corriente
// Viva la reina isabel por ahí dicen los ingenieros 
function calcularVoltaje (intensidad,resistencia){
    let Ampere = intensidad;
    let resistor = resistencia;
    let voltaje = intensidad*resistencia;
    console.log(`El voltaje es: ${voltaje} V`);
}

//Calcular volumen de esfera
function volumenEsfera(radioEsfera){
    let PI = 3.1415;
    let  volumen = (3/4)*(PI)*(radioEsfera*3);  
    console.log (`El Volumen es: ${volumen}cm`);
}

