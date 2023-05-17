INSERT INTO department (name)
 VALUES ( "Promotion" ),  
        ( "Booking" ),  
        ( "Marketing" ),
        ( "Media" ),
        ( "Sound" ),
        ( "Artist" ),
        ( "Manager" );

INSERT INTO role (title, salary, department_id)
    VALUES ( "Promotion Manager", 100000, 1 ),
            ( "Booking Agent", 50000, 1 ),
            ( "Marketing Manager", 90000, 2 ),
            ( "Social Media Team", 75000, 2)
            ( "Photographer", 40000, 3 ),
            ( "Sound Technician", 65000, 4 ),
            ( "DJ", 150000, 5 ),
            ( "Visual Artist", 100000, 5 ),
            ( "A&R Manager", 200000, 6 ),
            ( "Label Owner", 1000000, 6 );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "John", "Crankle", 1, NULL ),
        ( "Smith", "Daboi", 2, 1),
        ( "Savvy", "Smith", 3, NULL),
        ( "James", "Clout", 4, 3),
        ( "Snappy", "Jones", 5, 3),
        ( "John", "Marshmello", 7, 10 ),
        ( "Joe", "Jones", 7, 10 ),
        ( "Sally", "Smith", 8, NULL),
        ( "Bob", "Jones", 9, 10 ),
        ( "Money", "Bagz", 10, NULL );
```