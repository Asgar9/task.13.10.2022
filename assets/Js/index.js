function form(){
    let firstname=document.form.firstname.value;
    let surname=documnet.form.surname.value;
    let email=documenet.form.email.value;
    let firstnameError=surnameError=emailError;
    if(firstname===""){
        error("firstnameError","Please eneter the firstsname");
    }
    if(surname===""){
        error("surnameError","Please eneter the surname");
    } 
    if(email===""){
        error("emailError","Please eneter the email");
    }
}
function error(elementId,message){
    document.getElementById(elementId).innerHTML=message;
}
