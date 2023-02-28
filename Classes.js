class carro{

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    getName(){
        return this.name;
    }

    getYear(){
        return this.year;
    }
}

let myCar = new carro("Fiat",2022);
console.log(myCar.getName()+" "+myCar.getYear());