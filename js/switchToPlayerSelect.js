var gamestate;

function playerselect_on () {
    document.getElementById("ps").style.display = 'block';
    document.getElementById("m").style.display = 'none';
    document.getElementById("pgs").style.display = 'none';
    document.getElementById("g1").style.display = 'none';
    document.getElementById("eg").style.display = 'none';
    document.getElementById("sb").style.display = 'none';


    gamestate = 'ps';
}
