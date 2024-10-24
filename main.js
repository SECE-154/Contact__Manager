const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const contactList = document.getElementById("contact-list");
const form = document.querySelector("form");

// Handle button click for adding contacts
btn.addEventListener("click", function (e) {
    e.preventDefault();
    handleFormSubmission();
});

// Handle form submission (both button click and Enter key)
form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleFormSubmission();
});

function handleFormSubmission() {
    // Validate form inputs
    const isValid = form.checkValidity();

    if (isValid) {
        createContact();
        clearInputFields();
        alert("Contact added successfully!"); // User-friendly alert
    } else {
        alert("Please fill out the form correctly.");
    }
}

function createContact() {
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact");

    contactDiv.innerHTML = `
        <p class="nameDisplay">Name: ${nameInput.value}</p>
        <p class="emailDisplay">Email: ${emailInput.value}</p>
        <p class="mobileDisplay">Mobile: ${mobileInput.value}</p>
        <div class="contact-actions">
            <button class="delete" onclick="removeContact(this)">Delete</button>
            <button class="edit" onclick="editContact(this)">Edit</button>
        </div>
    `;

    contactList.appendChild(contactDiv);
}

function removeContact(contact) {
    const contactDiv = contact.closest(".contact");
    contactDiv.remove();
    alert("Contact deleted successfully!"); // User-friendly alert
}

function editContact(contact) {
    const contactDiv = contact.closest(".contact");

    const currentName = contactDiv.querySelector(".nameDisplay").textContent.split(": ")[1];
    const currentEmail = contactDiv.querySelector(".emailDisplay").textContent.split(": ")[1];
    const currentMobile = contactDiv.querySelector(".mobileDisplay").textContent.split(": ")[1];

    nameInput.value = currentName;
    emailInput.value = currentEmail;
    mobileInput.value = currentMobile;

    contactDiv.remove();
}

function clearInputFields() {
    nameInput.value = "";
    emailInput.value = "";
    mobileInput.value = "";
}
