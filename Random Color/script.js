var text;

function renkOlustur(){

var a = "ABCDEF0123456789";
text= "#";

for(i = 0 ; i < 6 ; i++) {

var random = Math.round(Math.random()* 15 );

text += a.charAt(random);


}



}

setInterval( function (){

    renkOlustur();

    document.getElementById("arka").style.backgroundColor = text ;

},2000);