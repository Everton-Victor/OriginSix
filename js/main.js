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

/*Mudar o header da página quando der scroll*/
const header = document.getElementById("header-menu")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else {
        header.classList.remove('scroll')
    }
})