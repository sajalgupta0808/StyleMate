CREATE TABLE IF NOT EXISTS clothing_items (
    id SERIAL PRIMARY KEY,

    image_path TEXT,

    category VARCHAR(100),

    subcategory VARCHAR(100),

    primary_color VARCHAR(50),

    pattern VARCHAR(50),

    fit VARCHAR(50),

    occasions JSONB,

    created_at TIMESTAMP DEFAULT NOW()
);