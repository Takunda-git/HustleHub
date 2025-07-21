-- Add new categories to the categories table
INSERT INTO categories (name, icon, description) VALUES
('mechanics', '🔩', 'Car repairs, engine servicing, and automotive maintenance'),
('it', '💻', 'Computer repairs, software installation, and tech support'),
('gardening', '🌱', 'Garden maintenance, landscaping, and plant care'),
('baby sitting', '👶', 'Childcare, babysitting, and child supervision services'),
('fumigators', '🐛', 'Pest control, fumigation, and extermination services'),
('satellite installation', '📡', 'DSTV, satellite dish installation and setup'),
('car guarding', '🚗', 'Vehicle security and car guarding services'),
('agri business', '🌾', 'Agricultural consulting, farming advice, and crop planning'),
('micro-tasking', '📋', 'Online surveys, data entry, and small digital tasks')
ON CONFLICT (name) DO NOTHING;

-- Update existing categories with better descriptions
UPDATE categories SET description = 'Educational services, tutoring, and academic support' WHERE name = 'tutoring';
UPDATE categories SET description = 'Graphic design, logos, branding, and creative services' WHERE name = 'design';
UPDATE categories SET description = 'Plumbing repairs, installations, and maintenance' WHERE name = 'plumbing';
UPDATE categories SET description = 'Delivery services, transportation, and logistics' WHERE name = 'delivery';
UPDATE categories SET description = 'Woodwork, furniture making, and carpentry services' WHERE name = 'carpentry';
UPDATE categories SET description = 'House cleaning, office cleaning, and maintenance' WHERE name = 'cleaning';
