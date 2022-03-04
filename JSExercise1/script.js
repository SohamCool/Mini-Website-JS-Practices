// var close=document.getElementsByClassName("closebtn");
// var i;
// for(i=0;i<close.length;i++){
//     close[i].onclick=function(){
//         var div=this.parentElement;
//         div.style.opacity="0";
//         alert("soham");
//         setTimeout(function(){div.style.display="none";},600);
//     }
// }
function check(){
    var userid=document.getElementById(exampleInputEmail1).value;
    var pass=document.getElementById(exampleCheck1).value;
    if(userid=="admin123@gmail.com" && pass=="exampleInputPassword1"){
        alert("Login Successfully...");
        location.href("_blank");
    }
    else{
        alert("failed to login...");
    }
}