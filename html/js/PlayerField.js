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
                    console.log("colored!");
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
        /*this.field.style.outline = "2px";
        this.field.style.outlineColor = "black";
        this.field.style.outlineStyle = "solid";*/
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
        this.state = type;
        console.log(this.state + '-' + type);
        this.update();
    }


    static getObject(idString){
        var posX = idString.substring(0,idString.indexOf('-'));
        var posY = idString.substring(idString.indexOf('-')+1, idString.length);
        return playfieldArray[posY][posX];
    }

}