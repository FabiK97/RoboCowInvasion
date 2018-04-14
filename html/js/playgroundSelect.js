var playfieldBox;
var playfieldArray;
var allFields;
const FX = 12;
const FY = 7;


function setupPlayfield() {
    playfieldBox  = document.getElementById("pf");
    console.log("setup");
        if (pgselect.style.display !== 'none') {
            createField();
            console.log("div created!")
            //addHoverFunction();
            console.log("added");
        }


}

function createField() {

    playfieldArray = new Array(FY);
    for(var i = 0; i < FY; i++) {
        playfieldArray[i] = new Array(FX);
    }

    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            playfieldArray[i][j] = new PlayerField(j,i , 0);
        }
    }
}

function addHoverFunction(){
    console.log("inhover");
    for(var i = 0; i < FY; i++){
        for(var j = 0; j < FX; j++){
            let element = playfieldArray[i][j];
            element.field.onclick = function(){element.onHover();};
        }
    }

}

function styleElement(element) {
    console.log("style");
    element.backgroundcolor = "white";
}

