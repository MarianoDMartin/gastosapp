-- check if database exists
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'GastosAppDB')
BEGIN
    -- create db
    CREATE DATABASE GastosAppDB;
    PRINT 'DB created: GastosAppDB';
END
ELSE
BEGIN
    PRINT 'The db GastosAppDB already exists.';
END

-- use db
USE GastosAppDB;

-- check if users table exists
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'users')
BEGIN
    -- create users table
    CREATE TABLE users (
        id INT PRIMARY KEY IDENTITY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        birthdate DATE NOT NULL,
        country VARCHAR(100) NOT NULL
    );
    PRINT 'users table created.';
END
ELSE
BEGIN
    PRINT 'users table already exists.';
END