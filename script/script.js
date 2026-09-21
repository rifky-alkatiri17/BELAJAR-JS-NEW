const container = document.querySelector("#container");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", function() {
    container.classList.toggle("sidebar-collapsed");
});

const menuItems = document.querySelectorAll("[data-page]"); //tombol pd sidebar dan bottomnav
const pages = document.querySelectorAll(".page"); //section dg class page

menuItems.forEach(function(menu) {
    menu.addEventListener("click", function(event) {
        event.preventDefault();
        const pageName = menu.dataset.page; //data-page= "omdb|javascript"
        pages.forEach(function(page) {
            page.classList.remove("active");
        });

        const selectedPage = document.querySelector(`#page-${pageName}`); //#page-omdb | #page-javascript
        selectedPage.classList.add("active");
        fetch('./pages/'+ pageName + '/index.html').then(res=>res.text()).then(resp=>{
            selectedPage.innerHTML = resp;
            const script = document.createElement("script");
            script.src = "./script/omdb.js";
            document.body.appendChild(script);
        });
    });

});


