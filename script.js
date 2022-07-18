// choose browswer
document.getElementById("btn").addEventListener("click",preferedBrowser);
function preferedBrowser(){
    prefer = document.forms[0].browsers.value;
    alert("you are choose this browser" +prefer);
}


//click
document.getElementById("btn").addEventListener("click",clicke);


function clicke(){
    document.getElementById("para").innerHTML = Date();
}

// mouse event
document.getElementById("btn").addEventListener("click",mouse);
function mouse(){
    {
		alert("This is JavaTpoint");
	}
}

// focus event
document.getElementById("btn").addEventListener("click",focuse);
function focuse(){
    {
		document.getElementById("2").style.background =" grey";
	}
}

//keyboard
document.getElementById("btn").addEventListener("click",kee);
function kee(){
    {
		document.getElementById("3");
        alert("Key Pressed")
	}
}

//uppercase
document.getElementById("btn").addEventListener("click",uppercase);
function uppercase(){
    {
		var x = document.getElementById("4");
        x.value = x.value.toUpperCase();
	}
}

