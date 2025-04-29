const welcome = document.getElementById("welcome_user")
welcome.textContent = "Hi Daniel!"
welcome.style.color = "red";

let mode = 1;

const bTheme = document.querySelector("body")
const theme = document.getElementById("theme")
theme.addEventListener("click", () => {
    if (mode == 1){
        // Change the background color to purple
        bTheme.style.backgroundColor = "purple";
        bTheme.style.color = "white";

        // Change the icon to moon
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
        theme.style.color = "#63E6BE";
        mode--
    }
    else {
        // Change the background color to white
        bTheme.style.backgroundColor = "white";
        bTheme.style.color = "black";

        // Change the icon to moon
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        theme.style.color = "#FFD43B";
        mode++
    }
});