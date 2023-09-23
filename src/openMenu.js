export default function openMenu() {
    const menuButton = document.getElementById("menu-btn");
    const menu = document.querySelector(".menu-links");
    const menuButtonI = document.querySelector(".fa-solid.fa-bars"); // Corrected selector

    menuButton.addEventListener("click", async (e) => {
        e.preventDefault();

        menu.classList.toggle("menu-active");
        addIconClose();
    });

    function addIconClose() {
        if (menuButtonI.classList.contains("fa-bars")) { // Corrected class name
            menuButtonI.classList.remove("fa-bars");
            menuButtonI.classList.add("fa-x");
        } else {
            menuButtonI.classList.remove("fa-x");
            menuButtonI.classList.add("fa-bars");
        }
    }
};