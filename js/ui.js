

export class Ui{
    constructor(){
        this.kobaia=""
    }
    

    displayData(meals){
         this.kobaia=""
        for(let i=0;i<=19;i++){
            this.kobaia+=`
            <div data-id="${meals[i].idMeal}" class="col-lg-3 col-md-6 col-sm-12 overflow-hidden details  meal">
                    <img class="w-100 rounded-4" src="${meals[i].strMealThumb}" alt="">
                    
                    <div class="d-flex px-2 align-items-center fs-3 desc rounded-4">
                        <p>${meals[i].strMeal}</p>
                    </div>
                
            </div>
            `
        }

        document.querySelector(".rowD").innerHTML=this.kobaia
    }

    displaySearch(meals){
        this.kobaia=""
       for(let i=0;i<meals.length;i++){
           this.kobaia+=`
           <div data-id="${meals[i].idMeal}" class="col-lg-3 col-md-6 col-sm-12 overflow-hidden details  meal">
                   <img class="w-100 rounded-4" src="${meals[i].strMealThumb}" alt="">
                   
                   <div class="d-flex px-2 align-items-center fs-3 desc rounded-4">
                       <p>${meals[i].strMeal}</p>
                   </div>
               
           </div>
           `
       }

       document.querySelector(".rowD").innerHTML=this.kobaia
   }

    displayList(list){
         this.kobaia=""
        for(let j=0;j<=13;j++){
            this.kobaia+=`
            <div data-category="${list.categories[j].strCategory}" class="col-lg-3 col-md-6 col-sm-12 overflow-hidden category-2 meal">
                    <img class="w-100 rounded-4" src="${list.categories[j].strCategoryThumb}" alt="">
                    
                    <div class="d-flex flex-column px-2 align-items-center  desc rounded-4">
                        <p class="fs-3">${list.categories[j].strCategory}</p>
                        <p>${list.categories[j].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                
            </div>
            `
        }
        document.querySelector(".rowD").innerHTML=this.kobaia

    }



    displayCategoryAreaAndInggrdeintMeals(meals){
         this.kobaia=""
        for(let i=0;i<meals.length;i++){
            this.kobaia+=`
            <div data-id="${meals[i].idMeal}" class="col-lg-3 col-md-6 col-sm-12 overflow-hidden details  meal">
                    <img class="w-100 rounded-4" src="${meals[i].strMealThumb}" alt="">
                    
                    <div class="d-flex px-2 align-items-center fs-3 desc rounded-4">
                        <p>${meals[i].strMeal}</p>
                    </div>
                
            </div>
            `
        }

        document.querySelector(".rowD").innerHTML=this.kobaia
    }


     displayArea(meals){
         this.kobaia=""
        for(let i=0;i<=19;i++){
            this.kobaia+=`
            <div data-area="${meals[i].strArea}" class="col-lg-3 col-md-6 col-sm-12 overflow-hidden text-white text-center area">
                    <i class="fa-solid fa-house  py-2"></i>
                    
                    <p class="fs-2">${meals[i].strArea}</p>
                
            </div>
            `
        }

        document.querySelector(".rowD").innerHTML=this.kobaia
    }

    displayingr(meals){
         this.kobaia=""
        for(let i=0;i<20;i++){
            this.kobaia+=`
            <div  data-ing="${meals[i].strIngredient}" class="col-lg-3 col-md-6 col-sm-12 overflow-hidden text-white text-center ing area">
                    <i class="fa-solid fa-drumstick-bite py-2"></i>
                    
                    <p class="fs-2">${meals[i].strIngredient}</p>
                    <p>${meals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                
            </div>
            `
        }

        document.querySelector(".rowD").innerHTML=this.kobaia
    }


    displayDeails(mData){



        let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (mData[`strIngredient${i}`]) {
            ingredients += `<span style="background-color: rgb(173, 223, 253);" class="p-2 text mx-1 my-2  rounded-2">${mData[`strMeasure${i}`]} ${mData[`strIngredient${i}`]}</span>`
        }
    }

    let tags = mData.strTags?.split(",")
    // let tags = meal.strTags.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
         <span style="background-color: rgb(222, 149, 148);" class="p-2 mx-1 my-2 text-white  rounded-2">${tags[i]}</span>`
    }
        
        
            this.kobaia=`
            <i class="fa-solid fa-x  position-absolute closeDetails "></i>
            <div class="col-lg-4 col-md-12 col-sm-12 ">
                <div class="text-white">
                    <img class="img-fluid rounded-4" src="${mData.strMealThumb}" alt="">
                    <h2 class="pt-2">${mData.strMeal}</h2>

                </div>
            </div>

            <div class="col-lg-8 col-md-12 col-sm-12 ">
            
                <div class="text-white">
                    <h2>Instructions</h2>
                    <p>${mData.strInstructions}</p>
                </div>
                <div class=" py-2 text-white d-flex">
                    <h3>Area : </h3>
                    <h3 class="ps-2">${mData.strArea}</h3>
                </div>

                <div class="Cateo py-2 text-white d-flex">
                    <h3>Category : </h3>
                    <h3 class="ps-2">${mData.strCategory}</h3>
                </div>

                
                    
                <div class="recip ps-0 py-2 px-3">
                    <h3 class="text-white">Recipes  :</h3>
                    <div class="py-1 d-flex justify-content-center align-content-center align-items-center g-1 flex-wrap">
                        ${ingredients}
                    </div>

                </div>

                

                <div class="tags py-2">
                    <h3 class="text-white">Tags :</h3>
                    <div class="py-3">
                        ${tagsStr}
                    </div>
                </div>

                <div class="butons ">
                    <a target="_blank" href="${mData.strSource}"><button class="btn btn-success text-decoration-none">Source</button></a>
                    <a target="_blank" href="${mData.strYoutube}"><button class="btn btn-danger text-decoration-none">Youtube</button></a>
                </div>

                
            </div>
            `
       

        document.querySelector(".row-2").innerHTML=this.kobaia
    }


    displayContact(){
        this.kobaia=`
        <div class="inouts row g-4 align-content-center ">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="your name">
                        <input  id="nameInput" data-v="name" placeholder="Enter Your Name" class="chek form-control" type="text">
                        <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-block text-center d-none">
                            <p>Special characters and numbers not allowed</p>
                        </div>
                    </div>
                    
                </div>
    
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="your name">
                        <input id="emailInput" data-v="eamil" placeholder="Enter Your Email" class="chek form-control" type="text">
                        <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-block text-center d-none">
                            <p>Email not valid *exemple@yyy.zzz</p>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="your name">
                        <input id="phoneInput" data-v="phone" placeholder="Enter Your Age" class="chek form-control" type="text">
                        <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-block text-center d-none">
                            <p> Enter valid Phone Number</p>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="your name">
                        <input id="ageInput" data-v="age" placeholder="Enter Your Phone" class="chek form-control" type="text">
                        <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-block text-center d-none">
                            <p>Enter valid age</p>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="your name">
                        <input id="passwordInput" data-v="pass" placeholder="Enter Your Password" class="chek form-control" type="text">
                        <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-block text-center d-none">
                            <p>Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="your name">
                        <input id="repasswordInput" data-v="repass" placeholder="Re Your Password" class="chek form-control" type="text">
                        <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-block text-center d-none">
                            <p>Enter valid repassword </p>
                        </div>
                    </div>
                </div>
    
                <div class="text-center">
                    <button id="submitBtn" disabled class="btn btn-danger">Submit</button>
                </div>
            </div>


        `
        document.querySelector(".rowD").innerHTML=this.kobaia

    }

    


}