
/* Navbar Scroll */

const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("bg-black/80", "backdrop-blur")
    } else {
        navbar.classList.remove("bg-black/80", "backdrop-blur")
    }

})


/* Mobile Menu */

const mobileBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})


/* EXPERIENCE */

async function renderExperience() {

    const res = await fetch("data/experience.json")
    const data = await res.json()

    const container = document.getElementById("experienceContainer")

    data.forEach(exp => {

        const card = document.createElement("div")

        card.className = "glass hover:scale-105 transition-transform"

        card.innerHTML = `
        <h3 class="text-lg font-semibold">${exp.title}</h3>

        <p class="text-cyan-400 text-sm mt-1">${exp.company}</p>

        <div class="text-xs text-gray-400 mt-2 space-y-1">
            <p><strong>Mode:</strong> ${exp.mode}</p>
            <p><strong>Duration:</strong> ${exp.duration}</p>
        </div>

        <p class="text-sm mt-4 text-gray-300">
            ${exp.description}
        </p>
        `

        container.appendChild(card)

    })

}

renderExperience()


/* COMPANY PROJECTS */

async function renderCompanyProjects() {

    const res = await fetch("data/company-projects.json")
    const data = await res.json()

    const container = document.getElementById("companyProjectsContainer")

    data.forEach(project => {

        const card = document.createElement("div")

        card.className = "glass hover:scale-105 transition-transform"

        card.innerHTML = `
<h3 class="text-lg font-semibold">${project.title}</h3>

</p>
<p class="text-cyan-400 text-sm mt-1">
Client: ${project.client}
</p>

<div class="text-xs text-gray-400 mt-2 space-y-1">
<p><strong>Role:</strong> ${project.role}</p>
<p><strong>Duration:</strong> ${project.duration}</p>
</div>

<p class="text-sm mt-4 text-gray-300">
${project.description}
</p>

<div class="mt-4">
<a href="${project.live}" target="_blank"
class="text-cyan-400 hover:underline">
Visit Website
</a>
</div>

<div class="mt-3 flex flex-wrap gap-2 text-xs">
${project.tech.map(t => `<span class="px-2 py-1 bg-slate-800 rounded">${t}</span>`).join("")}
</div>
`

        container.appendChild(card)

    })

}

renderCompanyProjects()




/* TIMELINE (Education) */

// async function renderTimeline(file, containerId) {

//     const res = await fetch(file)
//     const data = await res.json()

//     const container = document.getElementById(containerId)

//     container.innerHTML = ""

//     data.forEach((item, i) => {

//         const div = document.createElement("div")

//         div.className = `timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`

//         div.innerHTML = `
//         <div class="timeline-dot"></div>

//         <div class="glass">
//             <h3 class="font-semibold">${item.title}</h3>
//             <p class="text-sm text-gray-400">${item.year}</p>
//             <p class="text-sm text-gray-400">Percentage/CGPA: ${item.score}</p>
//             <p class="text-sm mt-2">${item.description}</p>
//         </div>
//         `

//         container.appendChild(div)

//     })

// }

// renderTimeline("data/education.json", "educationTimeline")


async function renderTimeline() {

    const res = await fetch("data/education.json")
    const data = await res.json()

    const container = document.getElementById("educationTimeline")

    container.innerHTML = ""

    data.forEach((item, i) => {

        const div = document.createElement("div")

        div.className = `timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`

        div.innerHTML = `
        <div class="timeline-dot"></div>

        <div class="glass">
            <h3 class="font-semibold">${item.title}</h3>
            <p class="text-sm text-gray-400">${item.start_year} - ${item.end_year}</p>
            <p class="text-sm text-gray-400">Institue Name: ${item.institute}</p>
            <p class="text-sm text-gray-400">Percentage/CGPA: ${item.score}</p>
            <p class="text-sm mt-2">${item.description}</p>
        </div>
        `

        container.appendChild(div)

    })

}

renderTimeline()


/* CERTIFICATIONS */

async function renderCerts() {

    const res = await fetch("data/certifications.json")
    const data = await res.json()

    const container = document.getElementById("certContainer")

    data.forEach(cert => {

        const card = document.createElement("div")

        card.className = "glass cursor-pointer"

        card.innerHTML = `
        <h3 class="font-semibold">${cert.title}</h3>
        <p class="text-sm text-gray-400">${cert.issuer}</p>
        <p class="text-sm">${cert.year}</p>
        `

        card.addEventListener("click", () => openModal(cert.image))

        container.appendChild(card)

    })

}

renderCerts()


/* MODAL */

const modal = document.getElementById("certModal")
const modalImg = document.getElementById("modalImage")
const closeBtn = document.getElementById("closeModal")

function openModal(src) {

    modal.classList.add("active")
    modalImg.src = src

}

closeBtn.onclick = () => {
    modal.classList.remove("active")
}

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active")
    }
})


/* CONTACT FORM */

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill all fields.");
        return;
    }

    const phoneNumber = "916376813750";

    const text = `Hello, my name is ${name}
Subject: ${subject}
Email: ${email}
Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    document.getElementById("contactForm").reset();

});

