import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),a=e.elements.email,l=e.elements.message,s="feedback-form-state",r=JSON.parse(localStorage.getItem(s));a.value=r.email??"";l.value=r.text??"";e.addEventListener("input",t=>{localStorage.setItem(s,JSON.stringify({email:a.value.trim(),text:l.value.trim()}))});e.addEventListener("submit",t=>{t.preventDefault(),a.value.trim()!==""&&l.value.trim()!==""?(console.log(t.target.elements.message.value),localStorage.removeItem("feedback-form-state"),e.reset()):alert("Please fill in all present fields")});
//# sourceMappingURL=commonHelpers2.js.map
