import { Details } from "./details.js";
import { Ui } from "./ui.js";


export class AaI{
    constructor(){
        this.ui=new Ui()
        this.width=$("nav").outerWidth()

        document.querySelectorAll(".ai").forEach((link)=>{
            
            link.addEventListener("click",()=>{
            
            const word= link.getAttribute("data-cat")
            this.areaAndIngr(word)
            $(".navb").css("left",-this.width)
            
            $(".bar").removeClass("d-none")
            $(".xM").addClass("d-none")
            

        })
     })

    }

    async areaAndIngr(word){
        $(".loadScreen").removeClass("d-none")
        const meals= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${word}=list`)
        const date= await meals.json() 
        $(".loadScreen").addClass("d-none")
        
        console.log(date.meals);
    
        if(word=="a"){
            this.ui.displayArea(date.meals)
            document.querySelectorAll(".area").forEach( (word2)=>{
                word2.addEventListener("click",async()=>{
                    const area=word2.getAttribute("data-area")
                    $(".loadScreen").removeClass("d-none")
                    const areaMeals= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
                    const ameals= await areaMeals.json()
                    $(".loadScreen").addClass("d-none")
                    
                    this.ui.displayCategoryAreaAndInggrdeintMeals(ameals.meals)
                    new Details()
                    
    
             })
    
            })
            
        }
        else{
            this.ui.displayingr(date.meals)
    
            document.querySelectorAll(".ing").forEach( (word2)=>{
                word2.addEventListener("click",async()=>{
                    const ing=word2.getAttribute("data-ing")
                    $(".loadScreen").removeClass("d-none")
                    const ingMeals= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
                    const imeals= await ingMeals.json()
                    $(".loadScreen").addClass("d-none")
                    
                    this.ui.displayCategoryAreaAndInggrdeintMeals(imeals.meals)
                    new Details()
                    
    
             })
    
            })
        }
        
        
        
    }
}