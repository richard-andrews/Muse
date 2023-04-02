document.getElementById("submitButton").onclick = presentMuse;

function presentMuse(){
    pID = document.getElementById("idInput").value;

    if (pID == ""){
        document.getElementById("listenButton").classList.add("disabled");
        document.getElementById("interactButton").classList.add("disabled");
        alert("Please enter your ID");
    }
    else if (pID % 2 == 0){
        document.getElementById("listenButton").classList.remove("disabled");
        document.getElementById("interactButton").classList.add("disabled");
    } else if (pID % 2 == 1){
        document.getElementById("listenButton").classList.add("disabled");
        document.getElementById("interactButton").classList.remove("disabled");
    }
}