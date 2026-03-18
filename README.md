# Voice-Based-Complaint-System-for-Low-Literacy-Users-Problem
# 🎤 Voice-Based Complaint System for Low-Literacy Users

## 📌 Problem Statement

In many rural and semi-urban areas, citizens face difficulty in registering complaints related to electricity, water, or municipal services because:

* Limited literacy or unfamiliarity with English
* Difficulty typing or using complex mobile apps
* Overloaded or inaccessible call centers

This creates a gap between citizens and public service systems.

---

## 💡 Solution Overview

This project is a **voice-first complaint system** where users can:

1. Speak their complaint using a microphone
2. System converts speech → text
3. Automatically categorizes the issue
4. Sends complaint to the relevant department
5. Provides a **voice-based response** using Murf AI

---

## ⚙️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Speech-to-Text:** Web Speech API (browser-based)
* **Text-to-Speech:** Murf AI API
* **Logic:** JavaScript (keyword-based categorization)

---

## 🧠 How It Works

1. User clicks **"Start Speaking"**
2. Browser captures voice input
3. Speech is converted into text
4. System analyzes keywords:

   * "water" → Water Department
   * "electricity" → Electricity Department
   * "road" → Municipality
5. A response is generated
6. Murf AI converts response → voice
7. Audio is played back to the user

---

## 📂 Project Structure

```
voice-complaint-system/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/voice-complaint-system.git
   ```

2. Open the project folder

3. Open **index.html** in a browser

4. Allow microphone permissions

5. Click **Start Speaking** and give your complaint

---

## 🔑 Setup Requirements

* Replace Murf API key in `script.js`:

```javascript
"api-key": "YOUR_API_KEY"
```

---

## ⚠️ Limitations

* Keyword-based categorization (not full AI NLP)
* Requires internet connection for Murf API
* Accuracy depends on microphone quality
* Limited language support (can be extended)

---

## 🔮 Future Enhancements

* Multi-language support (Telugu, Hindi)
* AI-based NLP for better understanding
* Complaint tracking system with ID
* Backend integration (Node.js + Database)
* Government API integration

---

## 🏁 Conclusion

This project demonstrates how **voice can act as a primary interface** to bridge the digital divide and make public services more accessible to everyone.

---

## 👨‍💻 Author

MEDARI BHANU PRASAD
Hackathon Project – Murf AI Voice Application
