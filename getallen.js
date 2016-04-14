function Verhouding(deeltal,deler){
    this.deeltal = deeltal;
    this.deler = deler;
}

var GetalOperaties = {
    isGeheheelGetal: function(getal){
        var ans = false;
        if(getal % 1 == 0){ans = true};
        return ans;                   
    },
    ggd:function(a,b){
        if(this.isGeheheelGetal(a) && this.isGeheheelGetal(b)){
            while(a != b){
                if(a > b){
                    a -= b;
                } else {
                    b -= a;
                }
            }
        }
        return a;
    }
}

var VerhoudingOperaties = {
    somVerhoudingen:function(a,b){
        var ans = new Verhouding();
        ans.deeltal = a.deeltal * b.deler + b.deeltal*a.deler;
        ans.deler = a.deler * b.deler;
        return ans;
    },
    verschilVerhoudingen:function(a,b){
        var ans = new Verhouding();
        ans.deeltal = a.deeltal * b.deler - b.deeltal*a.deler;
        ans.deler = a.deler * b.deler;
        return ans;
    },
    productVerhoudingen:function(a,b){
        var ans = new Verhouding();
        ans.deeltal = a.deeltal * b.deeltal;
        ans.deler = a.deler * b.deler;
        return ans;
    }, 
    quotientVerhoudingen:function(a,b){
        var ans = new Verhouding();
        ans.deeltal = a.deeltal * b.deler;
        ans.deler = a.deler * b.deeltal;
        return ans;
    },
    isBreuk:function(a){
        var ans = false;
        if(GetalOperaties.isGeheheelGetal(a.deeltal) && 
           GetalOperaties.isGeheheelGetal(a.deler)){
                ans = true;
        }
        return ans;
    }, 
    vereenvoudig:function(a){
        var ans = new Verhouding();
        if(this.isBreuk(a)){
            var ggd = GetalOperaties.ggd(a.deeltal,a.deler);
            ans.deeltal = a.deeltal/ggd;
            ans.deler = a.deler/ggd;
        }
        return ans;
    }
}