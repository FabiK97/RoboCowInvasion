class EnemyField extends Field {

    constructor(x, y, state, divBox) {
        super(x, y, state, divBox);
        this.state = state;
        this.createField(divBox);
        this.update();
    }

    update() {
        switch(this.state){

            case 0: // nichts
                this.field.style.backgroundColor = 'green';
                break;
            case 1: //transparent - hover
                this.field.style.backgroundColor = 'black';
                break;
            case 2: //dreck
                this.field.style.backgroundColor = 'red';
                break;
            case 3: //Hit but not Destroyed
                this.field.style.backgroundColor = 'white';
                break;
            case 4: //Kuh-Tot
                this.field.style.backgroundColor = 'blue';
                break;

        }
    }

    createField(divBox){
        this.field = document.createElement("div");
        this.field.style.width = FIELDSIZE.toString() + 'px';
        this.field.style.height = FIELDSIZE.toString() + 'px';
        this.field.style.position = "absolute";
        this.field.className = "ef";
        this.field.id = divBox.id + '-' + this.posX.toString() + '-' + this.posY.toString();


        this.field.style.left = (FIELDSIZE*this.posX).toString() + 'px';
        this.field.style.top = (FIELDSIZE*this.posY).toString() + 'px';
        divBox.appendChild(this.field);

    }

    set state(s) {
        if(this.state == null || !(this.state >= 2) || (s === 4 && this.state === 3)) {
            console.log(s);
            this._state = s;
        }
    }

    get state() {
        return this._state;
    }

}