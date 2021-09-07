const nav = document.querySelector("#header-menu nav")
const toggle = document.querySelectorAll("nav .toggle")


for(const element of toggle) {
    element.addEventListener('click', function() {
        //Se tiver o show tira senão coloca
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll(".menu ul li a")

for(const link of links) {
    link.addEventListener('click', function() {
        // Remove a class show quando clicado
        nav.classList.remove("show")
    })
}