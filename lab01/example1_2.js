const Mark = [{
    weight : 78,
    height : 1.69,
    BMI : function(){
        return this.weight / this.height ** 2;
    }
},{
    weight : 95,
    height : 1.88,
    BMI : function(){
        return this.weight / this.height ** 2;
    }
}
]

console.log(Mark[0].BMI());

const John = [{
    weight : 92,
    height : 1.95,
    BMI : function(){
        return this.weight / this.height ** 2;
    }
},{
    weight : 85,
    height : 1.76,
    BMI : function(){
        return this.weight / this.height ** 2;
    }
}
]
console.log(John[0].BMI());

for (let index = 0; index < Mark.length; index++) {
    const markHigherBMI = Mark[index].BMI() > John[index].BMI();
    
    if (markHigherBMI) {
        console.log(`Mark's BMI(${Mark[index].BMI().toFixed(3)}) has a higher BMI than John's BMI(${John[index].BMI().toFixed(3)}): `);
    }else{
        console.log(`John's BMI(${John[index].BMI().toFixed(3)}) has a higher BMI than Mark's BMI(${Mark[index].BMI().toFixed(3)}): `);

    }
}
