const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

email.value = savedData.email ?? "";
textarea.value = savedData.text ?? "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify({
        email: email.value.trim(),
        text: textarea.value.trim(),
    }));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value.trim() !== "" && textarea.value.trim() !== "") {
        console.log(event.target.elements.message.value);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    } else {
        alert("Please fill in all present fields");
    }
});