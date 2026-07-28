
--here left table is students1 and right table is internships
SELECT s.name, s.branch, i.company_name, i.stipends
FROM students1 AS s
LEFT JOIN internships AS i ON s.student_id = i.student_id;
-- Left Join is used to fetch all the students along with their internship information. If a student has not applied for any internship, the company_name and stipends will be NULL for that student. This allows us to see all students regardless of whether they have an internship or not.

--here left join is used when we hjave to fetch all left table records and matching records from right table. If there is no match, NULL values will be returned for columns from the right table.



--here right table is internships and left table is students1
SELECT s.name, s.branch, i.company_name, i.stipends
FROM students1 AS s
RIGHT JOIN internships AS i ON s.student_id = i.student_id;
--- Right Join is used to fetch all the internships along with the student information. If an internship has not been applied by any student, the name and branch will be NULL for that internship. This allows us to see all internships regardless of whether they have been applied for or not.

--here right join is used when we have to fetch all right table records and matching records from left table. If there is no match, NULL values will be returned for columns from the left table.


-- if we can swap the FROM and JOIN tables, we can achieve left join usign right join and vice versa. For example, if we swap the FROM and JOIN tables in the above left join query, we can achieve the same result using right join.