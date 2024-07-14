import { Ui } from "./ui.js";


export class Contact{
    constructor(){
        this.ui=new Ui()
        this.att=""
        this.width=$("nav").outerWidth()

        $(".contcts").click(()=>{
            $(".navb").css("left",-this.width)
            $(".bar").removeClass("d-none")
            $(".xM").addClass("d-none")
            this.ui.displayContact()

            document.querySelectorAll(".chek").forEach((inpt)=>{
                inpt.addEventListener("keyup",()=>{
                this.att=inpt.getAttribute("data-v")
                console.log(this.att);
                this.inputsValidation()
                })
            })
        })

        
    }


    inputsValidation() {
        if (this.att=="name") {
            if (this.nameValidation()) {
                document.getElementById("nameAlert").classList.replace("d-block", "d-none")
    
            } else {
                document.getElementById("nameAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (this.att=="eamil") {
    
            if (this.emailValidation()) {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (this.att=="phone") {
            if (this.phoneValidation()) {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (this.att=="age") {
            if (this.ageValidation()) {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (this.att=="pass") {
            if (this.passwordValidation()) {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (this.att=="repass") {
            if (this.repasswordValidation()) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
    
        if (this.nameValidation() &&
        this.emailValidation() &&
        this.phoneValidation() &&
        this.ageValidation() &&
        this.passwordValidation() &&
        this.repasswordValidation()) {
            submitBtn.removeAttribute("disabled")
        } else {
            submitBtn.setAttribute("disabled", true)
        }
    }
    
     nameValidation() {
        return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
    }
    
     emailValidation() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
    }
    
     phoneValidation() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
    }
    
     ageValidation() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
    }
    
     passwordValidation() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
    }
    
     repasswordValidation() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }
}
