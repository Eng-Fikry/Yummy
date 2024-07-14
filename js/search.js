import { Details } from "./details.js"

import { Ui } from "./ui.js"



export class Search{
    constructor(){

        this.ui=new Ui()
        this.width=$("nav").outerWidth()
        
        $(".s").click(()=>{
            $(".search").removeClass("d-none")
            $(".rowD").html("")
            
            $(".navb").css("left",-this.width)
            $(".bar").removeClass("d-none")
            $(".xM").addClass("d-none")
         })

         $("a").not(".s").click(()=>{
            $(".search").addClass("d-none")

         })



         document.querySelectorAll(".sear").forEach((input)=>{
            input.addEventListener("keyup",()=>{
                let attr=input.getAttribute("data-s")
                let value=input.value
                if(attr=="word"){
                    
                    
                    this.searchWord(value)
                }

                
               else if(attr=="alpha"){
                    
                    this.searchAlpha(value)
                    if(value==""){
                        $(".loadScreen").addClass("d-none")

                    }
                    else if(value.length>1){
                        $(".loadScreen").addClass("d-none")
                        $(".rowD").html(`<p class="text-white text-center fs-1 ">Enter One Letter Please!</p>`)

                    }
                }
            })
         })
    }



    async searchWord(word){

        $(".loadScreen").removeClass("d-none")
        const search= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        const meal= await search.json()
        $(".loadScreen").addClass("d-none")
        
        this.ui.displaySearch(meal.meals)
        new Details()
    
    }
    
    async searchAlpha(alpha){
    
        $(".loadScreen").removeClass("d-none")
        const search= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
        const meal= await search.json()
        $(".loadScreen").addClass("d-none")
        this.ui.displaySearch(meal.meals)
        new Details()
    
    }
}