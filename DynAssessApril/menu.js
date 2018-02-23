var menu = document.getElementById("menu");
var bgbg = document.getElementById("bg");
var bgapp = document.getElementById("app1");

document.getElementById("butopen").addEventListener("click", function () {
    menu.style.left = "0px";
});
document.getElementById("butclose").addEventListener("click", function () {
    menu.style.left = "-110px";
});


document.getElementById("butmake").addEventListener("click", function () {
    bgbg.style.backgroundImage = zoom.style.backgroundImage;
});

document.getElementById("butres").addEventListener("click", function () {
    bgbg.style.display = "none";
});

document.getElementById("butshow").addEventListener("click", function () {
    bgapp.style.display = "block";
});

document.getElementById("buthide").addEventListener("click", function () {
    bgapp.style.display = "none";
});


function myFunction(val) {
    var inpval = document.getElementById("numinp").value;
    bgbg.style.backgroundImage = "url(imgs/i"+inpval+".jpg)"
    
    if(val>12 || val <1){
        alert("Doesn't Exist!");
    }
};

