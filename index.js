function getbmivalue(){
var weight=document.getElementById("weight"). value ;
var height=document.getElementById("height").value ;
height=height*12;
//height in meter
height=height*0.025;
var newbmivalue=weight/(height*height);
var newbmivalue1=Math.round(newbmivalue);
document.getElementById("bmivalue").value=newbmivalue1;
}
