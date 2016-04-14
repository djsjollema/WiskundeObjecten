function Rooster(w,h,dx,dy,modx,mody){
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    this.modx = modx;
    this.mody = mody;
    
    
    /** draw the grid 
    * @param {context} context - target context
    * @returns {void}
    */   
    this.teken = function(context){
        for(i = 0; i< this.h; i+=this.dx){
            context.beginPath();
            context.strokeStyle = "#000000";
            if(i%this.mody == 0){
                context.lineWidth = 3;
            } else {
               context.lineWidth = 1;
            }
            context.moveTo(0,i);
            context.lineTo(this.w,i);
            context.stroke();
        }
        for(i= 0; i<this.w; i+= this.dy){
            context.beginPath();
            if(i%this.modx == 0){
                context.lineWidth = 3;
            } else {
               context.lineWidth = 1;
            }            context.moveTo(i,0);
            context.lineTo(i,this.h);
            context.stroke();
        }
    }
}
