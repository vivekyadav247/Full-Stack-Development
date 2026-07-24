CREATE TABLE canteen_menu (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price INT CHECK (price > 0),
    is_available BOOLEAN DEFAULT TRUE
);


-- Inserting data into the canteen_menu table
INSERT INTO canteen_menu
(item_name, category, price)
VALUES
('Vada Pav', 'Snacks', 20),
('Masala Chai', 'Beverages', 15),
('Pav Bhaji', 'Snacks', 50),
('Samosa', 'Snacks', 10),
('Cold Coffee', 'Beverages', 40),
('Paneer Tikka', 'Snacks', 80),
('Lassi', 'Beverages', 30),
('Veg Sandwich', 'Snacks', 60),
('Mango Shake', 'Beverages', 45),
('French Fries', 'Snacks', 35);
-- here we are inserting 10 items into the canteen_menu table with their respective categories and prices. The is_available column will default to TRUE for all items, indicating that they are available for purchase.
-- We have to maintain the order of Values as per defined (item_name, category, price) in the INSERT statement. The item_id will be auto-generated as it is defined as SERIAL PRIMARY KEY. is_available will default to TRUE for all items, indicating that they are available for purchase.


-- Update
UPDATE canteen_menu
SET price = 25
WHERE item_name = 'Vada Pav';

UPDATE canteen_menu
SET price = price - 5;

UPDATE canteen_menu
SET is_available = FALSE
WHERE item_name = 'Samosa';


DELETE FROM canteen_menu
WHERE item_name = 'French Fries';
--Never run DELETE statement without WHERE clause, as it will delete all records from the table. Always use a WHERE clause to specify which records to delete.
-- important: The DELETE statement will remove the item 'French Fries' from the canteen_menu table. This action is irreversible, so it should be used with caution. If you want to keep a record of deleted items, consider implementing a soft delete mechanism instead of permanently deleting records.

SELECT * FROM canteen_menu;

-- What is DML ?
-- DML stands for Data Manipulation Language. It is a subset of SQL (Structured Query Language) that is used to manipulate data within a database. DML commands are used to insert, update, and delete data in the database. Common DML commands include:
-- INSERT: Used to add new records to a table.
-- UPDATE: Used to modify existing records in a table.
-- DELETE: Used to remove records from a table.


-- Dry Run 
-- SELECT * FROM canteen_menu WHERE price > 30; -- fetch items with price greater than 30
-- Before every DML operation, it is a good practice to perform a dry run using a SELECT statement to preview the data that will be affected by the operation. This helps to avoid unintended changes and ensures that the correct records are being targeted.