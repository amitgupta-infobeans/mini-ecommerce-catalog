## 🛍️ Mini E-commerce Product Catalog

A full-stack e-commerce product catalog built with **React**, **Node.js**, **Express**, **MongoDB**, and deployed using **AWS/Firebase**.

## 🚀 Live Demo
[Link to your deployed frontend (e.g., Firebase/Netlify)](URL_HERE)  
[Link to your backend API (e.g., EC2)](URL_HERE)

---

## 📌 Features

### 👤 User
- View products with images and pricing
- Add to cart functionality
- Login & Register with JWT authentication

### 🛠 Admin
- Create, update, delete products, category
- Upload product and category images (stored on AWS S3 or Firebase Storage)
- View user carts and stats (optional)

---

## 🧱 Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React, Axios, TailwindCSS    |
| Backend     | Node.js, Express             |
| Database    | MongoDB + Mongoose           |
| Auth        | JWT                          |
| Storage     | AWS S3 / Firebase Storage    |
| Deployment  | EC2, Firebase Hosting, Netlify |

---

## 📁 Folder Structure
```bash
/backend
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
└── server.js

/frontend
├── src/
├── components/
├── pages/
├── services/
└── App.jsx
```


---
## ⚙️ Installation & Setup

### 🔌 Backend and Frontend Setup

```bash
cd backend
npm install
# Create .env file with MONGO_URI, JWT_SECRET, AWS credentials
npm start


💻 Frontend Setup

npm create vite@latest frontend -- --template react
cd frontend
npm install
npm i axios react-router-dom
npm i tailwindcss @tailwindcss/vite
# Create .env file with VITE_API_URL
npm run dev
```

