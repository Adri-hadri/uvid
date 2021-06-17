function popis(){

var brojevi=prompt("Upišite brojeve! ","");

with(brojevi){
document.write("Ovo su vaši brojevi " + brojevi + "<br />");
document.write("Duljina znakova u polju je: " + length + "<br />");

var spaceCount = (brojevi.split(" ").length - 1);
document.write("Praznih mjesta ima: " + spaceCount + "<br />");

var elementi = brojevi.split(" ");
for (let index = 0; index < elementi.length; index++) {
    document.write(elementi[index]+="<br /> ");    
}

var suma1 = 0;
var suma2 = 0;
var suma3 = 0;
var suma4 = 0;

suma1 = parseInt(elementi[0]);
document.write("Suma: " + suma1 + "<br />");

suma2 = suma1 + parseInt(elementi[1]);
document.write("Suma: " + suma2 + "<br />");

suma3 = parseInt(elementi[2]);
document.write("Suma: " + suma1 + "<br />");

suma4 = suma3 + parseInt(elementi[3]);
document.write("Suma: " + suma2 + "<br />");

if (suma1==suma2) {
    document.write("Indeks broja koji ispunjava uvjet: " + indexOf(elementi[1])  + "<br />");
}
else if (suma2==suma3) {
    document.write("Indeks broja koji ispunjava uvjet: " + indexOf(elementi[2])  + "<br />")  
}

}};