import { Details } from "./details.js";
import { Ui } from "./ui.js";




export class Cat{
    constructor(){
        this.ui=new Ui()
        this.width=$("nav").outerWidth()
        $(".category").click(()=>{
            this.categories()
            $(".navb").css("left",-this.width)
            $(".bar").removeClass("d-none")
            $(".xM").addClass("d-none")

            
        })
    }

    async categories(){
        $(".loadScreen").removeClass("d-none")
        const meals= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const date= await meals.json() 
        $(".loadScreen").addClass("d-none")
        
        this.ui.displayList(date)

        document.querySelectorAll(".category-2").forEach((category)=>{
        category.addEventListener("click",()=>{
            
            const cate = category.getAttribute("data-category")
            this.catMeals(cate)
            })

        })
    
    }

    async catMeals(catMeals){

        const meals= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catMeals}`)
        const date= await meals.json() 
        

        this.ui.displayCategoryAreaAndInggrdeintMeals(date.meals)
        new Details()
        
}
}