# Sign In endpoint

## Format

- **URL:** {baseUrl}/users/signin
- **Method:** GET
- **Body:** (all the properties are required)
    ```json
    {
        "email": string,
        "password": string
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
    |409|incorrect email or password|

## Example

- **URL:** http://localhost:4000/users/signin
- **Method:** GET
- **Body:**
    ```json
    {
        "email": "mariano4@gmail.com",
        "password": "password"
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