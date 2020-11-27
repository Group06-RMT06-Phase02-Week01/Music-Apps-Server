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

- **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{"message": "Invalid account"}`

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

  `http://localhost:3000/quotes/random-insult`

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
  `"http://localhost:3000/music-match/search/:artist/:length"`

- **Method:**

  `GET`

- **URL Params**
  None

  **Required:**

 acces_token

- **Data Params**

  None

- **Success Response Example**
    `{
      "id": "cd293e05-402a-4684-9b29-a027dfd654b8",
      "score": 100,
      "packaging-id": "119eba76-b343-3e02-a292-f0f00644bb9b",
      "count": 1,
      "title": "Control Mind",
      "status": "Official",
      "packaging": "None",
      "text-representation": {
        "language": "eng",
        "script": "Latn"
      },
      "artist-credit": [
        {
          "name": "Dire Forze",
          "artist": {
            "id": "784bf6a6-29e9-4573-9f22-924121852567",
            "name": "Dire Forze",
            "sort-name": "Dire Forze"
          }
        }
      ],
      `
  
- **Error Response:**
 - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"message": "Login First"}`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`
