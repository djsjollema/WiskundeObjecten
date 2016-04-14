function Vector(dx,dy){
    var _dx = dx;
    var _dy = dy;
    var _r = Math.sqrt(_dx*_dx + _dy*_dy);
    var _hoek = Math.atan2(_dy,_dx);   
   
   this.__defineGetter__('dx',function(){
        return _dx;
    });
    
    this.__defineGetter__('dy',function(){
        return _dy;
    });
    
    this.__defineGetter__('r',function(){
        return _r;
    });
    
    this.__defineGetter__('hoek',function(){
        return _hoek;
    });
    
    this.__defineSetter__('dx',function(dx){
        _dx = dx;
        _r = Math.sqrt(_dx*_dx + _dy * _dy);
        _hoek = Math.atan2(_dy,_dx);
    });
    
    this.__defineSetter__('dy',function(dy){
        _dy = dy;
        _r = Math.sqrt(_dx*_dx + _dy * _dy);
        _hoek = Math.atan2(_dy,_dx);
    });

    this.__defineSetter__('r',function(r){
        _r = r;
        _dx = _r * Math.cos(_hoek);
        _dy = _r * Math.sin(_hoek);
    });
    
    this.__defineSetter__('hoek',function(hoek){
        _hoek = hoek;
        _dx = _r * Math.cos(_hoek);
        _dy = _r * Math.sin(_hoek);
    });
    
    this.teken = function(x,y,vergroting,kleur,context){
        var dikte = 2;
        var pijlDikte = 6;
        var PijlBreedte = 20;
        var PijlLengte = _r - PijlBreedte
        context.save();
        context.translate(x,y);
        context.rotate(_hoek);
        context.beginPath();
        context.lineWidth = 3;
        context.fillStyle = kleur;
         context.strokeStyle = "black";
        context.moveTo(0,0);
        if(_r>0){
            context.lineTo(0,-dikte);
            context.lineTo(_r*vergroting- PijlBreedte,-dikte);
            context.lineTo(_r*vergroting-PijlBreedte,-pijlDikte);
            context.lineTo(_r*vergroting,0);
            context.lineTo(_r*vergroting- PijlBreedte,pijlDikte);
            context.lineTo(_r*vergroting- PijlBreedte,dikte);
            context.lineTo(0,dikte);
            context.lineTo(0,0); 
        } else{
            context.lineTo(0,dikte);
            context.lineTo(_r*vergroting+ PijlBreedte,+dikte);
            context.lineTo(_r*vergroting+PijlBreedte,+pijlDikte);
            context.lineTo(_r*vergroting,0);
            context.lineTo(_r*vergroting+ PijlBreedte,-pijlDikte);
            context.lineTo(_r*vergroting+ PijlBreedte,-dikte);
            context.lineTo(0,-dikte);
            context.lineTo(0,0);            
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
    }
    
};

/**
* static function library for Vector-operations
* @class
*/

var VectorOperaties ={
    /** summize 2 vectors 
    * @param {Vector} v - vector
    * @param {Vector} w - vector
    * @returns {Vector}
    * 
    */
    som: function(v,w){
        var ans = new Vector(v.dx+w.dx,v.dy+w.dy);
        return ans;
    },
    /** substract 2 vectors 
    * @param {Vector} v - vector
    * @param {Vector} w - vector
    * @returns {Vector}
    * 
    */    
    verschil: function(v,w){
        var ans = new Vector(v.dx-w.dx,v.dy-w.dy);
        return ans;       
    },
    /** multiply a Vector with a scalair 
    * @param {Vector} v - vector
    * @param {Number} getal - scalair
    * @returns {Vector}
    * 
    */       
    scalairVerm:function(v,getal){
        var ans = new Vector(v.dx * getal,v.dy*getal);
        return ans;
    },
    /** inproduct or dotproduct 
    * @param {Vector} v - vector
    * @param {Vector} w - vector
    * @returns {Number}
    * 
    */      
    inproduct: function(v,w){
        return v.dx * w.dx + v.dy * w.dy;
    }
}