const average = {
    Dolphins : [{
        scope1:44,
        scope2:23,
        scope3:71,
        average : function() {
            return (this.scope1 + this.scope2 + this.scope3) / 3; 
        }
    },
    {
        scope1:85,
        scope2:54,
        scope3:101,
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
    }],
    checkWin : function() {
        
        }
}
average.result();