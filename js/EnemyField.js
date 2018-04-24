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
                this.field.style.backgroundColor = 'inherit';
                break;
            case 1: //transparent - hover
                this.field.style.backgroundColor = 'grey';
                break;
            case 2: //dreck
                this.field.style.backgroundImage = "url('" + enemy[3] + "')";
                this.field.style.backgroundColor = 'inherit';
                break;
            case 3: //Hit but not Destroyed
                this.field.style.backgroundImage = "url('" + enemy[1] + "')";
                this.field.style.backgroundColor = 'inherit';
                break;
            case 4: //Kuh-Tot
                this.field.style.backgroundImage = "url('" + enemy[2] + "')";
                this.field.style.backgroundColor = 'inherit';
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


        this.field.style.backgroundSize = 'cover';
        this.field.style.backgroundRepeat = 'no-repeat';
        divBox.appendChild(this.field);

    }

    set state(s) {
        if(this.state == null || !(this.state >= 2) || (s === 4 && this.state === 3)) {
            this._state = s;
        }
    }

    get state() {
        return this._state;
    }

}