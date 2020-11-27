##  **REGISTER**
Register Page.
- **URL**
  `/`

- **Method:**

  `POST`

- **URL Params**
  None

  **Required:**
  email,Password

- **Data Body**
  email,Password

- **Success Response:**
{
    "email": "aaaa@gmail.com",
    "password": "123"
}

  redirect `/login`


- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

## **LOGIN**
Login Page.

- **URL**

  `/login`

- **Method:**

  `POST`

- **URL Params**
None

  **Required:**
  email,password

  **Data Body**

  email,password
- **Success Response Example**

  redirect `http://localhost:3000/quotes`

- **Error Response:**

- **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"message": "Login First"}`

- **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

## **Show Main Page**
  Main Page Show Random Quote
- **URL**

  `http://localhost:3000/quotes/random-quote`

- **Method:**

  `GET`

- **URL Params**
  None

  **Required:**

  acces_token

- **Data Params**

  None

- **Success Response:**
    ` "I would ask how old you are, but I know you can't count that high."`
- **Error Response:**
 - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"message": "Login First"}`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`
  
- **URL**

Main Page Show Random Insult

  `http://localhost:3000//quotes/random-insult`

- **Method:**

  `GET`

- **URL Params**
  None

  **Required:**

  acces_token

- **Data Params**

  None

- **Success Response Example**
    `"Being on your own would be sad, sick and weird. I don't trust myself. I need that balance."`
  
- **Error Response:**
 - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"message": "Login First"}`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`



- **URL**
Main Page Show Song
  `"http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP"`

- **Method:**

  `GET`

- **URL Params**
  None

  **Required:**

 acces_token

- **Data Params**

  None

- **Success Response Example**
    ``
  
- **Error Response:**
 - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"message": "Login First"}`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`
