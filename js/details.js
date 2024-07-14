
import { Ui } from "./ui.js";



export class Details{
    constructor(){
        this.ui=new Ui()
        
        document.querySelectorAll(".details").forEach((meal)=>{
            
            meal.addEventListener("click",()=>{
                
                $(".search").addClass("d-none")
        
                const id= meal.getAttribute("data-id")
                console.log(id);
              
              this.mealDetails(id)
            })
        })
        
    }
    
    async mealDetails(id){
       
        $(".loadScreen").removeClass("d-none")
        const meals= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const mealData= await meals.json()
        $(".loadScreen").addClass("d-none")
        console.log(mealData.meals[0]);
        this.ui.displayDeails(mealData.meals[0])
        $(".mDetails").removeClass("d-none")
        $(".meales").addClass("d-none")

        $(".closeDetails").click(()=>{
            console.log("hi");
            $(".mDetails").addClass("d-none")
            $(".meales").removeClass("d-none")
            
            
            
           


        })
    }

}