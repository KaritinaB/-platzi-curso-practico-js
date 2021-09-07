
//helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}
function calcularMediaAritmetica (lista){
   
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
const salarioMex = mexico.map(
    function (personita) {
        return personita.salary;
    }
);
//Calculadora mediana salario
function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else{
        const personitaMitad = lista[mitad];
        return personitaMitad;  
    }
}

// Mediana General
const salariosMexSorted = salarioMex.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralMex =  medianaSalarios(salariosMexSorted);

//Mediana del Top10Mex

const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salarioMex10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount
    );

const medianaTop10Mex =  medianaSalarios(salarioMex10);


console.log ({medianaGeneralMex,medianaTop10Mex});