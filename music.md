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
Main Page.

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
- **Success Response:**
redirect `/music`

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

## **Show Music**
Main Page.

- **URL**

  `/music`

- **Method:**

  `GET`

- **URL Params**
  None

  **Required:**

  None

- **Data Params**

  None

- **Success Response:**
  `Show All Data Music `

- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

