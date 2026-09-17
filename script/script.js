const container = document.querySelector("#container");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", function () {
    container.classList.toggle("sidebar-collapsed");
});

// container.classList.toggle("sidebar-collapsed");


const menuItems = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

//console.log(menuItems); // nodelist a href
//console.log(pages); //nodelist section

menuItems.forEach(function(menu) {
    menu.addEventListener("click", function(event) {
        // event.preventDefault();
        console.log('ok...');
        /*event.preventDefault();
        const pageName = menu.dataset.page;
        console.log(pageName);
        pages.forEach(function(page) {
            page.classList.remove("active");
        });

        const selectedPage = document.querySelector(`#page-${pageName}`);
        selectedPage.classList.add("active");*/
    });

});