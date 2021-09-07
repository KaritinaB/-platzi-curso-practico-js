//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado= 5;

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("Los lados de mi cuadrado miden: " + ladoCuadrado + "cm");


//console.log("El perímetro de mi cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado
} 
//console.log("El área de mi cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del tríangulo
console.group("Tríangulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura)/2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
//const  radioCirculo= 4;
//console.log("El radio del circulo es de: " + radioCirculo + "cm");
 
//Diámetro

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI= Math.PI;
console.log("PI es igual a: " +PI);

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();
//Aqui se interactua con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

//Interaccion con HTML y triángulo

function calcularPerimetroTriangulo (){
	const input1 = document.getElementById("InputLado1");
	const value1 = Number(input1.value);
    const input2 = document.getElementById("InputLado2");
	const value2 = Number(input2.value);
    const Input3 = document.getElementById("InputLadoBase");
	const value3 = Number(Input3.value);


	const perimetroT = perimetroTriangulo(value1, value2, value3);
	alert(perimetroT); 
}

function calcularAreaTriangulo () { 
	const input1 = document.getElementById("InputLado1");
	const value1 = Number(input1.value);
    const input2 = document.getElementById("InputLado2");
	const value2 = Number(input2.value);
    const Input3 = document.getElementById("InputLadoBase");
	const value3 = Number(Input3.value);

	const area = areaTriangulo(value1, value2, value3);
	alert(area);
	
}
//Interaccion con HTML y circulo

function calcularPerimetroCirculo () {
	const input = document.getElementById("InputCirculo");
	const value = input.value;

	const perimetroC = perimetroCirculo(value);
	alert(perimetroC);
}

function calcularAreaCirculo (){
	const input = document.getElementById("InputCirculo");
	const value = input.value;

	const areaC = areaCirculo(value);
	alert(areaC);
}

//calcular altura de Triángulo isósceles

function alturaTrianguloIsosceles (trianguloGrandeLado1, trianguloGrandeLado2, trianguloGrandeLadoBase) {
	//const input = document.getElementById("InputTriangulo");
	//const value = input.value;
//  	const hipotenusa = lado1 * lado1;

	if(trianguloGrandeLado1 != trianguloGrandeLado2){
   	     console.error("Los lados no son iguales");  	  
	}else {
		let trianguloPequeLado1;
		const trianguloPequeLado2 = trianguloGrandeLadoBase / 2; 
		const trianguloPequeLadoBase = trianguloGrandeLado1;


		const trianguloPequeLado2Cuadrado = trianguloPequeLado2 * trianguloPequeLado2;
		const trianguloPequeLadoBaseCuadrado = trianguloPequeLadoBase * trianguloPequeLadoBase;

		const trianguloPequeLado1 = Math.sqrt(trianguloPequeLadoBaseCuadrado - trianguloPequeLado2Cuadrado);


		const trianguloGradeAltura = trianguloPequeLado1;
		return trianguloGradeAltura;
	}	

}