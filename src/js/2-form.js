const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

email.value = (savedData && savedData.email) ? savedData.email : "";
textarea.value = (savedData && savedData.message) ? savedData.message : "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify({
        email: email.value.trim(),
        message: textarea.value.trim(),
    }));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value.trim() !== "" && textarea.value.trim() !== "") {
        console.log({email: email.value, textarea: textarea.value,});
        localStorage.removeItem("feedback-form-state");
        form.reset();
    } else {
        alert("Please fill in all present fields");
    }
});