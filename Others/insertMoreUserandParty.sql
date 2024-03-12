-- Insert additional users with the role of "Customer"
INSERT INTO Users (roleid, user_name, password, full_name, email, phone)
VALUES 
  (2, 'customer8', 'customer222', 'Customer Eight', 'customer8@example.com', '1112223333'),
  (2, 'customer9', 'customer333', 'Customer Nine', 'customer9@example.com', '4445556666');

-- Insert additional users with the role of "Host"
INSERT INTO Users (roleid, user_name, password, full_name, email, phone)
VALUES 
  (3, 'host8', 'host222', 'Host Eight', 'host8@example.com', '7778889999'),
  (3, 'host9', 'host333', 'Host Nine', 'host9@example.com', '9990001111');

-- Insert additional parties
INSERT INTO Parties (restaurantID, parent_name, phone, kid_name, gender, party_theme, special_service, menu, number_of_guests, booking_date, start_date, description, total_price, status) 
VALUES 
  (3, 'Parent Three', '6666666666', 'Kid Three', 'Male', 'Party Theme C', 'Special Service C', 'Menu C', 20, '2024-03-15', '2024-03-20', 'Description for Party 3', 200, 'Confirmed'),
  (4, 'Parent Four', '5555555555', 'Kid Four', 'Female', 'Party Theme D', 'Special Service D', 'Menu D', 25, '2024-03-18', '2024-03-25', 'Description for Party 4', 250, 'Confirmed'),
  (5, 'Parent Five', '4444444444', 'Kid Five', 'Male', 'Party Theme E', 'Special Service E', 'Menu E', 30, '2024-03-20', '2024-03-28', 'Description for Party 5', 300, 'Confirmed'),
  (6, 'Parent Six', '3333333333', 'Kid Six', 'Female', 'Party Theme F', 'Special Service F', 'Menu F', 35, '2024-03-22', '2024-03-30', 'Description for Party 6', 350, 'Confirmed'),
  (7, 'Parent Seven', '2222222222', 'Kid Seven', 'Male', 'Party Theme G', 'Special Service G', 'Menu G', 40, '2024-03-25', '2024-04-02', 'Description for Party 7', 400, 'Confirmed');