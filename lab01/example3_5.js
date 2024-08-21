const average = {
    Dolphins : [{
        scope1:96,
        scope2:108,
        scope3:89,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },
    {
        scope1:97,
        scope2:112,
        scope3:101,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },
    {
        scope1:97,
        scope2:112,
        scope3:101,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },{
        scope1:44,
        scope2:23,
        scope3:71,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },{
        scope1:100,
        scope2:100,
        scope3:100,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    }],
    Koalas : [{
        scope1:88,
        scope2:91,
        scope3:110,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },
    {
        scope1:109,
        scope2:95,
        scope3:123,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },
    {
        scope1:109,
        scope2:95,
        scope3:106,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },{
        scope1:65,
        scope2:54,
        scope3:49,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },{
        scope1:40,
        scope2:40,
        scope3:40,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    }],
    result : function() {
        // console.log("Hello" + this.Dolphins[0].average());
        for (let index = 0; index < this.Dolphins.length; index++) {
            if(this.Dolphins[index].average() > 100 && this.Dolphins[index].average() > this.Koalas[index].average()) {
                console.log(`Dolphins average(${this.Dolphins[index].average()}) wins Koalas average(${this.Koalas[index].average()})`);
            }else if (this.Koalas[index].average() > 100 && this.Dolphins[index].average() < this.Koalas[index].average()){
                console.log(`Dolphins average(${this.Dolphins[index].average()}) wins Koalas average(${this.Koalas[index].average()})`);
            }else if(this.Dolphins[index].average() == this.Koalas[index].average()){
                console.log(`Dolphins average(${this.Dolphins[index].average()}) draws Koalas average(${this.Koalas[index].average()})`);
            }else {
                console.log("two teams are less than 100 ");
            }
        }
    },
    checkWin: function(){
      for (let index = 0; index < this.Dolphins.length; index++) {
        let booleanDolphins = this.Dolphins[index].average() >= (this.Koalas[index].average() * 2);
        let booleanKoalas = this.Koalas[index].average() >= (this.Dolphins[index].average() * 2);
        if(booleanDolphins) {
            console.log(`Dolphins(${this.Dolphins[index].average()}) wins Koalas(${this.Koalas[index].average()})`);
        }if(booleanKoalas) {
            console.log("Koalas wins Dolphins");
        }else {
            console.log("no team wins!");
        }
      }
    }
}
// average.result();
average.checkWin();