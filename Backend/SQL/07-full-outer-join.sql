-- Full outer join is a type of join that returns all records from both tables, and the matched records from both tables. If there is no match, the result is NULL on the side of the table that does not have a match.

SELECT s.name, s.branch, i.company_name, i.stipends
FROM students1 AS s
FULL OUTER JOIN internships AS i ON s.student_id = i.student_id;

-- here it fetch all data from both tables and if there is no match, it will return NULL for the columns of the table that does not have a match. This allows us to see all students and all internships regardless of whether they have been applied for or not.