-- Insert roles
INSERT INTO roles (role_name) VALUES ('Admin'), ('Customer'), ('Host');

-- Insert restaurant types
INSERT INTO restaurant_types (type_name) VALUES ('Fine Dining'), ('Casual Dining'), ('Fast Food');

-- Insert users
INSERT INTO Users (roleid, user_name, password, full_name, email, phone) 
VALUES 
  (1, 'admin', 'admin123', 'Admin User', 'admin@example.com', '1234567890'),
  (2, 'customer1', 'customer123', 'Customer One', 'customer1@example.com', '9876543210'),
  (2, 'customer2', 'customer456', 'Customer Two', 'customer2@example.com', '5555555555'),
  (3, 'host1', 'host123', 'Host One', 'host1@example.com', '1112223333'),
  (3, 'host2', 'host456', 'Host Two', 'host2@example.com', '4445556666');

-- Insert restaurants
INSERT INTO Restaurants (restaurant_name, phone, start_date, end_date, typeID, party_theme, special_service, address, userID) 
VALUES 
  ('Restaurant A', '1111111111', '2024-01-01', '2024-12-31', 1, 'Party Theme A', 'Special Service A', '123 Main St', 4),
  ('Restaurant B', '2222222222', '2024-01-01', '2024-12-31', 2, 'Party Theme B', 'Special Service B', '456 Oak St', 5);

-- Insert parties
INSERT INTO Parties (restaurantID, parent_name, phone, kid_name, gender, party_theme, special_service, menu, number_of_guests, booking_date, start_date, description, total_price, status) 
VALUES 
  (1, 'Parent One', '9999999999', 'Kid One', 'Male', 'Party Theme A', 'Special Service A', 'Menu A', 10, '2024-03-12', '2024-03-15', 'Description for Party 1', 100, 'Confirmed'),
  (2, 'Parent Two', '8888888888', 'Kid Two', 'Female', 'Party Theme B', 'Special Service B', 'Menu B', 15, '2024-03-12', '2024-03-20', 'Description for Party 2', 150, 'Confirmed');

-- Insert menu
INSERT INTO Menu (menu_name) VALUES ('Menu A'), ('Menu B');

-- Insert feedback
INSERT INTO Feedback (partyID, userID, feedback_text, rating) 
VALUES (1, 2, 'Great experience!', 5),
       (2, 3, 'Wonderful party!', 4);
