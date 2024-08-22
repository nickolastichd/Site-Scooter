// Form

const submitBtn = document.querySelector(".submitBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const form = document.querySelector("form");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let valid = true;

    if (nameInput.value.trim() === "") {
        nameInput.style.backgroundColor = "#EF5350";

        valid = false;
    } else {
        nameInput.style.backgroundColor = "#ffff";
    }

    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        emailInput.style.backgroundColor = "#EF5350";
        valid = false;
    } else {
        emailInput.style.backgroundColor = "#ffff";
    }

    if (valid) {
        console.log("Name is:", nameInput.value);
        console.log("Email is:", emailInput.value);
        console.log("Subject is:", subjectInput.value);
        console.log("Message is:", messageInput.value);

        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
    }
});

// Rent Scooter

const bookBtn = document.getElementById("bookButton");
const scooterImg = document.getElementById("scooter");

// Location Transition

const locationBtn = document.getElementById("locationHref");
const locationDropdown = document.getElementById("locationDropdown");

locationBtn.addEventListener("click", () => {
    locationBtn.style.display = "none";
    locationDropdown.classList.add("select-animation");
    locationDropdown.style.display = "block";
});

// Pickup Date Transition

const dateTimeBtn = document.getElementById("timeHref");
const dateTimeOption = document.getElementById("time");

dateTimeBtn.addEventListener("click", () => {
    dateTimeBtn.style.display = "none";
    dateTimeOption.classList.add("select-animation");
    dateTimeOption.style.display = "block";
});

// Range Transition

const rangeBtn = document.getElementById("rangeHref");
const rangeOption = document.getElementById("range");

rangeBtn.addEventListener("click", () => {
    rangeBtn.style.display = "none";
    rangeOption.classList.add("select-animation");
    rangeOption.style.display = "block";
});

// Scooter Rent Submit

bookBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let bookValid = true;

    if (locationDropdown.offsetHeight === 0) {
        bookValid = false;
    }

    if (
        dateTimeOption.offsetHeight === 0 &&
        dateTimeBtn.dateTimeOption === ""
    ) {
        bookValid = false;
    }

    if (rangeOption.offsetHeight === 0) {
        bookValid = false;
    }

    if (bookValid) {
        scooterImg.classList.add("animate");
        console.log(`Lokacija je ${locationDropdown.value}`);
        console.log(`Datum je ${dateTimeOption.value}`);
        console.log(`Kilometraza je ${rangeOption.value}km`);
    } else {
        console.log("invalid");
    }
});

// Login

const loginBtn = document.getElementById("loginBtn");
const loginSection = document.getElementById("loginSection");
const navSection = document.getElementById("navSection");
const heroSection = document.getElementById("hero");
const servicesSection = document.getElementById("services");
const contactSection = document.getElementById("contact");
const loginSubmit = document.getElementById("loginSubmit");
const body = document.body;

const elements = [
    loginBtn,
    navSection,
    heroSection,
    servicesSection,
    contactSection,
];

loginBtn.addEventListener("click", () => {
    loginSection.classList.add("drop-in");

    elements.forEach((element) => {
        element.style.display = "none";
    });

    body.style.height = "100vh";
    body.style.width = "100vw";
});

loginSubmit.addEventListener("click", () => {
    elements.forEach((element) => {
        element.style.display = "flex";
    });

    body.style.height = "2000px";

    loginSection.classList.remove("drop-in");
});
