-- Create Roles table (if it doesn't already exist)
CREATE TABLE  Roles (
  roleID SERIAL PRIMARY KEY,
  roleName VARCHAR(255) NOT NULL UNIQUE
);

-- Create Users table
CREATE TABLE Users (
  userID SERIAL PRIMARY KEY,
  roleID INTEGER REFERENCES Roles(roleID),
  userName VARCHAR(255) NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  status VARCHAR(50)
);

-- Create Districts table
CREATE TABLE Districts (
  districtID SERIAL PRIMARY KEY,
  districtName VARCHAR(255) NOT NULL UNIQUE
);

-- Create Restaurants table
CREATE TABLE Restaurants (
  restaurantID SERIAL PRIMARY KEY,
  districtID INTEGER REFERENCES Districts(districtID),
  restaurantName VARCHAR(255) NOT NULL,
  address VARCHAR(255)
);

-- Create Parties table
CREATE TABLE Parties (
  partyID SERIAL PRIMARY KEY,
  restaurantID INTEGER REFERENCES Restaurants(restaurantID),
  districtID INTEGER REFERENCES Districts(districtID),
  partyTheme VARCHAR(255),
  numberOfGuests INTEGER,
  price DECIMAL(10,2),
  hostID INTEGER REFERENCES Users(userID),
  status VARCHAR(50),
  bookingDate DATE,
  startDate DATE,
  availableDate DATE,
  description TEXT,
  slotID INTEGER
);

-- Create Slots table
CREATE TABLE Slots (
  slotID SERIAL PRIMARY KEY,
  partyID INTEGER REFERENCES Parties(partyID),
  startDate DATE,
  endDate DATE,
  availableGuests INTEGER,
  status VARCHAR(50)
);


-- Create PartyPackages table
CREATE TABLE PartyPackages (
  packageID SERIAL PRIMARY KEY,
  roleID INTEGER REFERENCES Roles(roleID),
  price DECIMAL(10,2),
  status VARCHAR(50),
  description TEXT
);

-- Create PartyPackage_Details table
CREATE TABLE PartyPackage_Details (
  partyPackageDetailID SERIAL PRIMARY KEY,
  partyID INTEGER REFERENCES Parties(partyID),
  packageID INTEGER REFERENCES PartyPackages(packageID),
  totalPrice DECIMAL(10,2),
  timeStart TIME
);

-- Create PartyShowcases table
CREATE TABLE PartyShowcases (
  partyShowcaseID SERIAL PRIMARY KEY,
  partyID INTEGER REFERENCES Parties(partyID),
  rating DECIMAL(2,1),
  description TEXT,
  comments TEXT,
  imgLink TEXT
);

-- Create Notifications table
CREATE TABLE Notifications (
  notificationID SERIAL PRIMARY KEY,
  userID INTEGER REFERENCES Users(userID),
  partyID INTEGER REFERENCES Parties(partyID),
  message TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  isRead BOOLEAN DEFAULT FALSE
);

-- Add foreign key constraints (excluding corrected ones to avoid repetition)
ALTER TABLE Notifications
ADD CONSTRAINT fk_notification_user
FOREIGN KEY (userID)
REFERENCES Users(userID);

ALTER TABLE Parties
ADD CONSTRAINT fk_parties_user
FOREIGN KEY (hostID)
REFERENCES Users(userID);

ALTER TABLE Notifications
ADD CONSTRAINT fk_notification_party
FOREIGN KEY (partyID)
REFERENCES Parties(partyID);

ALTER TABLE Parties
ADD CONSTRAINT fk_party_slot
FOREIGN KEY (slotID)
REFERENCES Slots(slotID);

ALTER TABLE Parties
ADD CONSTRAINT fk_party_district
FOREIGN KEY (districtID)
REFERENCES Districts(districtID);




INSERT INTO Roles (roleName) VALUES
  ('Admin'),
  ('Staff'),
  ('Host'),
  ('Customer');

  INSERT INTO Users (roleID, userName, fullName, email, phone, status) VALUES
  (1, 'admin_user', 'Admin User', 'admin@example.com', '1234567890', 'Active'),
  (2, 'manager_user', 'Manager User', 'manager@example.com', '9876543210', 'Active'),
  (3, 'guest_user1', 'Guest User 1', 'guest1@example.com', NULL, 'Active'),
  (3, 'guest_user2', 'Guest User 2', 'guest2@example.com', NULL, 'Inactive'),
  (3, 'guest_user3', 'Guest User 3', 'guest3@example.com', NULL, 'Active');

  INSERT INTO Districts (districtName) VALUES
  ('Hai Ba Trung'),
  ('Cau Giay'),
  ('Dong Da'),
  ('Dan Phuong'),
  ('Hoai Duc'),
  ('Ha Dong'),
  ('Hoan Kiem'),
  ('Tay Ho');

  INSERT INTO PartyPackages (roleID, price, status, description) VALUES
  (1, 50.00, 'Active', 'Premium Package for Customer'),
  (2, 30.00, 'Active', 'Standard Package for Customer'),
  (3, 20.00, 'Active', 'Basic Package for Customer');


  INSERT INTO Restaurants (districtID, restaurantName, address) VALUES
  (1, 'Fine Dining Place', '123 Hoang Cau, Dong Da'),
  (2, 'Cozy Cafe', '456 Kim Nguu, Hai Ba Trung'),
  (3, 'Pizzeria Paradise', '789 Xuan Thuy, Cau Giay');