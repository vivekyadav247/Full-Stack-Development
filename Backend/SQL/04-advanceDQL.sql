CREATE TABLE smart_watch_sales (
    sale_id SERIAL PRIMARY KEY,
    brand VARCHAR(50), 
    model VARCHAR(50),
    city VARCHAR(50),
    units_sold INT CHECK (units_sold > 0),
    price_per_unit DECIMAL(10,2),
    sale_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO
smart_watch_sales (brand, model, city, units_sold, price_per_unit)
VALUES
('Apple', 'Series 7', 'New York', 150, 399.99),
('Samsung', 'Galaxy Watch 4', 'Los Angeles', 200, 249.99),
('Fitbit', 'Versa 3', 'Chicago', 180, 229.95),
('Garmin', 'Venu 2', 'Houston', 120, 349.99),
('Fossil', 'Gen 6', 'Phoenix', 90, 299.00),
('Apple', 'Series 6', 'Philadelphia', 130, 399.00),
('Samsung', 'Galaxy Watch Active 2', 'San Antonio', 160, 199.99),
('Fitbit', 'Sense', 'San Diego', 140, 329.95),
('Garmin', 'Forerunner 945', 'Dallas', 110, 499.99),
('Fossil', 'Hybrid HR', 'San Jose', 80, 179.00);


-- Aggregate Functions

SELECT COUNT(*) as total_rows FROM smart_watch_sales; -- This query counts the total number of rows in the smart_watch_sales table, providing an overview of how many sales records are present.


SELECT SUM(units_sold * price_per_unit) AS total_revenue FROM smart_watch_sales; -- This query calculates the total revenue generated from all smart watch sales by multiplying the units sold by the price per unit for each sale and then summing up these values across all records in the smart_watch_sales table. The result is labeled as total_revenue, giving insight into the overall financial performance of the smart watch sales.


SELECT AVG(price_per_unit) AS average_price FROM smart_watch_sales; -- This query computes the average price per unit of smart watches sold by calculating the mean of the price_per_unit column across all records in the smart_watch_sales table. The result is labeled as average_price, providing an understanding of the typical cost of smart watches sold.


SELECT MIN(price_per_unit) AS lowest_price FROM smart_watch_sales; -- This query identifies the lowest price per unit among all smart watch sales by finding the minimum value in the price_per_unit column of the smart_watch_sales table. The result is labeled as lowest_price, indicating the most affordable smart watch sold.

SELECT MAX(price_per_unit) AS highest_price FROM smart_watch_sales; -- This query determines the highest price per unit among all smart watch sales by finding the maximum value in the price_per_unit column of the smart_watch_sales table. The result is labeled as highest_price, highlighting the most expensive smart watch sold.



--- Grouping Data

SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand; -- This query groups the smart watch sales data by brand and calculates the total units sold for each brand. The result provides insight into the sales performance of different smart watch brands, allowing for comparison of their market presence.
-- it use Aggregate function SUM to calculate the total units sold for each brand, and the GROUP BY clause is used to group the results by the brand column.
-- it can also used COU&NT, AVG, MIN, MAX functions with GROUP BY clause to get more insights about each brand.

SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand
ORDER BY total_units_sold DESC; -- This query groups the smart watch sales data by brand, calculates the total units sold for each brand, and then orders the results in descending order based on the total units sold. This allows for easy identification of the top-selling smart watch brands in terms of units sold.


SELECT city, SUM(units_sold * price_per_unit) AS city_revenue
FROM smart_watch_sales
GROUP BY city
ORDER BY city_revenue DESC; -- This query groups the smart watch sales data by city, calculates the total revenue generated from sales in each city by multiplying the units sold by the price per unit, and then orders the results in descending order based on the city revenue. This provides insight into which cities are generating the most revenue from smart watch sales.

-- Multi Column Grouping
SELECT brand, city, SUM(units_sold) AS units
FROM smart_watch_sales
GROUP BY brand, city ;-- This query groups the smart watch sales data by both brand and city, calculating the total units sold for each combination of brand and city. The result provides a detailed view of sales performance across different brands in various cities, allowing for a more granular analysis of market trends and consumer preferences.


-- Using HAVING Clause
-- Having is kind of wher clause for Group by, it is used to filter the results of a GROUP BY query based on aggregate function results. While the WHERE clause filters rows before grouping, the HAVING clause filters groups after aggregation.

SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand
HAVING SUM(units_sold) > 100; -- This query groups the smart watch sales data by brand, calculates the total units sold for each brand, and then filters the results to only include brands that have sold more than 100 units. This allows for a focused analysis of the top-performing brands in terms of units sold.