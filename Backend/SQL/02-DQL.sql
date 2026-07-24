-- CREATE TABLE ipl_players (
--     player_id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     team VARCHAR(50),
--     role VARCHAR(50),
--     runs_scored INT CHECK (runs_scored > 0),
--     wickets_taken INT CHECK (wickets_taken > 0),
--     auction_price_crores INT
-- );

-- ALTER TABLE ipl_players
-- ADD COLUMN nickname VARCHAR(50);

INSERT INTO ipl_players (name, team, role, runs_scored, wickets_taken, auction_price_crores, nickname)
VALUES
('Virat Kohli', 'RCB', 'Batsman', 12000, 4, 17.00, 'King Kohli'),
('MS Dhoni', 'CSK', 'Wicketkeeper-Batsman', 10500, 1, 15.00, 'Captain Cool'),
('Jasprit Bumrah', 'MI', 'Bowler', 500, 150, 7.00, 'Boom Boom Bumrah'),
('Hardik Pandya', 'MI', 'All-rounder', 3000, 100, 11.00, 'The Hardik'),
('Sunil Narine', 'KKR', 'Bowler', 2000, 120, 9.00, 'The Mystery Spinner'),
('Rohit Sharma', 'MI', 'Batsman', 9500, 2, 16.00, 'Hitman'),
('Rinku Singh', 'RR', 'Bowler', 1500, 130, 8.00, 'The Wall'),
('Shikhar Dhawan', 'DC', 'Batsman', 8000, 3, 14.00, 'Gabbar'),
('Ravindra Jadeja', 'CSK', 'All-rounder', 4000, 110, 12.50, 'Sir Jadeja'),
('Mystery Player', NULL, 'Batsman', 1, 1, 1.00, NULL);

SELECT * FROM ipl_players;

SELECT name, nickname, team FROM ipl_players;

-- Filtering data using WHERE clause

SELECT * FROM ipl_players WHERE team = 'RCB';

SELECT * FROM ipl_players WHERE auction_price_crores > 10 ;

-- Logical Operators: AND, OR, NOT

SELECT * FROM ipl_players WHERE role = 'Batsman' AND runs_scored > 5000;

SELECT * FROM ipl_players WHERE role = 'Bowler' OR role = 'All-rounder' AND wickets_taken > 30 ;

SELECT * FROM ipl_players WHERE NOT team = 'CSK';

-- Pattern Matching

SELECT * FROM ipl_players WHERE name LIKE '___a%'; -- names where 3rd letter is 'a'

SELECT * FROM ipl_players WHERE name LIKE '%a%'; -- names where 'a' is present anywhere

SELECT * FROM ipl_players WHERE name ILIKE '%L%'; -- names where 'L' is present anywhere, case-insensitive

SELECT * FROM ipl_players WHERE team IN ('RCB', 'MI', 'KKR', 'DC'); -- players from specific teams

SELECT * FROM ipl_players WHERE auction_price_crores BETWEEN 10 AND 20; -- players with auction price between 10 and 20 crores

SELECT * FROM ipl_players WHERE team != 'MI'; -- players not from MI team

SELECT * FROM ipl_players WHERE team <> 'MI'; -- players not from MI team (alternative syntax for NOT EQUAL)

-- Sorting Data

SELECT name, nickname, auction_price_crores 
FROM ipl_players
ORDER BY auction_price_crores DESC; -- sort by auction price in descending order

SELECT team, nickname, auction_price_crores 
FROM ipl_players
ORDER BY team ASC, auction_price_crores DESC; -- sort by team in ascending order and then by auction price in descending order

-- Pagination 

SELECT name, nickname, auction_price_crores
FROM ipl_players
ORDER BY auction_price_crores DESC
LIMIT 3; -- fetch top 3 players based on auction price

SELECT name, nickname, auction_price_crores
FROM ipl_players
ORDER BY auction_price_crores DESC
LIMIT 3 OFFSET 3; -- fetch next 3 players after skipping the top 3 based on auction price

SELECT name, nickname, auction_price_crores
FROM ipl_players
ORDER BY auction_price_crores DESC
LIMIT 3 OFFSET (page - 1) * limit ; -- fetch players based on page number and limit, where page and limit are variables that can be set dynamically , its called pagination, OFFSET is calculated based on page number and limit, for example:
-- page = 1, limit = 3 => OFFSET = (1-1)*3 = 0
-- page = 2, limit = 3 => OFFSET = (2-1)*3 = 3
-- page = 3, limit = 3 => OFFSET = (3-1)*3 = 6
-- page = 4, limit = 3 => OFFSET = (4-1)*3 = 9


-- Modifying Data in runtime

SELECT name, nickname, auction_price_crores, (auction_price_crores * 100) AS price_in_lakhs FROM ipl_players; -- calculate price in lakhs on the fly without storing it in the table
-- Here we can transform exisiting table data into new data without storing it in the table, this is called derived data, we can use mathematical operations, string functions, date functions, etc to derive new data from existing data.

SELECT name, nickname, auction_price_crores, (auction_price_crores + 2) AS new_auction_price_crores FROM ipl_players; -- calculate new auction price by adding 2 crores to existing auction price on the fly without storing it in the table


-- How you can get distinct values 

SELECT distinct role FROM ipl_players; -- get distinct roles from the players table


-- What is DQL ?
-- DQL stands for Data Query Language. It is a subset of SQL (Structured Query Language) that is used to query and retrieve data from a database. DQL commands are primarily focused on selecting and filtering data based on specific criteria. The most commonly used DQL command is the SELECT statement, which allows users to specify the columns they want to retrieve, apply conditions using the WHERE clause, sort the results using ORDER BY, and limit the number of rows returned using LIMIT and OFFSET. DQL is essential for extracting meaningful information from databases and is widely used in data analysis and reporting.