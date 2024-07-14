import { AaI } from "./areaAndIngredient.js"
import { Cat } from "./category.js"
import { Contact } from "./contact.js"
import { Details } from "./details.js"
import { Search } from "./search.js"
import { Ui } from "./ui.js"





export class Home{
    
    constructor(){
        this.meals("")
       
        this.ui=new Ui()
        
        
        //navbar
        this.width=$("nav").outerWidth()
        $(".bar").click(()=>{

        $(".navb").css("left",0)
           
        $(".bar").addClass("d-none")
        $(".xM").removeClass("d-none")
        
        $(".s").fadeIn(150)

        
        // .animate({top:"0px",opacity:"1"},200,function(){$(".c").animate({top:"0px",opacity:"1"},200,function(){$(".a").animate({top:"0px",opacity:"1"},200,function(){$(".i").animate({top:"0px",opacity:"1"},200,function(){$(".cc").animate({top:"0px",opacity:"1"},200)})})})})
        $(".s").animate({top:"0px",opacity:"1"},400)
        $(".c").animate({top:"0px",opacity:"1"},450)
        $(".a").animate({top:"0px",opacity:"1"},500)
        $(".i").animate({top:"0px",opacity:"1"},550)
        $(".cc").animate({top:"0px",opacity:"1"},600)
            
        })
        


        $(".xM").click(()=>{

           
            $(".navb").css("left",-this.width)
            $(".bar").removeClass("d-none")
            $(".xM").addClass("d-none")
            
            $(".s").animate({top:"100px",opacity:"0"},100)
           $(".c").animate({top:"100px",opacity:"0"},100)
           $(".a").animate({top:"100px",opacity:"0"},100)
           $(".i").animate({top:"100px",opacity:"0"},100)
           $(".cc").animate({top:"100px",opacity:"0"},100)

        })

         
        //category
        new Cat()
        

        //area and ingredient
        new AaI()


        //search
        new Search()

        //contact
        new Contact()


        

    };
        
    async meals(mName){
        
        $(".loadScreen").removeClass("d-none")
        const meals= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mName}`)
        const date= await meals.json()
        $(".loadScreen").addClass("d-none")
        
        this.ui.displayData(date.meals)
        new Details()
        
        
    }

}
