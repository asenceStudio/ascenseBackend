const btnMenu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

btnMenu.addEventListener("click", () => {
    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
    }
});
