const before = "https://sketchfab.com/models/";
const artefactIDs = ["752e69d34933438d8230ac829d22300e", 
                     "64d0b7662b59417986e9d693624de97a",
                     "4a3b1d4de81146acba80c95a55d369ed",
                     "0001e919977447cda727b1688a697d71",
                     "ae06e726ecea4b68b577fdca4c031bef",
                     "df0fac82c68d4585b3cbc17d58deda4c",
                     "76db7da26d7b4faf9b8375ad5da460ba",
                     "2b6aef665df8447884eb492f1db14eb7",
                     "f1ed85f2c19145139502b16d3303b1d2",
                     "0cd9f3bd60744b9381fe70cf62b1db6b",
                     "7ffa23f14a9e48f89de9e7656dce0ac7",
                     "e5d654042602471a97877286453e1d53",
                     "1e03509704a3490e99a173e53b93e282",
                     "53bbed1b8c034cb5ba4f719b5a98e771",
                     "f16eb0a359aa4354af848744c6916c87",
                     "9b46c774449a4079abccbc238f93db13",
                     "39505bba2c5247eb943b5cde253bf495"];
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