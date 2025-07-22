-- Create tables for LIIT UP Hub Zimbabwe

-- Users table (optional, for future user accounts)
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    whatsapp VARCHAR(20) NOT NULL,
    location VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    icon VARCHAR(10),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gigs table
CREATE TABLE IF NOT EXISTS gigs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category_id UUID REFERENCES categories(id),
    location VARCHAR(100) NOT NULL,
    price_type VARCHAR(20) NOT NULL, -- 'hourly', 'fixed', 'negotiable'
    price_amount DECIMAL(10,2),
    provider_name VARCHAR(255) NOT NULL,
    provider_whatsapp VARCHAR(20) NOT NULL,
    provider_email VARCHAR(255),
    is_urgent BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gig_id UUID REFERENCES gigs(id) ON DELETE CASCADE,
    reviewer_name VARCHAR(255) NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_gigs_category ON gigs(category_id);
CREATE INDEX IF NOT EXISTS idx_gigs_location ON gigs(location);
CREATE INDEX IF NOT EXISTS idx_gigs_created_at ON gigs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gigs_active ON gigs(is_active);
CREATE INDEX IF NOT EXISTS idx_reviews_gig ON reviews(gig_id);
