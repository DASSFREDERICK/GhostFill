// Load saved profile data automatically when popup opens
document.addEventListener("DOMContentLoaded", async () => {
  const data = await chrome.storage.local.get(["fullName", "email", "phone", "address", "company"]);
  if (data.fullName) document.getElementById("fullName").value = data.fullName;
  if (data.email) document.getElementById("email").value = data.email;
  if (data.phone) document.getElementById("phone").value = data.phone;
  if (data.address) document.getElementById("address").value = data.address;
  if (data.company) document.getElementById("company").value = data.company;
});

// Save data and trigger auto-fill when the button is clicked
document.getElementById("fillBtn").addEventListener("click", async () => {
  const profileData = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    company: document.getElementById("company").value
  };

  // Save to Chrome local storage so it persists when closed
  await chrome.storage.local.set(profileData);

  // Send data to content script on active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab) {
    chrome.tabs.sendMessage(tab.id, { action: "autofill", data: profileData });
  }

  // Smooth visual feedback on button
  const fillBtn = document.getElementById("fillBtn");
  fillBtn.textContent = "Filled successfully";
  fillBtn.style.background = "var(--success)";
  fillBtn.style.color = "#0c0f14";
  
  setTimeout(() => {
    fillBtn.textContent = "Fill this page";
    fillBtn.style.background = "";
    fillBtn.style.color = "";
  }, 2000);
});

// Clear Vault Button
document.getElementById("clearBtn").addEventListener("click", async () => {
  if (confirm("Are you sure you want to wipe your local vault?")) {
    await chrome.storage.local.remove(["fullName", "email", "phone", "address", "company"]);
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("company").value = "";
    
    const fillBtn = document.getElementById("fillBtn");
    fillBtn.textContent = "Vault cleared";
    setTimeout(() => { fillBtn.textContent = "Fill this page"; }, 2000);
  }
});