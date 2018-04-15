class CowFamily {
    constructor(x,y,l,d){
        this.x = x;
        this.y = y;
        this.cowFamilyLength = l;
        this.direction = d;

        this.isPlaceable = true;
        this.isPlaced = false;

        this.cowFamilyArray = new Array(l);
        this.setCowFamily();
    }

    setCowFamily(){
        //delete Old cowFamily
        for(var i = 0; i < this.cowFamilyLength; i++) {
            if (this.cowFamilyArray[i] != null) {
                this.cowFamilyArray[i].isCowFamily = false;
                this.cowFamilyArray[i].state = 0;
            }
        }

        //create cowFamilyArray
        switch(this.direction) {
            case 1: //down
                for(var i = 0; i < this.cowFamilyLength; i++) {
                    this.cowFamilyArray[i] = playfieldArray[this.y + i][this.x];
                }
                break;
            case 2: //right
                for(var i = 0; i < this.cowFamilyLength; i++) {
                    this.cowFamilyArray[i] = playfieldArray[this.y][this.x + i];
                }
                break;
        }

        //set Fields as cowFamily
        this.isPlaceable = true;
        this.checkPlaceable();
        console.log(this.isPlacable);

        if(this.isPlaceable){
            for(var i = 0; i < this.cowFamilyLength; i++) {
                this.cowFamilyArray[i].state = 1;
            }
        } else {
            for(var i = 0; i < this.cowFamilyLength; i++) {
                this.cowFamilyArray[i].state = 3;
            }
        }
    }

    checkPlaceable(){
        for(var i = 0; i < this.cowFamilyLength; i++) {
            if(this.cowFamilyArray[i].isCowFamily) {
                this.isPlaceable = false;
                console.log('state: ' + this.cowFamilyArray[i].state);
            }
        }
    }

    changeDirection(){

        if (this.direction === 1) {
            this.direction = 2;
        } else {
            this.direction = 1;
        }
        this.setCowFamily();
    }

    placeCowFamily(){
        for(var i = 0; i < this.cowFamilyLength; i++) {
            this.cowFamilyArray[i].state = 2;
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

    set cowFamilyLength(l){
        this._cowFamilyLength = l;
    }

    get cowFamilyLength() {
        return this._cowFamilyLength;
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