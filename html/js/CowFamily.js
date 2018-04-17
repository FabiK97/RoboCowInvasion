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

        this.checkPlaceable();

        console.log("placeable: " +  this.isPlaceable);

        if(this.isPlaceable){
            for(var i = 0; i < this.cowFamilyLength; i++) {
                if (!this.cowFamilyArray[i].isCowFamily) {
                    this.cowFamilyArray[i].state = 1;
                    }
            }
        } else {
            for(var i = 0; i < this.cowFamilyLength; i++) {
                if (!this.cowFamilyArray[i].isCowFamily) {
                    this.cowFamilyArray[i].state = 2;
                }
            }
        }
    }

    checkPlaceable(){
        this.isPlaceable = true;
        for(var i = 0; i < this.cowFamilyLength; i++) {
            console.log("Feld-" + i + " : " + this.cowFamilyArray[i].isCowFamily);
            if(this.cowFamilyArray[i].isCowFamily) {
                this.isPlaceable = false;
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
            this.cowFamilyArray[i].state = 3;
            this.cowFamilyArray[i].isCowFamily = true;
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