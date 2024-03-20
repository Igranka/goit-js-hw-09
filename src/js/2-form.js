// const KEY_MESSAGE = "feedback-form-state";
// const formRef = document.querySelector('form');

// formRef.addEventListener('input', addLocalStorage);
// function addLocalStorage() {
//     const objMessage = JSON.stringify({ email: formRef.elements.email.value, message: formRef.elements.message.value });
//     localStorage.setItem(KEY_MESSAGE, objMessage);    
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};
//     formRef.elements.email.value = objMessage.email || '';
//     formRef.elements.message.value = objMessage.message || '';
// });

// formRef.addEventListener('submit', removeLocalStorage);
// function removeLocalStorage(event) {
//     event.preventDefault(); 
//     console.log(JSON.parse(localStorage.getItem(KEY_MESSAGE)));
//     localStorage.removeItem(KEY_MESSAGE);
//     formRef.elements.email.value = '';
//     formRef.elements.message.value = '';
// }


const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const email = form.elements.email;
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

textarea.value = localStorage.getItem(localStorageKey) ?? "";
email.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify({
        email: email.value.trim(),
        text: textarea.value.trim(),
    }));
});

let savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedState) {
    email.value = savedState.email;
    textarea.value = savedState.text;
} else {
    email.value = '';
    textarea.value = '';
}

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


// const form = document.querySelector(".feedback-form");

// const inputEmail = form.elements.email;
// const inputMessage = form.elements.message;
// const localStorageKey = "feedback-form-state";

// const storedData = JSON.parse(localStorage.getItem(localStorageKey));

// inputEmail.value = (storedData && storedData.email) ? storedData.email : "";
// inputMessage.value = (storedData && storedData.message) ? storedData.message : "";


// form.addEventListener("input", addLocalStorageItem);
// function addLocalStorageItem() {
//   const objFeedback = {
//     email: inputEmail.value.trim(),
//     message: inputMessage.value.trim(),
//   };
//   localStorage.setItem(localStorageKey, JSON.stringify(objFeedback));
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (inputEmail.value.trim() !== "" && inputMessage.value.trim() !== "") {
//     console.log(JSON.parse(localStorage.getItem(localStorageKey)));
//     localStorage.removeItem(localStorageKey);
//     form.reset();
//   } else alert("Заповніть всі поля!");
// });