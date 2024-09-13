const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const contactList = document.getElementById("contact-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  
  const isValid = form.checkValidity();
  
  if (isValid) {
    createContact();
    nameInput.value = "";
    emailInput.value = "";
    mobileInput.value = "";
  } else {
    console.log("Please fill out the form correctly.");
  }
});
function createContact() {
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contact");
  
    contactDiv.innerHTML = `
      <p id="nameDisplay">Name: ${nameInput.value}</p>
      <p id="emailDisplay">Email: ${emailInput.value}</p>
      <p id="mobileDisplay">Mobile: ${mobileInput.value}</p>
      <div class="contact-actions">
        <button id="delete" onclick="removeContact(this)">Delete</button>
        <button id="edit" onclick="editContact(this)">Edit</button>
      </div>
    `;
    
    contactList.appendChild(contactDiv);
  }
  

function removeContact(contact) {
  const element = contact.parentElement;
  element.remove();
}

function editContact(contact) {
  const contactDiv = contact.parentElement;
  
  const currentName = contactDiv.querySelector("#nameDisplay").textContent.split(": ")[1];
  const currentEmail = contactDiv.querySelector("#emailDisplay").textContent.split(": ")[1];
  const currentMobile = contactDiv.querySelector("#mobileDisplay").textContent.split(": ")[1];

  nameInput.value = currentName;
  emailInput.value = currentEmail;
  mobileInput.value = currentMobile;
  
  contactDiv.remove();
}