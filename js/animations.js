const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

function resizeCanvas(){
const hero=document.querySelector(".hero-bg")
canvas.width=hero.offsetWidth
canvas.height=hero.offsetHeight
}

window.addEventListener("resize",resizeCanvas)
resizeCanvas()

const particles=[]

for(let i=0;i<40;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5,
size:2
})
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
p.x+=p.vx
p.y+=p.vy

if(p.x<0||p.x>canvas.width)p.vx*=-1
if(p.y<0||p.y>canvas.height)p.vy*=-1

ctx.fillStyle="#22d3ee"
ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()
})

requestAnimationFrame(animate)
}

animate()

