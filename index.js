function togglemenu(){
    var x = document.getElementById("nav");
    var y = document.getElementById("bannerimgdiv");
    if(x.style.display=="none"){
        x.style.display="block";
        y.style.marginTop ="350px";
    }
    else{
        x.style.display="none";
        y.style.marginTop ="17px";
    }

 }