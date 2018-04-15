class PlayerField extends Field {

    constructor(x,y,state) {
        super(x,y,state);
        this.createField();
        this.update();
    }

    update() {
        switch(this.state){
            case 0: this.field.style.backgroundColor = 'green';
                    break;
            case 1: this.field.style.backgroundColor = 'black';
                    break;
            case 2: this.field.style.backgroundColor = 'white';
                    break;
        }
    }

    createField(){
        this.field = document.createElement("div");
        this.field.style.width = FIELDSIZE.toString() + 'px';
        this.field.style.height = FIELDSIZE.toString() + 'px';
        this.field.style.position = "absolute";
        this.field.className = "pgsf";
        this.field.id = this.posX.toString() + '-' + this.posY.toString();


        this.field.style.left = (FIELDSIZE*this.posX).toString() + 'px';
        this.field.style.top = (FIELDSIZE*this.posY).toString() + 'px';
        playfieldBox.appendChild(this.field);

        this.field.onmouseenter = function(){PlayerField.getObject(this.id).onMouseEvent(1);};
        this.field.onmouseleave = function(){PlayerField.getObject(this.id).onMouseEvent(0);};
        this.field.onclick = function(){PlayerField.getObject(this.id).onMouseEvent(2);};

    }

    onMouseEvent(type) {

        if(type==1){
            shipsToPlace[currentShip].x = this.posX;
            shipsToPlace[currentShip].y = this.posY;
            shipsToPlace[currentShip].setShip();

        }

        if(type==2){
            shipsToPlace[currentShip].isPlaced = true;
            shipsToPlace[currentShip].placeShip();
            checkStatusPgselect();
        }


        for(var i = 0; i < FY; i++){
            for(var j = 0; j < FX; j++){
                playfieldArray[i][j].update();
            }
        }
    }


    static getObject(idString){
        var posX = idString.substring(0,idString.indexOf('-'));
        var posY = idString.substring(idString.indexOf('-')+1, idString.length);
        return playfieldArray[posY][posX];
    }

}