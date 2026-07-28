-- DB index actually tells the DB ki jo data aapko chahiye woh memory ke kis kone mein hain.

CREATE TABLE marks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    marks INT NOT NULL
);

-- here we inserted 1 million records into the marks table with random names and marks. The name is generated using a combination of md5 hash and random number, and the marks are generated using a random number between 1 and 100.
INSERT INTO marks (name, marks)
SELECT
    substr(
        translate(
            md5(random()::text || gs::text),
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ),
        1,
        12
    ) AS name,
    floor (random() * 100+1)::int AS marks

FROM generate_series(1, 1000000) AS gs;

SELECT * FROM marks;


-- this query will take a long time to execute because it has to scan the entire table to find the record with the name '6E54CB28044C'. This is because there is no index on the name column, so the database has to look at every row in the table to find the matching record.



-- this query using for detail internal analysis of the query execution plan and performance. The EXPLAIN ANALYZE command will show the execution plan and the time taken to execute the query, which can help us understand why the query is taking a long time to execute.
EXPLAIN ANALYZE SELECT * FROM marks WHERE name = '6E54CB28044C';
--here our parallel sequence are working because we dont create any type of index on the name column. So, the database has to scan the entire table to find the record with the name '6E54CB28044C'. This is because there is no index on the name column, so the database has to look at every row in the table to find the matching record.

-- so the time wihtout index is currently 99.99 ms but we can optimize it using INDEX , time varies on system but it will be more than 100 ms without index. So, we can create an index on the name column to optimize the query and reduce the time taken to execute the query.




-- here INDEX is created on the name column of the marks table. This will allow the database to quickly find the record with the name '6E54CB28044C' without having to scan the entire table. The index is created using a B-tree data structure, which allows for efficient searching and sorting of data.
-- here our table is locked for writing and reading while the index is being created. This is because creating an index requires exclusive access to the table, so no other queries can be executed on the table while the index is being created.
CREATE INDEX idx_name ON marks(name);
-- index store on disk ant it is used to optimize the query performance.
-- we should know about index before table creating , on which column we have to create index. If we create index after table creation, it will take a long time to create index and it will lock the table for writing and reading while the index is being created. So, it is better to create index before table creation.

DROP INDEX idx_name;
-- it is used to delete the index from the table. This will remove the index from the table and free up the space used by the index. After dropping the index, the query will take a long time to execute again because there is no index on the name column, so the database has to scan the entire table to find the record with the name '6E54CB28044C'.


SELECT * FROM marks WHERE name = '6E54CB28044C';
--now instead of parallel seq this time index scan is used
-- now after creating index this time is reduced to 0.1 ms because the database can quickly find the record with the name '6E54CB28044C' using the index on the name column, without having to scan the entire table. This shows the importance of creating indexes on columns that are frequently used in queries, as it can significantly improve query performance and reduce execution time.
-- you can check the time taken to execute the query using EXPLAIN ANALYZE command, which will show the execution plan and the time taken to execute the query. This can help us understand why the query is taking a long time to execute and how we can optimize it using indexes.

-- INDEX SCan use B+ tree , which time complexity is O(log n) and parallel seq scan time complexity is O(n). So, index scan is much faster than parallel seq scan.


-- non key value indexes are used to optimize the query performance for non-key columns. Non-key columns are those columns that are not part of the primary key or unique constraint of the table. Non-key indexes can be created on any column of the table, and they can be used to speed up queries that filter or sort on those columns.
CREATE INDEX idx_name ON marks (name) INCLUDE(marks);
-- here we store our marks column in the index itself, so that we can fetch the marks value directly from the index without having to look up the table. This can further improve query performance for queries that filter or sort on the name column and also need to retrieve the marks value.
-- so it is called INDEX ONLY SCAN because we can fetch the marks value directly from the index without having to look up the table. This can further improve query performance for queries that filter or sort on the name column and also need to retrieve the marks value.
-- drawbacks of this is it will take more space on disk and cost will be higher because we are storing the marks column in the index itself. So, it is a trade-off between space and time. If we have enough space on disk, we can use this approach to optimize the query performance for non-key columns.
-- Advantage is the query performance will be improved because we can fetch the marks value directly from the index without having to look up the table. This can further improve query performance for queries that filter or sort on the name column and also need to retrieve the marks value.

EXPLAIN ANALYZE SELECT marks FROM marks WHERE name = '6E54CB28044C';