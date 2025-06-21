-- Create users table for admin authentication
CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "name" text NOT NULL,
  "email" text NOT NULL UNIQUE,
  "password" text NOT NULL,
  "role" text NOT NULL DEFAULT 'admin',
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Insert default admin user (password: Admin@123)
INSERT INTO "users" ("name", "email", "password", "role")
VALUES ('Admin', 'admin@nigaran.in', '$2a$10$XvHfqG0qkAUIY7O8yX5Xr.S9KwR1B5rVEZVp4gY9xM5U1TBQIJKJe', 'admin');