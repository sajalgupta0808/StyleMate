# 👔 StyleMate - AI Powered Personal Wardrobe Assistant

StyleMate is an AI-powered wardrobe management and outfit recommendation platform that helps users digitize their wardrobe, organize clothing items, and receive intelligent outfit suggestions based on occasions.

The platform leverages Computer Vision and Large Language Models (LLMs) to automatically analyze clothing images, extract fashion metadata, and generate personalized outfit recommendations.

---

## 🚀 Features

### 📸 AI Clothing Recognition

Upload a clothing image and StyleMate automatically identifies:

* Category
* Subcategory
* Color
* Pattern
* Fit
* Suitable Occasions

Example:

```json
{
  "category": "Topwear",
  "subcategory": "T-Shirt",
  "primaryColor": "Black",
  "pattern": "Solid",
  "fit": "Regular",
  "occasions": ["Casual"]
}
```

---

### 👕 Digital Wardrobe

Create a centralized digital wardrobe containing:

* Topwear
* Bottomwear
* Footwear
* Accessories

Users can browse, search, and organize their wardrobe through a modern web interface.

---

### 🤖 AI Stylist

Generate outfit recommendations for:

* Casual Outings
* Office Wear
* Date Nights
* Parties

Example Recommendation:

```json
{
  "occasion": "Date Night",
  "top": "White Shirt",
  "bottom": "Khaki Chinos",
  "footwear": "Brown Loafers"
}
```

---

### 🧠 AI Fashion Reasoning

StyleMate can explain why an outfit works:

> "The white shirt and khaki chinos create a smart-casual appearance while brown loafers add sophistication, making the outfit ideal for a date night."

---

## 🏗️ System Architecture

```text
                     ┌──────────────────┐
                     │   User Uploads   │
                     │ Clothing Image   │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ Multer Upload    │
                     │ Middleware       │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ Ollama Vision    │
                     │ Model            │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ Metadata         │
                     │ Extraction       │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ PostgreSQL       │
                     │ Wardrobe DB      │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ Recommendation   │
                     │ Engine           │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ AI Stylist       │
                     │ Suggestions      │
                     └──────────────────┘
```

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### AI

* Ollama
* Gemma 3 Vision

### Storage

* Local File Storage

### Infrastructure

* Docker
* Docker Compose

### Frontend

* HTML5
* CSS3
* JavaScript
* Responsive Design

---

## 📂 Project Structure

```text
StyleMate/

├── config/
│   └── db.js
│
├── controllers/
│   ├── clothingController.js
│   └── recommendationController.js
│
├── middleware/
│   └── uploadMiddleware.js
│
├── repositories/
│   └── clothingRepository.js
│
├── routes/
│   ├── clothingRoutes.js
│   └── recommendationRoutes.js
│
├── services/
│   ├── aiService.js
│   ├── aiRecommendationService.js
│   ├── clothingService.js
│   └── recommendationService.js
│
├── uploads/
│
├── public/
│   ├── index.html
│   ├── upload.html
│   ├── wardrobe.html
│   ├── recommendation.html
│   ├── dashboard.html
│   │
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── upload.js
│       ├── wardrobe.js
│       ├── recommendation.js
│       └── dashboard.js
│
├── docker-compose.yml
├── package.json
├── server.js
└── README.md
```

---

## 🗄️ Database Schema

### clothing_items

```sql
CREATE TABLE clothing_items (
    id SERIAL PRIMARY KEY,
    image_path VARCHAR(500),
    display_name VARCHAR(255),
    category VARCHAR(100),
    subcategory VARCHAR(100),
    primary_color VARCHAR(50),
    pattern VARCHAR(50),
    fit VARCHAR(50),
    occasions JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ⚙️ Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd StyleMate
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create `.env`

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=stylemate
```

---

## 🐳 Start Services

```bash
docker compose up -d
```

Verify:

```bash
docker ps
```

---

## 🚀 Start Application

```bash
npm run dev
```

Application URLs:

```text
Home:
http://localhost:3000

Upload:
http://localhost:3000/upload.html

Wardrobe:
http://localhost:3000/wardrobe.html

AI Stylist:
http://localhost:3000/recommendation.html

Dashboard:
http://localhost:3000/dashboard.html
```

---

## 📡 APIs

### Upload Clothing

```http
POST /api/clothes/upload
```

### Get Wardrobe

```http
GET /api/clothes
```

### Generate Recommendation

```http
POST /api/recommendations
```

Request:

```json
{
  "occasion": "date"
}
```

---

## 🎯 Future Enhancements

### V2

* AI Outfit Scoring
* Outfit History
* User Preferences
* Occasion Learning

### V3

* Myntra Integration
* Amazon Fashion Integration
* Auto Wardrobe Sync

### V4

* Virtual Try-On
* Weather-Based Styling
* Fashion Trend Analysis
* AI Fashion Chat Assistant

---

## 📚 Key Engineering Concepts Demonstrated

* REST API Design
* Repository-Service Architecture
* PostgreSQL Integration
* Docker Containerization
* AI Model Integration
* Computer Vision Pipelines
* Recommendation Systems
* Responsive Frontend Development
* Full Stack Application Design

---

## 👨‍💻 Author

Sajal Gupta

Backend Software Engineer

Built to explore the intersection of Computer Vision, Generative AI, and Personalized Recommendation Systems.
