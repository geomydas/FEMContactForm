const e=document.querySelector("[data-js='form']"),t=document.querySelector("[data-js='toast']"),r=document.querySelector("[data-js='first-name']"),a=document.querySelector("[data-js='last-name']"),s=document.querySelector("[data-js='email']"),n=document.querySelector("[data-js='general-enquiry']"),o=[r,a,s,n,document.querySelector("[data-js='support-request']"),document.querySelector("[data-js='message']"),document.querySelector("[data-js='consent']")];function i(e){e.classList.add("block"),e.classList.remove("hidden")}function c(e){e.classList.add("hidden"),e.classList.remove("block")}function u(e){let t=document.querySelector(`#${e.name}-error-message`);e.classList.add("border-red"),e.classList.remove("border-grey-900"),e.setAttribute("aria-invalid","true"),e.removeAttribute("aria-invalid","false"),i(t),t.textContent=t.getAttribute("data-content")}function d(e){let t=document.querySelector(`#${e.name}-error-message`);e.classList.add("border-grey-900"),e.classList.remove("border-red"),e.setAttribute("aria-invalid","false"),e.removeAttribute("aria-invalid","true"),c(t),t.textContent=""}function l(e){switch(e.getAttribute("data-type")){case"email":if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.value))return u(e),!1;return d(e),!0;case"text":case"name":if(""===e.value.trim())return u(e),!1;return d(e),!0;case"checkbox":case"radio":if(!e.validity.valid)return u(e),!1;return d(e),!0}}o.forEach(e=>{e.addEventListener("input",function(){l(e)})}),e.addEventListener("submit",function(r){r.preventDefault(),o.forEach(e=>{l(e)}),l(o[0])&&l(o[1])&&l(o[2])&&l(o[3])&&l(o[4])&&l(o[5])&&l(o[6])&&(e.reset(),i(t),setTimeout(function(){c(t)},7e3))});
//# sourceMappingURL=index.d00f42e6.js.map
