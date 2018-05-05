function changeSoundSymbol () {
    var image = document.getElementById("soundSymbol");
    if(image.src.match("music_on")){
        image.src = "img/music_off.png";
    } else {
        image.src= "img/music_on.png";
    }
}