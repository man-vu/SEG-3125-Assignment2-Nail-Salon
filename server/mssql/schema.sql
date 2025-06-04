CREATE DATABASE NailSalon;
GO
USE NailSalon;
GO

CREATE TABLE Users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  username NVARCHAR(50) NOT NULL UNIQUE,
  email NVARCHAR(255) NOT NULL UNIQUE,
  phone NVARCHAR(50),
  firstName NVARCHAR(50) NOT NULL,
  lastName NVARCHAR(50) NOT NULL,
  language NVARCHAR(20) NOT NULL,
  password NVARCHAR(255) NOT NULL,
  createdAt DATETIME2 NOT NULL DEFAULT SYSDATETIME()
);
GO

CREATE TABLE Designers (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(50) NOT NULL,
  title NVARCHAR(100) NOT NULL,
  avatar NVARCHAR(255) NOT NULL,
  bio NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE ServiceCategories (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(100) NOT NULL UNIQUE
);
GO

CREATE TABLE Services (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(100) NOT NULL,
  description NVARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration INT NOT NULL,
  image NVARCHAR(255),
  categoryId INT NOT NULL,
  CONSTRAINT FK_Service_Category FOREIGN KEY (categoryId)
    REFERENCES ServiceCategories(id)
);
GO

CREATE TABLE Bookings (
  id INT IDENTITY(1,1) PRIMARY KEY,
  userId INT NOT NULL,
  designerId INT NOT NULL,
  serviceId INT NOT NULL,
  startTime DATETIME2 NOT NULL,
  endTime DATETIME2 NOT NULL,
  createdAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
  CONSTRAINT FK_Booking_User FOREIGN KEY (userId) REFERENCES Users(id),
  CONSTRAINT FK_Booking_Designer FOREIGN KEY (designerId) REFERENCES Designers(id),
  CONSTRAINT FK_Booking_Service FOREIGN KEY (serviceId) REFERENCES Services(id)
);
GO

CREATE TABLE Transactions (
  id INT IDENTITY(1,1) PRIMARY KEY,
  bookingId INT NOT NULL,
  userId INT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency NVARCHAR(10) NOT NULL,
  status NVARCHAR(50) NOT NULL,
  createdAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
  CONSTRAINT FK_Transaction_Booking FOREIGN KEY (bookingId) REFERENCES Bookings(id),
  CONSTRAINT FK_Transaction_User FOREIGN KEY (userId) REFERENCES Users(id)
);
GO

-- Seed data for Designers
INSERT INTO Designers (name, title, avatar, bio) VALUES
('Anna', 'Nail Technician', 'https://randomuser.me/api/portraits/women/68.jpg', 'French tip & natural nail expert (7 yrs).'),
('Bella', 'Nail Artist', 'https://randomuser.me/api/portraits/women/44.jpg', 'Bold, creative nail art (5 yrs).'),
('Chloe', 'Senior Nail Designer', 'https://randomuser.me/api/portraits/women/65.jpg', 'Minimalist designs & hand-painted art (10 yrs).'),
('Diana', 'Acrylic Specialist', 'https://randomuser.me/api/portraits/women/32.jpg', 'Acrylic overlays & extensions (8 yrs).'),
('Elaine', 'Spa & Waxing Expert', 'https://randomuser.me/api/portraits/women/21.jpg', 'Relaxation & waxing specialist (6 yrs).'),
('Fiona', N'Children’s Nail Designer', 'https://randomuser.me/api/portraits/women/51.jpg', N'Fun, gentle kids’ nail care (4 yrs).'),
('Grace', 'Salon Manager', 'https://randomuser.me/api/portraits/women/70.jpg', 'Experienced leader & hygiene advocate (12 yrs).'),
('Lucas', 'Front Desk Coordinator', 'https://randomuser.me/api/portraits/men/12.jpg', 'Warm, welcoming client care (3 yrs).'),
('Kim', 'Pedicure Specialist', 'https://randomuser.me/api/portraits/women/50.jpg', 'Deluxe pedicure & foot care (9 yrs).'),
('Ivan', 'Nail Technician & Trainer', 'https://randomuser.me/api/portraits/men/22.jpg', 'Mentor & advanced techniques (11 yrs).');
GO

-- Seed data for Service Categories
INSERT INTO ServiceCategories (name) VALUES
('Manicure'),
('Pedicure'),
('Artificial Nails'),
('Nail Art'),
('Waxing'),
('Kids Services');
GO

-- Seed data for Services
INSERT INTO Services (name, description, price, duration, image, categoryId) VALUES
('Spa Manicure', 'Spa manicure experience that finishes with normal nail polish.', 20, 25, 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', 1),
('Manicure Shellac', 'Manicure experience and adding gel nails polish on natural finger nails, long lasting shine and dry fast.', 35, 38, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', 1),
('Shellac Polish Application (on natural nails)', 'Buff, shape and adding shellac on top of natural nails.', 25, 25, 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', 1),
('French Tip (Add On)', 'Adding white (or color) at the tips of the nails for a classic look.', 10, 13, 'https://images.unsplash.com/photo-1505394033641-40c6ad1140ac?auto=format&fit=crop&w=600&q=80', 1),
('Spa Pedicure', 'Spa pedicure experience that finishes with normal nail polish.', 35, 35, 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80', 2),
('Pedicure Shellac', 'Pedicure experience and then adding gel nails polish on natural toe nails, long lasting shine and dry fast.', 50, 53, 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80', 2),
('Shellac Polish Application (on toes)', 'Buff, shape and adding gel nails polish.', 25, 20, 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80', 2),
('Full Set (with Regular Nail Polish)', 'Using clear Solar powder then finish with regular nail polish. Expect 15 mins to dry.', 55, 68, 'https://images.unsplash.com/photo-1510925758641-6c7d9c51b42a?auto=format&fit=crop&w=600&q=80', 3),
('REFILL (with Regular Nail Polish)', 'Clear Solar powder refill then finish with regular nail polish.', 45, 53, 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80', 3),
('Full Set (with Colour Powder/ Shellac)', 'Durable nail enhancement using colored powder and solar liquid.', 60, 83, 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', 3),
('REFILL (with Colour Powder/shellac)', 'Filling in grown-out parts with powder or shellac.', 50, 68, 'https://images.unsplash.com/photo-1512251425826-8b5fd2f50e4b?auto=format&fit=crop&w=600&q=80', 3),
('Ombre Full Set', 'Merging 2 or more colours to create a faded ombre effect.', 65, 83, 'https://images.unsplash.com/photo-1522335789203-a2586ec0954a?auto=format&fit=crop&w=600&q=80', 3),
('Ombre Refill', 'Ombre nail refill to update the look.', 55, 68, 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80', 3),
('Artificial Nail/ Dipping Removal', 'Removing Acrylic, Solar or Dipping nails.', 15, 18, 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', 3),
('Accent Nail Art', 'Unique design on one or two nails per hand.', 5, 8, 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=600&q=80', 4),
('Full Set Nail Art', 'Custom art on all nails, includes gems or stickers.', 20, 25, 'https://images.unsplash.com/photo-1455656678494-4d1c07e0e668?auto=format&fit=crop&w=600&q=80', 4),
('French Tip Nail Art', 'Classic French tip with a creative twist.', 10, 13, 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80', 4),
('Eyebrows Wax', 'Neatly shaped eyebrow wax.', 15, 13, 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', 5),
('Eyebrows Tinting', 'Color tinting for brows.', 25, 18, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', 5),
('Eyebrows Tinting And Waxing', 'Combined waxing and tinting.', 30, 25, 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', 5),
('Chin Wax', 'Quick chin hair removal.', 10, 13, 'https://images.unsplash.com/photo-1506224772372-12b3b60a1aeb?auto=format&fit=crop&w=600&q=80', 5),
('Upper Lip Wax', 'Removes hair on upper lip.', 8, 8, 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', 5),
('Sideburns Wax', 'Sideburn hair removal.', 15, 13, 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', 5),
('Forehead Wax', 'Forehead hair cleanup.', 10, 8, 'https://images.unsplash.com/photo-1455656678494-4d1c07e0e668?auto=format&fit=crop&w=600&q=80', 5),
('Full Face Wax', 'Comprehensive facial hair removal.', 40, 30, 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80', 5),
('Under Arms Wax', 'Underarm hair removal.', 15, 13, 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=600&q=80', 5),
('Half Arms Wax', 'From elbow to wrist.', 25, 18, 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80', 5),
('Full Arms Wax', 'Entire arm hair removal.', 40, 30, 'https://images.unsplash.com/photo-1512251425826-8b5fd2f50e4b?auto=format&fit=crop&w=600&q=80', 5),
('Half Legs Wax', 'From knee down.', 30, 25, 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80', 5),
('Full Legs', 'Complete leg waxing (female only).', 50, 38, 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80', 5),
('Back Wax', 'Hair removal from the back.', 35, 30, 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', 5),
('Chest Wax', 'Removes chest hair.', 25, 25, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', 5),
('Stomach Wax', 'Hair removal from stomach area.', 20, 18, 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', 5),
('Bikini Line Wax', 'Hair removal along bikini line (female only).', 30, 25, 'https://images.unsplash.com/photo-1506224772372-12b3b60a1aeb?auto=format&fit=crop&w=600&q=80', 5),
('Kids Manicure', 'Gentle manicure for children under 12.', 12, 13, 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80', 6),
('Kids Pedicure', 'Gentle pedicure for children under 12.', 15, 18, 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80', 6),
('Kids Nail Art', 'Fun and simple nail art for kids.', 5, 8, 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', 6);
GO
