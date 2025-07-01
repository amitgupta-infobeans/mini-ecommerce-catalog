# 🛍️ Mini E-commerce Product Catalog

A full-stack e-commerce product catalog built with **React**, **Node.js**, **Express**, **MongoDB**, and deployed using **AWS/Firebase**.

## 🚀 Live Demo
[Link to your deployed frontend (e.g., Firebase/Netlify)](https://your-app-link.com)  
[Link to your backend API (e.g., EC2)](https://api.your-app-link.com)

---

## 📌 Features

### 👤 User
- View products with images and pricing
- Add to cart functionality
- Login & Register with JWT authentication

### 🛠 Admin
- Create, update, delete products
- Upload product images (stored on AWS S3 or Firebase Storage)
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


---
## ⚙️ Installation & Setup

### 🔌 Backend Setup

```bash
cd backend
npm install
# Create .env file with MONGO_URI, JWT_SECRET, AWS credentials
npm start

💻 Frontend Setup
cd frontend
npm install
# Create .env file with VITE_API_URL
npm run dev

