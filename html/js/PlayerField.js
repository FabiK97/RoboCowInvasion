class PlayerField extends Field {

    constructor(x,y,state, divBox) {
        super(x,y, divBox);
        this.state = state;
        this.createField(divBox);
        this.update();
    }

    update() {
        switch(this.state){
            case 0: this.field.style.backgroundColor = 'green';
                    break;
            case 1: this.field.style.backgroundColor = 'black';
                    break;
            case 2: this.field.style.backgroundColor = 'red';
                    break;
            case 3: this.field.style.backgroundColor = 'white';
                    break;
            case 4: this.field.style.backgroundColor = 'red';
                break;
            case 5: this.field.style.backgroundColor = 'violet';
                break;
            case 6: this.field.style.backgroundColor = 'blue';
                break;
        }
    }

    createField(divBox){
        this.field = document.createElement("div");
        this.field.style.width = FIELDSIZE.toString() + 'px';
        this.field.style.height = FIELDSIZE.toString() + 'px';
        this.field.style.position = "absolute";
        this.field.className = "pgsf";
        this.field.id = divBox.id + '-' + this.posX.toString() + '-' + this.posY.toString();


        this.field.style.left = (FIELDSIZE*this.posX).toString() + 'px';
        this.field.style.top = (FIELDSIZE*this.posY).toString() + 'px';
        divBox.appendChild(this.field);

    }

    set state(s) {
        if(this.state == null || this.state < 3 || (s >= 4 && (this.state === 3 || this.state === 5))){
            this._state = s;
        }
    }

    get state() {
        return this._state;
    }

}