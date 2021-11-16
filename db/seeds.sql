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
    ('Software Engineer', 150000, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Dylan', 'Fair', 1, null),
    ('Alayna', 'Bilek', 3, 1),
    ('Baylee', 'Meyers', 5, 1),
    ('Auden', 'Rader', 2, null),
    ('Lucas', 'Pitzen', 4, 4),
    ('Joe', 'Deboom', 1, 4);