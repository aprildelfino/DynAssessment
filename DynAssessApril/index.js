var bgch1 = document.getElementById("ch1");
var bgch2 = document.getElementById("ch2");
var bgch3 = document.getElementById("ch3");
var zoom = document.getElementById("zoom");
var num = 100;
var num2 = 70;
var up = -2;
var up2 = -1;
var up3 = 0;

 
//circles bg

document.getElementById("conbg1").addEventListener("click", function () {
   bgch1.style.backgroundImage = "url(imgs/i1.jpg)"; 
});
document.getElementById("conbg1").addEventListener("click", function () {
   bgch2.style.backgroundImage = "url(imgs/i2.jpg)";
});
document.getElementById("conbg1").addEventListener("click", function () {
   bgch3.style.backgroundImage = "url(imgs/i3.jpg)";
});



document.getElementById("conbg2").addEventListener("click", function () {
   bgch1.style.backgroundImage = "url(imgs/i4.jpg)"; 
});
document.getElementById("conbg2").addEventListener("click", function () {
   bgch2.style.backgroundImage = "url(imgs/i5.jpg)"; 
});
document.getElementById("conbg2").addEventListener("click", function () {
    bgch3.style.backgroundImage = "url(imgs/i6.jpg)";
});



document.getElementById("conbg3").addEventListener("click", function () {
   bgch1.style.backgroundImage = "url(imgs/i7.jpg)"; 
});
document.getElementById("conbg3").addEventListener("click", function () {
   bgch2.style.backgroundImage = "url(imgs/i8.jpg)"; 
});
document.getElementById("conbg3").addEventListener("click", function () {
    bgch3.style.backgroundImage = "url(imgs/i9.jpg)";
});



document.getElementById("conbg4").addEventListener("click", function () {
   bgch1.style.backgroundImage = "url(imgs/i10.jpg)"; 
});
document.getElementById("conbg4").addEventListener("click", function () {
   bgch2.style.backgroundImage = "url(imgs/i11.jpg)"; 
});
document.getElementById("conbg4").addEventListener("click", function () {
    bgch3.style.backgroundImage = "url(imgs/i12.jpg)";
});



//next/previous

document.getElementById("connext").addEventListener("click", function() {
     
    up = up + 3
    up2 = up2 + 3
    up3 = up3 + 3
    bgch1.style.backgroundImage="url(imgs/i"+up+".jpg)";
    if(up>12){
        up=-2
    }
    bgch2.style.backgroundImage="url(imgs/i"+up2+".jpg)";
    if(up2>12){
        up2=-1
    }
    bgch3.style.backgroundImage="url(imgs/i"+up3+".jpg)";
    if(up3>12){
        up3=0
    }

});

document.getElementById("conprev").addEventListener("click", function() {
     
    up = up - 3
    up2 = up2 - 3
    up3 = up3 - 3
    bgch1.style.backgroundImage="url(imgs/i"+up+".jpg)";
    if(up<1){
        up=13
    }
    bgch2.style.backgroundImage="url(imgs/i"+up2+".jpg)";
    if(up2<1){
        up2=14
    }
    bgch3.style.backgroundImage="url(imgs/i"+up3+".jpg)";
    if(up3<1){
        up3=15
    }

});






//hover bg zoom

bgch1.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = bgch1.style.backgroundImage;
});
bgch2.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = bgch2.style.backgroundImage;
});
bgch3.addEventListener("mouseenter", function () {
    zoom.style.backgroundImage = bgch3.style.backgroundImage;
});



//zoom controls appear

document.getElementById("zoom").addEventListener("click", function () {
   document.getElementById("zoomcontrols").style.display = "block"; 
});



//zoom

document.getElementById("pos").addEventListener("click", function () {
    num =  num + 10;
    num2 = num2 + 7;
    
    
    if(num < 91){
     
    zoom.style.width = num+"%";
    }
    if(num2 < 64){  
    zoom.style.height = num2+"%";
    }
});
document.getElementById("neg").addEventListener("click", function () {
    num =  num - 10;
    num2 = num2 - 7;
   if(num > 11){
        
    zoom.style.width = num+"%";
   }
    if(num2 > 8)  {
    zoom.style.height = num2+"%";
    }
});