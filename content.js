chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autofill") {
    const profileData = request.data;
    const inputs = document.querySelectorAll("input, textarea");
    
    inputs.forEach(input => {
      const name = (input.name || "").toLowerCase();
      const id = (input.id || "").toLowerCase();
      const placeholder = (input.placeholder || "").toLowerCase();
      
      const matches = (keywords) => keywords.some(kw => name.includes(kw) || id.includes(kw) || placeholder.includes(kw));

      if (matches(["fullname", "full_name", "name"]) && profileData.fullName) {
        input.value = profileData.fullName;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      else if (matches(["email", "e-mail"]) && profileData.email) {
        input.value = profileData.email;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      } 
      else if (matches(["phone", "tel", "mobile", "cell"]) && profileData.phone) {
        input.value = profileData.phone;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      else if (matches(["address", "street", "location"]) && profileData.address) {
        input.value = profileData.address;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      else if (matches(["company", "organization", "employer", "school", "university"]) && profileData.company) {
        input.value = profileData.company;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
    
    sendResponse({ status: "Success" });
  }
});