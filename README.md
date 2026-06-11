# StyleMate 👔✨

StyleMate is an AI-powered wardrobe assistant that helps users digitize their wardrobe, organize clothing items, and receive outfit recommendations based on occasions.

The application uses AI vision models to analyze uploaded clothing images, extract metadata such as category, color, pattern, and fit, and store them in a structured wardrobe database.

---

## Features

### AI Clothing Analysis

Upload an image of a clothing item and automatically extract:

* Category
* Subcategory
* Primary Color
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

### Digital Wardrobe

Maintain a centralized wardrobe containing:

* Clothing
* Footwear
* Accessories
* Future support for Makeup

Users can browse all stored wardrobe items from a simple UI.

---

### Outfit Recommendations

Generate outfit recommendations based on occasions such as:

* Casual
* Office
* Date Night
* Party

Example:

```json
{
  "occasion": "casual",
  "top": "Black T-Shirt",
  "bottom": "Blue Jeans",
  "footwear": "White Sneakers"
}
```

---

### AI-Powered Styling

Leverages local AI models through Ollama to:

* Analyze clothing images
* Generate structured metadata
* Provide styling insights

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### AI

* Ollama
* Gemma 3 Vision

### Storage

* Local File System (uploads)

### Infrastructure

* Docker
* Docker Compose

### Frontend

* HTML
* CSS
* Bootstrap
* Vanilla JavaScript

---

## Architecture

```text
User Uploads Image
        │
        ▼
Multer Upload Handler
        │
        ▼
Uploads Folder
        │
        ▼
Ollama Vision Model
        │
        ▼
Metadata Extraction
        │
        ▼
PostgreSQL
        │
        ▼
Wardrobe API
        │
        ▼
Recommendation Engine
```

---

## Project Structure

```text
StyleMate/

├── config/
│   ├── db.js
│
├── controllers/
│   ├── clothingController.js
│   ├── recommendationController.js
│
├── middleware/
│   ├── uploadMiddleware.js
│
├── repositories/
│   ├── clothingRepository.js
│
├── routes/
│   ├── clothingRoutes.js
│   ├── recommendationRoutes.js
│
├── services/
│   ├── aiService.js
│   ├── clothingService.js
│   ├── recommendationService.js
│
├── uploads/
│
├── public/
│   ├── wardrobe.html
│   ├── recommendation.html
│
├── server.js
├── docker-compose.yml
└── README.md
```

---

## Database Schema

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

## Setup

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

Create a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=stylemate
```

---

## Run PostgreSQL and Ollama

```bash
docker compose up -d
```

Verify:

```bash
docker ps
```

---

## Pull AI Model

```bash
docker exec -it stylemate-ollama ollama pull gemma3:4b
```

Verify:

```bash
docker exec -it stylemate-ollama ollama list
```

---

## Run Application

```bash
npm run dev
```

Server:

```text
http://localhost:3000
```

Wardrobe:

```text
http://localhost:3000/wardrobe.html
```

Recommendations:

```text
http://localhost:3000/recommendation.html
```

---

## API Endpoints

### Upload Clothing

```http
POST /api/clothes/upload
```

Form Data:

```text
image -> file
```

---

### Get Wardrobe

```http
GET /api/clothes
```

---

### Get Recommendation

```http
POST /api/recommendations
```

Request:

```json
{
  "occasion": "casual"
}
```

---

## Future Enhancements

### V2

* User Authentication
* Multi-user Support
* Closet Analytics
* Outfit History
* Favorite Outfits

### V3

* Myntra Integration
* Amazon Fashion Integration
* Auto Wardrobe Sync
* Weather-Based Recommendations

### V4

* Virtual Try-On
* AI Fashion Advisor
* Color Matching Engine
* Seasonal Outfit Planning

---

## Learning Outcomes

This project demonstrates:

* Backend System Design
* REST API Development
* PostgreSQL Database Design
* Docker Containerization
* AI Model Integration
* Image Processing Pipelines
* Recommendation Systems
* Repository-Service Architecture

---

## Author

Sajal Gupta

Backend Software Engineer

Built as a hands-on project to explore AI-powered recommendation systems and scalable backend architecture.
