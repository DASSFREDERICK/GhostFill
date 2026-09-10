# Ghostfill 👻

A modern, privacy-focused, local-first Chrome extension designed to streamline form filling and portfolio showcasing without compromising personal data. Built by **Frederick**.

## 🚀 Overview

Ghostfill is a zero-knowledge developer utility that acts as an isolated local vault. Unlike mainstream cloud-based autofill extensions that sync data to remote servers, Ghostfill stores and manages your professional details entirely on your machine using native browser storage APIs. 

Built with a sleek developer-first dark mode aesthetic, it features smart DOM parsing to automatically map your personal info across complex job application portals, registration pages, and checkouts.

---

## 🛠️ Tech Stack & Architecture

- **Extension Framework:** Chrome Extensions Manifest V3
- **Frontend UI:** Vanilla HTML5, CSS3 (Custom Design System with CSS Variables & Keyframe Animations)
- **Persistence & Security:** Chrome Local Storage (`chrome.storage.local`), Web Messaging API
- **DOM Parsing:** Injected Content Scripts (`content.js`) with dynamic keyword-matching algorithms

---

## ✨ Key Features

- **Local-First Architecture:** Zero cloud telemetry or external network requests. Your data stays on your device.
- **Smart Field Matching:** Scans DOM inputs, IDs, names, and placeholder text to intelligently detect and populate fields like Full Name, Email, Phone, Address, and Company/University.
- **Instant Visual Feedback:** Dynamic state changes and success animations upon filling or clearing local data.
- **Custom UI / UX:** Minimalist, emoji-free, high-contrast dark theme built for developers and power users.

---

## 🔓 Open Source & Fully Customizable

Ghostfill is **100% open source**. Because it's lightweight and built with plain JavaScript and HTML, anyone can easily fork, clone, and customize it to fit their exact needs:
- Tweak the field dictionary in `content.js` to match custom form layouts.
- Adjust the CSS design tokens in `index.html` for a personalized theme.
- Add your own cryptographic layers, such as a master password or custom encryption wrapper, depending on your security preferences.

---

## 📁 Project Structure

```text
ghostfill/
│
├── manifest.json      # Extension configuration (Manifest V3)
├── index.html         # Popup dashboard UI & stylesheet
├── popup.js           # Local storage management & messaging logic
└── content.js         # DOM injection & smart field-matching engine