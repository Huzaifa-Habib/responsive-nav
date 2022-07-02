function get() {
    
    var fName = document.getElementById("fName").value;
    var passa = document.getElementById("pass").value;
    var mail = document.getElementById("mail").value;

    var error1 =  document.getElementById("error1");
    var error2 =  document.getElementById("error2"); 
    var error3 =  document.getElementById("error3"); 


    fName = fName.replace(/\s\s+/g, " ");
    // lName = lName.replace(/\s\s+/g, " ");
    mail = mail.replace(/\s\s+/g, "");

   
    

   

    if (fName.length <= 1  ) {

        error1.innerText= "Your name must contain more than one character";
        error1.style.transition = "3s";
        error1.style.color = "red";

    }

  
    
     else if(fName.length > 14  ){
        error1.innerText="Character limit is 14"
        error1.style.transition = "3s";
        error1.style.color = "red";

       


     
    }

    else if(passa.length < 4 || passa.length > 14){

        error2.innerText="Password must be greater than 4 and less than 15"
        error2.style.transition = "3s";
        error2.style.color = "red";


    }





    else{
        error1.innerText=""
        error2.innerText=""
        error3.innerText=""


    }


    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(mail)) {
        error3.innerText='';
    }
    else {
        error3.innerText='The email address is not valid';
        error3.style.transition = "3s";
        error3.style.color = "red";
        return false
    }


    var letters = /^[A-Za-z]+$/;

    if(fName.match(letters)) {
                
        error1.innerText=""



    }

    

    else {
        error1.innerText="Only letters required!"
        error1.style.transition = "3s";
        error1.style.color = "red";

        error2.innerText="Only letters required!"
        error2.style.transition = "3s";
        error2.style.color = "red";


    }

    

   
    
   
    console.log("Welcome " + fName);
    console.log(mail);
}

var button= document.getElementById("btn");
var dropdown= document.getElementById("drop")
var body=document.getElementById("body")
dropdown.style.display="none"


function p () {
    if (dropdown.style.display=="none"){
                 dropdown.style.transform = "scale(1.2)";
                dropdown.style.display="block"
                body.style.backgroundColor="rgba(0, 0, 0, .4)"       
    }
    

}



function cloose () {
    dropdown.style.display="none"

    var fName = document.getElementById("fName").value="";
    var passa = document.getElementById("pass").value="";
    var mail = document.getElementById("mail").value="";
    var password=document.getElementById("logPass").value=""
    var email=document.getElementById("logEmail").value=""
    gmailError.innerText=""
    passError.innerText=""

    error1.innerText=""
    error2.innerText=""
    error3.innerText=""

    body.style.backgroundColor="white"


   
}

// For log in===================================================================

var logIn=document.getElementById("logIn")
var tab1=document.getElementById("tab1")
var tab2=document.getElementById("tab2")
tab2.style.backgroundColor="rgba(117, 117, 117, .3)"
logIn.style.display="block"


function forLog() {
    if (logIn.style.display="block"  ) {
        signUp.style.display="none";
        tab2.style.backgroundColor="rgba(117, 117, 117, .3)"
        tab1.style.backgroundColor="white"


    }

    else{
        tab1.style.backgroundColor="white"

    }


}

function forSign(){
    if (signUp.style.display="none"  ) {
        signUp.style.display="block";
        tab2.style.backgroundColor="white"
        tab1.style.backgroundColor="rgba(117, 117, 117, .3)"
        logIn.style.display="none"

    }

    else{
        tab1.style.backgroundColor="white"

    }


}


function logGet(){
    var password=document.getElementById("logPass").value
    var email=document.getElementById("logEmail").value
    var gmailError=document.getElementById("gmailError")
    var passError=document.getElementById("passError")
    var regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (password.length < 4 || password.length > 14){

        passError.innerText="Password must be greater than 4 and less than 15"
        passError.style.transition = "3s";
        passError.style.color = "red";
 
    }

    else if (regex_pattern.test(email)) {
        gmailError.innerText=""
        gmailError.style.transition = "3s";
        gmailError.style.color = "red";

    }

    else{
        passError.innerText=""
        gmailError.innerText="Gmail is not valid!"


    }

    console.log("Gmail : " + email  )
    console.log("Password : " + password )


}









    