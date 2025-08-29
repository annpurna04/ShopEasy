# 🛍️ ShopEasy

![React](https://img.shields.io/badge/React-19-blue)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-2.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue)

ShopEasy is a fully responsive **React-based e-commerce application** with **Redux** for state management, authentication, cart management, and a smooth checkout process.  
It is deployed on **GitHub Pages** 👉 [Live Demo](https://annpurna04.github.io/ShopEasy)

---

## 🚀 Features

- 🛒 **Add to Cart** – Add, remove, update product quantities  
- 🔑 **Authentication** – Register & Login using local storage  
- 👤 **Private Routes** – Checkout & Profile pages accessible only when logged in  
- 📱 **Responsive Design** – Works on desktop & mobile devices  
- 🔔 **Toast Notifications** – Feedback for login, cart updates, etc.  
- 🎨 **Image Slider & Services Section** on the home page  
- 📂 **Clean Folder Structure** with modular components and pages  

---

## 🏗️ Tech Stack

- ⚛️ React 19  
- 🛠️ Redux Toolkit  
- 🌐 React Router v7  
- 🎭 React Icons  
- 🎠 React Slick & Slick Carousel (for sliders)  
- 🔔 React Toastify  
- 📦 gh-pages (for deployment)  

---

## 📂 Project Structure

```
src/
│
├── components/       # Header, Footer, Slider, PrivateRoute, etc.
├── pages/            # Products, ProductDetails, Cart, Login, Register, Checkout, Profile
├── redux/            # authSlice, cartSlice, store configuration
├── routes/           # AppRoutes.js (all routes are defined here)
├── App.js            # Root app with BrowserRouter
├── index.js          # Entry point
└── styles/           # CSS files
```

---

## ⚡ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/annpurna04/ShopEasy.git
   cd ShopEasy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm start
   ```
   App runs on 👉 [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment on GitHub Pages

1. Add homepage in `package.json`  
   ```json
   "homepage": "https://annpurna04.github.io/ShopEasy"
   ```

2. Add deploy scripts in `package.json`
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. Deploy  
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repo settings → **gh-pages branch**

---

## 🔑 Authentication Flow

- **Register Page** → Saves user in `localStorage`
- **Login Page** → Validates credentials, saves session in Redux
- **PrivateRoute** → Protects Checkout & Profile pages

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.
