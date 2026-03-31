# MERN E-Commerce App 🚀

Full-stack e-commerce platform with React frontend, Node/Express backend, MongoDB.

## Features
- User authentication (JWT, roles: user/admin)
- Product catalog with search & categories
- Shopping cart (localStorage)
- Order management
- Responsive UI with Tailwind CSS
- API validation & error handling

## Quick Start 🏃‍♂️

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier)

### Setup
```bash
git clone <repo>
cd PRO2
npm install-all  # or manually cd backend && npm i && cd ../frontend && npm i
```

### Backend
1. Copy `backend/.env.example` to `backend/.env`
2. Add your MongoDB Atlas URI and `JWT_SECRET=your-super-secret-key`
3. `cd backend && npm run dev`

API base: `http://localhost:5000/api`

### Frontend
1. `cd frontend && npm start`
2. Open `http://localhost:3000`

## API Endpoints 📋
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register user | - |
| POST | `/auth/login` | Login user | - |
| GET | `/auth/profile` | Get profile | ✅ |
| GET | `/products` | List products | - |
| GET | `/products/:id` | Single product | - |
| POST | `/products` | Create product | Admin |
| PUT | `/products/:id` | Update product | Admin |
| DELETE | `/products/:id` | Delete product | Admin |

## Testing 🧪
- **Backend**: Postman + your .env
  - Register: `{ "name": "Test", "email": "test@test.com", "password": "123456" }`
  - Login, then Products
- **Frontend**: Browser dev tools, localStorage for cart/auth

## Deployment ☁️
- **Backend**: Render.com (connect GitHub repo)
  - Env vars: MONGO_URI, JWT_SECRET, NODE_ENV=production
- **Frontend**: Vercel (drag folder or GitHub)
- CORS configured for localhost & production domains

## Project Structure
```
PRO2/
├── backend/     # Express APIs, Mongoose models
├── frontend/    # React + Tailwind + Context
├── README.md
└── TODO.md      # Progress tracker (all ✅)
```

## Tech Stack
```
Frontend: React 18, React Router, Tailwind CSS, Axios, Context API
Backend: Node.js, Express, MongoDB/Mongoose, JWT, Joi, bcrypt
Dev: Nodemon, concurrently
```

Industry-ready portfolio project! Deploy and share your live demo 🚀

**Note**: Add seed script for sample products/categories for demo.

