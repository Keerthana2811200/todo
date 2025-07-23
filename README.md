
# ✅ Todo App (MERN + Google OAuth)

A simple Todo App using the MERN stack with Google OAuth login.  
Helps users manage their daily tasks securely with authentication.


## ⚙️ How It Works

- Users log in with Google
- Authenticated users can add, edit, or delete todos
- Todos are stored in MongoDB
- The app is separated into:
  - `frontend/` → React (UI)
  - `backend/` → Node.js + Express (API)

---

## 🛠 Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** Google OAuth 2.0
- **Environment:** .env files for secrets


## 💻 Setup & Commands

### 📦 1. Clone the Project


git clone https://github.com/Keerthana2811200/todo.git
cd todo


### 🔁 2. Backend Setup


cd backend
npm install

GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
MONGODB_URI=your-mongo-uri


### 🎨 3. Frontend Setup


cd ../frontend
npm install

Then run:
npm start


## 📂 Folder Structure

todo/
├── backend/      # API + Google Auth
├── frontend/     # React UI
└── .gitignore

1. Save it as `README.md` in your root project folder
2. Run:
git add README.md
git commit -m "Add simple project README"
git push


