function get() {
    
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var mail = document.getElementById("mail").value;

    var error1 =  document.getElementById("error1");
    var error2 =  document.getElementById("error2"); 
    var error3 =  document.getElementById("error3"); 


    fName = fName.replace(/\s\s+/g, " ");
    lName = lName.replace(/\s\s+/g, " ");
    mail = mail.replace(/\s\s+/g, "");

   
    

   

    if (fName.length <= 1  ) {

        error1.innerText= "Your name must contain more than one character";
        error1.style.transition = "3s";
        error1.style.color = "red";

      
    }

  

    else if(lName.length <=1) {
        error2.innerText= "Yourr name must contain more than one character";
        error2.style.transition = "3s";
        error2.style.color = "red";

    }

    

    else if(mail.value =null) {
              error3.innerText="You can't leave field empty"
              error3.style.transition = "3s";
              error3.style.color = "red";
    }

    
     else if(fName.length > 14){
        error1.innerText="Character limit is 14"
        error1.style.transition = "3s";
        error1.style.color = "red";

     
    }

    else if(lName.length > 14){

        error2.innerText="Character limit is 14"
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

    if(fName.match(letters) && lName.match(letters)) {
                
        error1.innerText=""

        error2.innerText=""


    }

    

    else {
        error1.innerText="Only letters required!"
        error1.style.transition = "3s";
        error1.style.color = "red";

        error2.innerText="Only letters required!"
        error2.style.transition = "3s";
        error2.style.color = "red";


    }


   
    
   
    console.log("Welcome " + fName + " " + lName);
    console.log(mail);
}

var button= document.getElementById("btn");
var dropdown= document.getElementById("drop")
dropdown.style.display="none"


function p () {
    if (dropdown.style.display=="none"){
                 dropdown.style.transform = "scale(1.2)";
                dropdown.style.display="block"

               
            }
            

}



function cloose () {
    dropdown.style.display="none"


}









    