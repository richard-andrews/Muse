const before = "https://sketchfab.com/models/";
const artefactIDs = ["752e69d34933438d8230ac829d22300e", 
                     "64d0b7662b59417986e9d693624de97a",
                     "4a3b1d4de81146acba80c95a55d369ed",
                     "0001e919977447cda727b1688a697d71"];
const after = "/embed?ui_annotations=0&autostart=1&camera=0&annotations_visible=1&transparent=1&ui_animations=0&ui_inspector=0&ui_ar=1&ui_settings=0&ui_vr=0&ui_fullscreen=0&dnt=1";

var position = 0;

document.getElementById("leftButton").onclick = previousArtefact;
document.getElementById("leftButtonMobile").onclick = previousArtefact;
document.getElementById("rightButton").onclick = nextArtefact;

function previousArtefact(){
    position = loopPrev(position);
    document.getElementById("iframe").src = createLink(position);
}

function nextArtefact(){
    position = loopNext(position);
    document.getElementById("iframe").src = createLink(position);
}

function createLink(pos){
    var artefactID = artefactIDs[pos];
    var link = before.concat(artefactID, after);
    return link;
}

function loopNext(pos){
    return (pos + 1 >=  artefactIDs.length ? 0 : pos + 1);
}

function loopPrev(pos){
    return (pos - 1 <  0 ? artefactIDs.length - 1 : pos - 1);
}