-- Seed data for LIIT UP Hub Zimbabwe

-- Insert categories
INSERT INTO categories (name, icon, description) VALUES
('tutoring', '📚', 'Educational services and academic support'),
('design', '🎨', 'Graphic design, logos, and creative services'),
('plumbing', '🔧', 'Plumbing repairs and installations'),
('delivery', '🚚', 'Delivery and transportation services'),
('carpentry', '🪚', 'Woodwork and furniture services'),
('cleaning', '🧹', 'Cleaning and maintenance services'),
('photography', '📸', 'Photography and videography services'),
('writing', '✍️', 'Content writing and translation'),
('tech', '💻', 'IT support and web development'),
('beauty', '💄', 'Beauty and wellness services');

-- Insert sample gigs
INSERT INTO gigs (title, description, category_id, location, price_type, price_amount, provider_name, provider_whatsapp, is_urgent) VALUES
(
    'Mathematics Tutor for O-Level Students',
    'Experienced teacher with 5+ years offering math tutoring for Form 1-4 students. Available weekends and evenings. Specializing in algebra, geometry, and exam preparation.',
    (SELECT id FROM categories WHERE name = 'tutoring'),
    'Harare',
    'hourly',
    15.00,
    'Tendai Mukamuri',
    '+263771234567',
    FALSE
),
(
    'Professional Logo Design & Branding',
    'Creative graphic designer offering logo design, business cards, and complete branding packages for small businesses. Quick turnaround and unlimited revisions.',
    (SELECT id FROM categories WHERE name = 'design'),
    'Bulawayo',
    'fixed',
    35.00,
    'Chipo Ndlovu',
    '+263772345678',
    TRUE
),
(
    'Emergency Plumbing Repairs',
    'Licensed plumber available 24/7 for emergency repairs, pipe installation, and bathroom renovations. All work guaranteed with quality materials.',
    (SELECT id FROM categories WHERE name = 'plumbing'),
    'Harare',
    'hourly',
    20.00,
    'James Moyo',
    '+263773456789',
    FALSE
),
(
    'Fast Food Delivery Service',
    'Reliable food delivery within Harare CBD and surrounding areas. Available 7 days a week from 8AM to 10PM. Own transport and insulated bags.',
    (SELECT id FROM categories WHERE name = 'delivery'),
    'Harare',
    'fixed',
    5.00,
    'Blessing Chikwanha',
    '+263774567890',
    FALSE
),
(
    'Custom Furniture & Carpentry',
    'Skilled carpenter creating custom furniture, kitchen cabinets, and home renovations. 10+ years experience with quality wood and finishes.',
    (SELECT id FROM categories WHERE name = 'carpentry'),
    'Gweru',
    'negotiable',
    NULL,
    'Patrick Sibanda',
    '+263775678901',
    FALSE
);

-- Insert sample reviews
INSERT INTO reviews (gig_id, reviewer_name, rating, comment) VALUES
(
    (SELECT id FROM gigs WHERE provider_name = 'Tendai Mukamuri'),
    'Sarah Mpofu',
    5,
    'Excellent tutor! My daughter improved from D to B+ in just 2 months. Very patient and explains concepts clearly.'
),
(
    (SELECT id FROM gigs WHERE provider_name = 'Chipo Ndlovu'),
    'David Ncube',
    5,
    'Amazing work on our company logo. Professional, creative, and delivered exactly what we wanted. Highly recommend!'
),
(
    (SELECT id FROM gigs WHERE provider_name = 'James Moyo'),
    'Grace Mutasa',
    4,
    'Fixed our kitchen sink quickly and professionally. Fair pricing and clean work. Will definitely call again.'
);
