document.getElementById("waves").onclick = playWaves;
document.getElementById("crickets").onclick = playCrickets;
document.getElementById("guidedMeditation").onclick = playThunderstorm;
document.getElementById("rain").onclick = playRain;

function playWaves(){
    document.getElementById("playerSource").src = "./audio/waves.mp3";
    updateActive("waves");
}
function playCrickets(){
    document.getElementById("playerSource").src = "./audio/crickets.mp3";
    updateActive("crickets");
}
function playThunderstorm(){
    document.getElementById("playerSource").src = "./audio/guidedMeditation.mp3";
    updateActive("guidedMeditation");
}
function playRain(){
    document.getElementById("playerSource").src = "./audio/rain.mp3";
    updateActive("rain");
}

function updateActive(newActive){
    document.getElementById("player").load();
    document.getElementById("waves").classList.remove("active");
    document.getElementById("crickets").classList.remove("active");
    document.getElementById("guidedMeditation").classList.remove("active");
    document.getElementById("rain").classList.remove("active");
    document.getElementById(newActive).classList.add("active");
}