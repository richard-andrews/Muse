const before = "https://sketchfab.com/models/";
var id = "752e69d34933438d8230ac829d22300e";
const after = "/embed?autostart=1&camera=0&annotations_visible=1&transparent=1&ui_animations=0&ui_inspector=0&ui_ar=1&ui_settings=0&ui_vr=0&ui_fullscreen=0&dnt=1";

document.getElementById("left").onclick = displayRandomArtefact;

function displayRandomArtefact(){
    var link = before.concat(id, after);
    document.getElementById("iframe").src = link;
    
}