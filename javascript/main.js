//add  class active to header on scroll

let header = document.querySelector("header");

window.onscroll = function()
{
    if(this.scrollY >= 50)
    {
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }

}



let nav_links = document.getElementById("links");

function menu(){
    nav_links.classList.toggle("active")

}

// Close the menu when a link inside it is clicked
document.querySelectorAll("#links a").forEach(link => {
    link.addEventListener("click", () => {
        nav_links.classList.remove("active");
    });
});
