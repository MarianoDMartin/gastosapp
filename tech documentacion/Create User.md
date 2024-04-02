# Create User endpoint

## Format

- **URL:** {baseUrl}/users
- **Method:** POST
- **Body:** (all the properties are required)
    ```json
    {
        "email": string,
        "password": string,
        "name": string,
        "lastname": string,
        "country": string
    }
    ```
- **Response:**
    ```json
    {
        "id": number,
        "email": string,
        "password": string,
        "name": string,
        "lastname": string,
        "country": string
    }
    ```
- **Errors:**

    |Error code|Description| 
    |--------|---------------|
    |400|Bad request format|
    |500|Internal server error|
    |409|Email already exists in the db|

## Example

- **URL:** http://localhost:3000/users
- **Method:** POST
- **Body:**
    ```json
    {
        "email": "mariano4@gmail.com",
        "password": "password",
        "name": "mariano",
        "lastname": "martin",
        "country": "ar"
    }
    ```
- **Response:**
    ```json
    {
        "id": 10,
        "email": "mariano4@gmail.com",
        "password": "password",
        "name": "mariano",
        "lastname": "martin",
        "country": "ar"
    }
    ```