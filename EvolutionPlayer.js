class EvolutionPlayer{
    constructor(x,y,w,h,tx,ty,genlen){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.targetX = tx;
        this.targetY = ty;
        this.Xspeed = 0;
        this.Yspeed = 0;
        this.Xacc = 0;
        this.Yacc = 0;
        this.maxS = 3;
        this.maxP = 0.03;
        this.accdiv = 0.0001;
        this.closeF = 0.99;
        this.DNA = this.createDNA(genlen);
        this.crash = false;
        this.recordDist = this.calcDist();
        this.gotToTarget = false; 
    }
    angRect(a, alpha=1){
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(this.x+this.w/2,this.y+this.h/2);
        ctx.rotate(a);
        ctx.fillRect(-1*this.w/2,-1*this.h/2,this.w,this.h);
        ctx.restore();
    }
    XYtoAng(x,y){
        return Math.atan(y/x);
    }
    update(){
        if (this.crash || this.gotToTarget){
            return;
        }

        this.Xspeed += this.Xacc
        this.Yspeed += this.Yacc

        this.x += this.Xspeed
        this.y += this.Yspeed

        if (this.calcDist() < this.recordDist){
            this.recordDist = this.calcDist();
        }
    }
    tops(num,top){
        if (num > top){
            return top
        }
        else if (num < -top){
            return -top
        }
        else{
            return num
        }
    }  
    setAccX(num){
        this.Xacc = num;
    }
    setAccY(num) {
        this.Yacc = num;
    }
    createDNA(len){
        var newdna = []
        for (var i = 0; i < len; i++){
            newdna.push([this.getRandom(0.5), this.getRandom(0.5)])
        }
        return newdna;
    }
    getRandom(num){
        return (Math.random() * (2*num) - num);
    }
    calcDist(){
        return Math.hypot(Math.abs(this.targetX - this.x), Math.abs(this.targetY - this.y));
    }

}