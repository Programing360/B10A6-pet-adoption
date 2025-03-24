const btnLoads = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayBtnCategorise(data.categories))
        .catch(
            error => console.log(error)
        )
}
// btn Create----------------------------------------------------------
const displayBtnCategorise = (category) => {
    console.log(category)
    const btn = document.getElementById("btn-Load")

    category.forEach(item => {
        console.log(item)
        const div = document.createElement("div")
        div.innerHTML = `
        <button id="btn-${item.id}" onclick = "btnCategory('${item.category}')" class = "btn w-[200px] bg">
        <img class = "w-6" src = "${item.category_icon}"/>
        <div>
        ${item.category}
        </div>
        </button>

        `
        btn.append(div)
    })
    const btn2 = document.getElementById("sort-btn")
    const div = document.createElement("div")
    div.classList = "flex justify-between item-center mx-auto w-11/12 mt-8"
    div.innerHTML = `
        <p class = "font-bold">Best Deal For you<p/>
        <button class ="btn w-">Sort By Price</button>

    `
    btn2.append(div)
}
// btn category display ----------------------------------------------------
const btnCategory = (id) => {
    // fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then(res => res.json())
        .then(data => displayCardCategorise(data.data))
    //     .then(data => {
    //         displayCardCategorise(data.data)
    //         // data.data.forEach(e => {
    //         //     console.log(e.category)
    //         //     btnDisplayCategory(e.category)
    //         // })
    //         // displayCardCategorise(data)
    //     })
    // console.log(id)
}
const displayCard = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayCardCategorise(data.pets))
        .catch(
            error => console.log(error)
        )
}
// card display--------------------------------------------------------------
setTimeout(() => {
    const displayId =document.getElementById("display-items")
    displayId.classList.remove("hidden")
    const displayId2 =document.getElementById("display-item")
    displayId2.classList.remove("gird")
}, 2000);

const displayCardCategorise = (pic) => {
    console.log(pic)
    const sectionId = document.getElementById("display-item")
    sectionId.innerHTML = ""
    if (pic.length === 0) {
        console.log("hello")
        const petReserveId = document.getElementById("pet-reserve")
        petReserveId.classList.add("hidden")
        sectionId.classList.remove("grid")
        sectionId.innerHTML = `
        <div class = "flex flex-col justify-center items-center gap-3 object-cover mt-20">
        <img src = "images/error.webp"/>
        <p>Oops!There is no event here</p>
        </div>
        `

    }
    else {
        sectionId.classList.add("grid")
        const petReserveId = document.getElementById("pet-reserve")
        petReserveId.classList.remove("hidden")
    }


    pic.forEach(item => {
        // console.log(item)
        let data = item.gender ?? "no data"
        let data2 = item.price ?? "No Price"
        let data3 = item.date_of_birth ?? "No Date"
        let data4 = item.pet_name ?? "No Name"
        const div = document.createElement("div")
        div.innerHTML = `
                <div class = "flex mx-auto w-11/12">
                    <div class="card shadow-sm">
                        <figure class="h-[200px]">
                            <img class="object-cover mx-auto w-full lg:w-full h-full" src="${item.image}" />
    
                        </figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-bold">${data4}</h2>
                            <div class="flex items-center gap-1">
                                <img class="w-4" src="Frame.svg" />
                                <h4>${item.breed}</h4>
                            </div>
                            <div class="flex items-center gap-1">
                                <img class="w-4" src="https://img.icons8.com/ios/50/birth-date.png" alt="birth-date" />
                                <h4>${data3}</h4>
                            </div>
                            <div class="flex items-center gap-1">
                                <img class="w-4" src="https://img.icons8.com/sf-regular/48/gender.png" alt="gender" />
                                <h4>${data}</h4>
                            </div>
                            <div class="flex items-center gap-1">
                                <img class="w-4" src="https://img.icons8.com/ios/50/average-2.png" alt="average-2" />
                                <h4>${data2}</h4>
                            </div>
                            <hr>
                                <div class="flex-wrap justify-between lg:flex lg:gap-2 md:pb-2">
                                    <button onclick = "likeButtonHandler('${item.image}')" class="btn h-8">
                                        <img class="w-4" src="https://img.icons8.com/fluency-systems-regular/48/facebook-like--v1.png" alt="facebook-like--v1" />
                                    </button>
                                    <button class="btn h-8">
                                        Adopts
                                    </button>
                                    <button id = "details-btn" onclick = "btnDetails('${item.petId}')" class="btn h-8">
                                        Details
                                    </button>
                                </div>
                        </div>
                    </div>
                     
                </div >
        `
        sectionId.append(div)
    })

}

const petReserveId = document.getElementById("pet-reserve")
const res = document.createElement("div")
res.classList.remove("hidden")
res.innerHTML = `
    <div id = "pet-reserve-id" class = "w-[350px] h-[450px] md:w-[250px] md:h-[350] lg:w-[320px] lg:h-[520px] border-2 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 rounded-lg overflow-auto" ></div>
    
`
petReserveId.append(res)
// when the like button that is add image to next div ------------------------
const likeButtonHandler = (id) => {
    displayLikeBtn(id)
    // fetch("https://openapi.programming-hero.com/api/peddy/pets")
    //     .then(res => res.json())
    //     .then(data => displayLikeBtn(data.pets[0].image))
    //     .catch(
    //         error => console.log(error)
    //     )
}
const displayLikeBtn = (item) => {
    const petReserveId2 = document.getElementById("pet-reserve-id")
    console.log(petReserveId2)
    const div = document.createElement("div")
    div.classList = "w-20 h-20 pl-1 pt-1"
    div.innerHTML = `
    <img class = "rounded " src = "${item}"/>
    `
    petReserveId2.append(div)
}
// details Modal add------------------------------------------------
const btnDetails = (id) => {
    // console.log(id)
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => {
            showModalContaner(data.petData)

        })
        .catch(
            error => console.log(error)
        )
}
const showModalContaner = (e) => {
    const modalId = document.getElementById("modal-contaner")
    let data = e.gender ?? 'no data'
    let data2 = e.price ?? "No Price"
    let data3 = e.date_of_birth ?? "No Date"
    let data4 = e.pet_name ?? "No Name"
    modalId.innerHTML = `
        <img src = "${e.image}"/>
        <div class="card-body">
            <h2 class="text-2xl font-bold">${data4}</h2>
            <div class="flex items-center gap-1">
                <img class="w-4" src="Frame.svg"/>
                <h4>${e.breed}</h4>
            </div>
            <div class="flex items-center gap-1">
                <img class="w-4" src="https://img.icons8.com/ios/50/birth-date.png" alt="birth-date"/>
                <h4>${data3}</h4>
            </div>
            <div class="flex items-center gap-1">
                <img class="w-4" src="https://img.icons8.com/sf-regular/48/gender.png" alt="gender"/>
                <h4>${data}
                
                </h4>
            </div>
            <div class="flex items-center gap-1">
                <img class="w-4" src="https://img.icons8.com/ios/50/average-2.png" alt="average-2"/>
                <h4>${data2}</h4>
            </div>
            <hr>
            <p>${e.pet_details
        }</p>
        </div>    
    `
    document.getElementById("customModal").showModal()
}
btnLoads()
displayCard()