const cta = document.querySelector(".card__cta");
const unreadMessages = document.querySelectorAll(".card__notif-message--unread")
const notifNumber = document.querySelector(".card__notif-number");
const unreadNotif = document.querySelectorAll(".card__notif--unread");


cta.addEventListener("click", function() {
    notifNumber.innerHTML = "0";

    unreadNotif.forEach((notif) => {
        notif.classList.remove("card__notif--unread");
    });

    unreadMessages.forEach((message) => {
        message.style.setProperty("--red", "#fff");
    })
})