interface tipoVehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo:()=>void;
    cEspeciales: caracteristicasEspeciales[];
}
interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;
    agregarSuspension:()=>void;
}
interface testArray{
    modelos: number[];
    caracteristicasArray: Array<string[]>;
}
const miVehiculo: tipoVehiculo={
    tipo: "sedan",
    marca: "KIA",
    modelo: '2000',
    cilindraje: 2000,
    numPuertas: 4,
    arrancarVehiculo() {
        console.log("El vehiculo arrancó con un motor de ", this.cilindraje, " cc");
    },
    cEspeciales: [
        {
            velocidad: 150,
            suspension: true,
            agregarSuspension(){
                console.log("Suspensión mejorada");
                this.suspension=true;
            }
        }
    ],
}
const miSegundoVehiculo: caracteristicasEspeciales={
    velocidad: 100,
    suspension: false,
    agregarSuspension(){
        if (this.suspension = true){
            console.log('Tu vehiculo tiene suspensión');
        } else {
            console.log("Tu vehiculo no tiene suspensión")
        }
    }
}
const miTercerVehiculo: testArray={
    modelos: [2001,2020,2021,2010,2008],
    caracteristicasArray:[
        ['azul','verde'],
        ['Rin 15', 'rin 17'],
        ['2 puertas','4 puertas']
    ]
}
console.log({miVehiculo});
miVehiculo.arrancarVehiculo();
miVehiculo.cEspeciales[0].agregarSuspension();
console.log({miSegundoVehiculo});
console.log(miTercerVehiculo.caracteristicasArray[0][0]);
console.log(miTercerVehiculo.caracteristicasArray[2][1]);
miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=>{
    console.log(caracteristica[1])
});
let index=0;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=>{
    console.log(caracteristica[index])
});
let index1=1;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=>{
    console.log(caracteristica[index1])
});