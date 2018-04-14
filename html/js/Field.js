const FIELDSIZE = 45;

class Field {
    constructor(posX,posY,state) {
        this.posX = posX;
        this.posY = posY;
        this.state = state;
    }

    set posX(x){
        if(x<12) {
            this._posX = x;
        }
    }

    get posX() {
        return this._posX;
    }

    set posY(y){
        if(y<8) {
            this._posY = y;
        }
    }

    get posY() {
        return this._posY;
    }

    set state(s) {
        if(this.state == null || this.state < 2) {
            this._state = s;
            console.log("change state");
        }
    }

    get state() {
        return this._state;
    }
}