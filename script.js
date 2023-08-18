// 7. Password Checker.

// Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.

// Expected output:
// const user = new User("johndoe", "Password123");
// console.log(user.getPassword()); // ***********

const Button = document.getElementById("btn");
const output = document.getElementById("opScreen");

Button.addEventListener('click',()=>{
const userInput = document.getElementById("checkPass").value

    class User{
        constructor(userName, password){
           this.userName = userName;
           this.password = password;
        }
        getPassword(){
           return this.password.replace(/./g, "*")
        }
        setPassword(userPassword){
            let  containNumber = false;
            let  containUppercase = false;
    
             for(let i=0; i<userPassword.length; i++){
    
               const passChar = userPassword.charAt(i)
               if(!isNaN(passChar)){
                containNumber = true;
               }
               else if(passChar === passChar.toUpperCase()){
                containUppercase = true;
               }
             }
    
             if(userPassword.length >=8 && containNumber && containUppercase){
                this.password = userPassword;
             }else{
                output.innerText = ( "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
                output.style.color = "red"
             }
        }
    }
    const user = new User();
user.setPassword(userInput);
    output.innerText = user.getPassword();
    output.style.color = "green"
})
   
// class User{
//     constructor(userName, password){
//        this.userName = userName;
//        this.password = password;
//     }
//     getPassword(){
//        return this.password.replace(/./g, "*")
//     }
//     setPassword(userPassword){
//         let  containNumber = false;
//         let  containUppercase = false;

//          for(let i=0; i<userPassword.length; i++){

//            const passChar = userPassword.charAt(i)
//            if(!isNaN(passChar)){
//             containNumber = true;
//            }
//            else if(passChar === passChar.toUpperCase()){
//             containUppercase = true;
//            }
//          }

//          if(userPassword.length >=8 && containNumber && containUppercase){
//             this.password = userPassword;
//          }else{
//             console.log( "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
//          }
//     }
// }
// const user = new User("nitish","");
// user.setPassword("adksjlf123")
// console.log(user.getPassword())  
