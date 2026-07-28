CREATE TABLE students1 (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    branch VARCHAR(50)
);

CREATE TABLE internships(
    internship_id SERIAL PRIMARY KEY,
    company_name VARCHAR(50),
    role VARCHAR(50),
    stipends INT CHECK (stipends > 10000),
    status VARCHAR(20),
    -- Selected / Pending / Rejected
    student_id INT REFERENCES students1(student_id) ON DELETE
    SET NULL
)


INSERT INTO students1 (name, email, branch)
VALUES (
        'John',
        'john.doe@example.com',
        'Computer Science'
    ),
    (
        'Rahul',
        'rahul@example.com',
        'Mechanical Engineering'
    ),
    (
        'Priya',
        'priya@example.com',
        'Electrical Engineering'
    ),
    (
        'Amit',
        'amit@example.com',
        'Civil Engineering'
    ),
    (
        'Sneha',
        'sneha@example.com',
        'Biotechnology'
    ),
    (
        'Rohan',
        'rohan@example.com',
        'Chemical Engineering'
    );

SELECT * FROM students1;


INSERT INTO internships
(company_name, role, stipends, status, student_id)
VALUES
('Google', 'Software Engineer Intern', 15000, 'Selected', 1),
('Microsoft', 'Data Analyst Intern', 12000, 'Pending', NULL),
('Amazon', 'Cloud Engineer Intern', 18000, 'Rejected', 3),
('Facebook', 'UI/UX Designer Intern', 13000, 'Selected', 1),
('Tesla', 'Mechanical Design Intern', 20000, 'Pending', 5),
('SpaceX', 'Aerospace Engineer Intern', 25000, 'Rejected', 6);

SELECT * FROM internships;


-- INNER JOIN to fetch student details along with their internship information
-- here we are joining the students1 table with the internships table based on the student_id column. This will allow us to retrieve the name, branch, company name, role, and stipends for each student who has an internship.
-- here we are using INNER JOIN becuase here we just want to fetch the students who have applied for internships and not all the students. If we use LEFT JOIN then it will fetch all the students even if they have not applied for any internship.
SELECT s.name, s.branch, i.company_name, i.role, i.stipends
FROM students1 AS s
INNER JOIN internships AS i ON s.student_id = i.student_id;




