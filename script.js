function Libretto()
{
    this.lista=[];
    this.aggiungiVoto=function(voto,materia,data){
    var obj={
        voto:voto, 
        materia:materia, 
        data:data
    };
    this.lista.push(obj);
    this.renderVoto(obj);
    this.save();
}
    this.renderVoto=function(objVoto)
    {
        var ul= document.querySelector("#lista-voti");
        var li=document.createElement("li");
        li.className="list-group-item";
        li.innerHTML= "in " + objVoto.materia +" ho preso " +objVoto.voto + " il giorno "+objVoto.data;
        ul.appendChild(li);
    };
    this.save=function()
    {
        localStorage.setItem("db",JSON.stringify(this.lista));//json è un metodo che permette di trasformare in stringa
    }
    this.clear=function()
    {
        this.lista=[];
        this.save();
        location.href=location.href;//per cancellare tutto
    }
    if(localStorage.getItem("db"))
    {
        this.lista=JSON.parse(localStorage.getItem("db"));
        for(var i=0; i<this.lista.length;i++)
        {
        this.renderVoto(this.lista[i]);
        }
    }
}
var libretto=new Libretto();
var button = document.querySelector("#save");
button.addEventListener("click",function (){
var voto=document.querySelector("input[name=voto]").value;
var materia=document.querySelector("input[name=materia]").value;
var data=document.querySelector("input[name=data]").value;
if(data == "")
{
    data=new Date();
}
libretto.aggiungiVoto(voto,materia,data);
});

var clear_button=document.querySelector("#clear");
clear_button.addEventListener("click",function(){
libretto.clear();
});
