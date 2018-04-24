const FIELDSIZE = 45;

class Field {
    constructor(posX, posY, divBox) {
        this.posX = posX;
        this.posY = posY;
        this.isCowFamily = false;
        this.divBox = divBox;
    }

    set posX(x) {
        if (x < 12) {
            this._posX = x;
        }
    }

    get posX() {
        return this._posX;
    }

    set posY(y) {
        if (y < 8) {
            this._posY = y;
        }
    }

    get posY() {
        return this._posY;
    }

}
