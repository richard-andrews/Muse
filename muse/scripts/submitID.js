document.getElementById("submitButton").onclick = presentMuse;


function presentMuse(){
    pID = document.getElementById("idInput").value;

    if (pID == ""){
        document.getElementById("listenButton").classList.add("disabled");
        document.getElementById("interactButton").classList.add("disabled");
        document.getElementById("idInput").style.borderColor = "#D499B9";
        document.getElementsByTagName("h2")[0].style.color = "#D499B9";
        alert("Please enter your ID");
        
        setTimeout(resetColors, 2000);
    }
    else if (pID % 2 == 0){
        enableDisable("listenButton", "interactButton");
    } else if (pID % 2 == 1){
        enableDisable("interactButton", "listenButton");
    }
}

function enableDisable(enable, disable){
    document.getElementById(enable).classList.add("disabled");
    document.getElementById(disable).classList.remove("disabled");
}

function resetColors(){
    document.getElementById("idInput").style.borderColor = "#FBF3D6";
    document.getElementsByTagName("h2")[0].style.color = "#FBF3D6";
}