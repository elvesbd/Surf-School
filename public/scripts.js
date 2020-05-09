const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for(item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

function redirecionar() {
    window.location.href = "/instructors"
}

function logout() {
    window.location.href = "/"
}