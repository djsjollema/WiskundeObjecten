function lineaireFunctie(helling,offset){
    this.helling = helling;
    this.offset = offset;
    this.y = function(x){
        return x*this.helling + this.offset;
    };
    this.x = function(y){
        return (y-this.offset)/this.helling;
    }
    
}