INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Dylan', 'Fair', 1, 100),
    ('Alayna', 'Bilek', 3, 101),
    ('Baylee', 'Meyers', 5, 102),
    ('Auden', 'Rader', 2, 100),
    ('Lucas', 'Pitzen', 4, 102),
    ('Joe', 'Deboom', 1, 102);
INSERT INTO department(label)
VALUES
    ('Development'),
    ('Accounting'),
    ('HR'),
    ('Warehouse'),
    ('Production line');
INSERT INTO roles(title, salary, department_id)
VALUES
    ('Accountant', 40000, 2),
    ('Product handler', 35000, 5),
    ('Forklift Operator', 50000, 4),
    ('Represenative', 46000, 3),
    ('Software Engineer', 150000, 1)