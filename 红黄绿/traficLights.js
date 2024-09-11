export class TraficLights{
    constructor(configs){
        this._colors = configs
        this.time = Date.now()
        this.currentIndex = 0
        this.total = 0
        for(let i=0;i<this._colors.length;i++){
            this.total += this._colors[this.currentIndex].last
        }
    }

    update(){
        while(true){
            if(this._disTime() <= this.CurrnetLight.last){
                break
            }else {
                this.time += this.CurrnetLight.last
                this.currentIndex = (this.currentIndex + 1) % this._colors.length
            }
        }
    }
    _disTime(){
        return Date.now() - this.time
    }
    get CurrnetLight(){
        return this._colors[this.currentIndex]
    }
    getTraficLight(){
        this.update()
        return {
            color: this._colors[this.currentIndex].color,
            remainTime:this._colors[this.currentIndex].last - (Date.now() - this.time) % this.total,
            index:this.currentIndex
        }
    }
}