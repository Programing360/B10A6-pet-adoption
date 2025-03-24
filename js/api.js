// {
//     "status": true,
//     "message": "successfully fetched all the categories data",
//     "categories": [
//       {
//         "id": 1,
//         "category": "Cat",
//         "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//       },
//       {
//         "id": 2,
//         "category": "Dog",
//         "category_icon": "https://i.ibb.co.com/c8Yp1y7/dog.png"
//       },
//       {
//         "id": 3,
//         "category": "Rabbit",
//         "category_icon": "https://i.ibb.co.com/3hftmLC/rabbit.png"
//       },
//       {
//         "id": 4,
//         "category": "Bird",
//         "category_icon": "https://i.ibb.co.com/6HHZwfq/bird.png"
//       }
//     ]
//   }

// pic.forEach(items => {
//     // console.log(items)
//     const div = document.getElementById("display-item")
//     console.log(div)
//     // div.innerHTML = ""
//     // divId.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
//     const divId = document.createElement("div")
//     divId.classList ="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-4"
//     divId.innerHTML = `
    
//     <div id = "displayLoad" class="card lg:w-68 md:w-44 shadow-sm">
//         <figure class = "">
//           <img class ="object-cover mx-auto w-full lg:w-full h-full"
//             src="${items.image}" />
//         </figure>
        // <div class="card-body">
        //   <h2 class ="text-2xl font-bold">${items.pet_name}</h2>
        //   <div class = "flex items-center gap-1">
        //   <img class = "w-4" src = "Frame.svg"/>
        //   <h4>${items.breed}</h4>
        //   </div>
        //   <div class = "flex items-center gap-1">
        //   <img class = "w-4" src="https://img.icons8.com/ios/50/birth-date.png" alt="birth-date"/>
        //   <h4>${items.date_of_birth}</h4>
        //   </div>
        //   <div class = "flex items-center gap-1">
        //   <img class = "w-4" src="https://img.icons8.com/sf-regular/48/gender.png" alt="gender"/>
        //   <h4>${items.gender}</h4>
        //   </div>
        //   <div class = "flex items-center gap-1">
        //   <img class = "w-4" src="https://img.icons8.com/ios/50/average-2.png" alt="average-2"/>
        //   <h4>${items.price}</h4>
        //   </div>
        //   <hr>
        //   <div class = "flex-wrap justify-between lg:flex lg:gap-2 md:pb-2">
        //   <button class ="btn h-8">
        //     <img class ="w-4" src="https://img.icons8.com/fluency-systems-regular/48/facebook-like--v1.png" alt="facebook-like--v1"/>
        //   </button>
        //   <button class ="btn h-8">
        //     Adopts
        //   </button>
        //   <button class ="btn h-8">
        //     Details
        //   </button>
        //   </div>
        // </div>
//     </div>
//     <div>
    
//     </div>
    
    
//     `
    
//     div.append(divId)
// })

function setTime(){
        console.log("hello")
}
setTimeout(setTime,3000)