async function renderSkills(){

const res=await fetch("data/skills.json")
const data=await res.json()

const container=document.getElementById("skillsContainer")

Object.keys(data).forEach(category=>{

const card=document.createElement("div")
card.className="glass"

let html=`<h3 class="text-lg font-semibold mb-3">${category}</h3>`

data[category].forEach(skill=>{
html+=`
<div class="flex justify-between text-sm py-1">
<span>${skill.name}</span>
<span class="text-gray-400">${skill.level}</span>
</div>
`
})

card.innerHTML=html
container.appendChild(card)

})

}

renderSkills()