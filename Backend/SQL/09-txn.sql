--  Transactions in SQL are used to ensure that a series of operations are executed as a single unit of work. This means that either all operations within the transaction are completed successfully, or none of them are applied, maintaining the integrity of the database.
-- Example of successful transaction in SQL:
BEGIN;
-- Your SQL operations here
COMMIT;
-- Example of failed transaction in SQL:
BEGIN;
-- Your SQL operations here
-- If an error occurs during the transaction, you can roll back the changes
ROLLBACK;
-- The Main Keywords arew BEGIN , COMMIT, and ROLLBACK.
-- IF We want to start a transaction, we use the BEGIN keyword. This marks the beginning of a transaction block. All subsequent operations will be part of this transaction until we either commit or roll back the transaction.
-- if we begin at once the table will be locked for writing and reading until we commit or rollback the transaction. So, it is better to use transaction in a small block of code.
-- If all operations within the transaction are successful, we use the COMMIT keyword to save the changes made during the transaction to the database. This makes the changes permanent and visible to other transactions.
-- If any operation within the transaction fails or encounters an error, we can use the ROLLBACK keyword to undo all changes made during the transaction. This ensures that the database remains in a consistent state, as if the transaction never occurred.
-- IF our 100 queries are executed in a transaction and if any one query fails, then all the queries will be rolled back and the database will remain in a consistent state. This is important for maintaining data integrity and preventing partial updates that could lead to inconsistencies.
-- Transactions have ACID properties: Atomicity, Consistency, Isolation, and Durability.
-- Atomicity ensures that all operations within a transaction are treated as a single unit, and either all of them are executed or none of them are. This prevents partial updates that could lead to data inconsistencies.
-- Isolation ensures that concurrent transactions do not interfere with each other, and the changes made by one transaction are not visible to other transactions until the transaction is committed. This prevents issues such as dirty reads, non-repeatable reads, and phantom reads.
-- Consistency ensures that a transaction brings the database from one valid state to another valid state, maintaining the integrity of the data. Any constraints or rules defined in the database schema must be satisfied before and after the transaction is executed. If we have Atomic and Isolation properties, then Consistency is automatically satisfied.
-- Durability ensures that once a transaction is committed, the changes made are permanent and will survive any subsequent system failures. This means that even in the event of a crash or power loss, the committed changes will be preserved and can be recovered when the system is restored.
-- ACID properties are essential for maintaining the reliability and integrity of a database system, especially in multi-user environments where concurrent transactions are common. By adhering to these properties, databases can ensure that data remains accurate, consistent, and resilient to failures, providing a robust foundation for applications that rely on them.
-- Transactions ensure ACID properties in SQL databases, which are crucial for maintaining data integrity and consistency. By using transactions, developers can group multiple operations into a single unit of work, ensuring that either all operations succeed or none of them are applied. This prevents partial updates and maintains the reliability of the database system.
-- The DBS is ACID compliant , When he satisfy the ACID properties, it means that the database system guarantees that transactions will be processed reliably and consistently, even in the presence of concurrent access, system failures, or other unexpected events. This is essential for maintaining the integrity of the data and ensuring that applications built on top of the database can function correctly and predictably.
-- The ACID Compliance is a fundamental aspect of modern relational database management systems (RDBMS) and is critical for applications that require strong data consistency and reliability. By adhering to the ACID properties, databases can provide a robust foundation for building applications that handle complex transactions and maintain data integrity in various scenarios.
-- The Acid compliance DBS is used in various industries and applications where data integrity and reliability are paramount. Some examples include:
-- The ACID compliance DBs are PostgreSQL, MySQL, Oracle Database, Microsoft SQL Server, and IBM Db2. These databases are widely used in industries such as finance, healthcare, e-commerce, and telecommunications, where data integrity and reliability are critical for business operations.
-- THe Non-ACID compliance DBs are MongoDB, Cassandra, Couchbase, and Redis. These databases are often used in scenarios where high scalability and performance are prioritized over strict data consistency, such as in real-time analytics, caching, and distributed systems. However, they may sacrifice some of the guarantees provided by ACID compliance in favor of flexibility and speed.