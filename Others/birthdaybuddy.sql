-- Create Roles table (if it doesn't already exist)
CREATE TABLE IF NOT EXISTS Roles (
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
  comments TEXT
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
