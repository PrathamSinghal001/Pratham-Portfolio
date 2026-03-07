let projects=[]

async function loadProjects(){

const res=await fetch("data/projects.json")
projects=await res.json()

renderProjects("All")
}

function renderProjects(filter){

const container=document.getElementById("projectsContainer")
container.innerHTML=""

projects
.filter(p=>filter==="All"||p.category===filter)
.forEach(project=>{

const card=document.createElement("div")
card.className="glass"

card.innerHTML=`
<h3 class="font-semibold text-lg">${project.title}</h3>

<p class="text-gray-400 text-sm mt-2">${project.description}</p>

<div class="mt-3 text-xs">
${project.tech.map(t=>`<span class="mr-2">${t}</span>`).join("")}
</div>

<div class="mt-4 flex gap-3 text-sm">

<a href="${project.github}" target="_blank">Code</a>

${project.live?`<a href="${project.live}" target="_blank">Live</a>`:""}

</div>
`

container.appendChild(card)

})
}

document.querySelectorAll(".filter-btn").forEach(btn=>{
btn.addEventListener("click",()=>{

document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"))

btn.classList.add("active")

renderProjects(btn.dataset.filter)

})
})

loadProjects()