class Ship {
    constructor(x,y,l,d){
        this.x = x;
        this.y = y;
        this.shipLength = l;
        this.direction = d;

        this.isPlaceable = true;
        this.isPlaced = false;

        this.shipArray = new Array(l);
        this.setShip();
    }

    setShip(){
        //delete Old Ship
        for(var i = 0; i < this.shipLength; i++) {
            if (this.shipArray[i] != null) {
                this.shipArray[i].isShip = false;
                this.shipArray[i].state = 0;
            }
        }

        //create shipArray
        switch(this.direction) {
            case 1: //down
                for(var i = 0; i < this.shipLength; i++) {
                    this.shipArray[i] = playfieldArray[this.y + i][this.x];
                }
                break;
            case 2: //right
                for(var i = 0; i < this.shipLength; i++) {
                    this.shipArray[i] = playfieldArray[this.y][this.x + i];
                }
                break;
        }

        //set Fields as ship
        this.isPlaceable = true;
        this.checkPlaceable();
        console.log(this.isPlacable);

        if(this.isPlaceable){
            for(var i = 0; i < this.shipLength; i++) {
                this.shipArray[i].state = 1;
            }
        } else {
            for(var i = 0; i < this.shipLength; i++) {
                this.shipArray[i].state = 3;
            }
        }
    }

    checkPlaceable(){
        for(var i = 0; i < this.shipLength; i++) {
            if(this.shipArray[i].isShip) {
                this.isPlaceable = false;
                console.log('state: ' + this.shipArray[i].state);
            }
        }
    }

    changeDirection(){

        if (this.direction === 1) {
            this.direction = 2;
        } else {
            this.direction = 1;
        }
        this.setShip();
    }

    placeShip(){
        for(var i = 0; i < this.shipLength; i++) {
            this.shipArray[i].state = 2;
        }
    }

    set x(x){
        this._x = x;
    }

    get x() {
        return this._x;
    }

    set y(y){
        this._y = y;
    }

    get y() {
        return this._y;
    }

    set shipLength(l){
        this._shipLength = l;
    }

    get shipLength() {
        return this._shipLength;
    }

    set direction(d){
        if(d<3 && d>0) {
            this._direction = d;
        }
    }

    get direction(){
        return this._direction;
    }
}