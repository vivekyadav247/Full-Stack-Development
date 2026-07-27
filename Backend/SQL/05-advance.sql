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
    status VARCHAR(20), -- Selected / Pending / Rejected

    student_id INT REFERENCES students1(student_id) ON DELETE SET NULL
)