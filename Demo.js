function fun(){
var result=document.getElementById("sixteen").value
var bool=/^[7-9]{1}[0-9]{9}$/.test(result)
if(bool==false){
    document.getElementById("xxx").innerHTML="(invalid Number please enter valid number)"
    return false
}
var mail=document.getElementById("six").value
var bool1= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(mail)
if(bool1==false){
    document.getElementById("gm").innerHTML="(Invalid mail enter correct mail id)"
    return false
}
}