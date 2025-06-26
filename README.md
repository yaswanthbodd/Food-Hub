# FoodHub 🍔🍕🥗 — Full-Stack Food Ordering Website
A comprehensive food ordering web application featuring user authentication, dynamic menus, cart management, and an admin dashboard for managing food items.

📝 Project Overview
FoodHub is a full-featured food ordering platform where users can register/login, browse food categories, add items to their cart, and place orders. Admins can manage the food inventory via a dedicated dashboard.

This project combines a modern React.js frontend with Material UI and Tailwind CSS for a sleek UI, alongside a robust Spring Boot backend with REST APIs and secure JWT authentication.

🔧 Technology Stack

---------Frontend------------

- React.js with React Router for SPA navigation

- Material UI (MUI) + Tailwind CSS for styling and layout

- Axios for API communication

- JWT token handling for secure user sessions


---------Backend-------------

- Java Spring Boot REST API

- Spring Security with JWT for authentication & authorization

- JPA/Hibernate for ORM with MySQL database

- Multipart file upload support for food item images

🚀 Key Features

User Features:

👤 User registration and login/logout

🍽️ Browse categorized food menus with detailed item views

🛒 Add, update, and remove items in the shopping cart

🧾 Place orders (future implementation planned)

🔄 Dark and light mode toggle

Admin Features:

🔐 Secure admin login

📝 Add new food items with image upload and preview

📋 View, paginate, and delete existing food items

🎯 Sidebar navigation with active tab highlighting

✅ Success and error notifications with snackbars

📁 Project Structure

foodhub/

├── backend/               # Spring Boot backend code

│   ├── src/main/java/

│   ├── src/main/resources/

│   └── pom.xml

├── frontend/              # React.js frontend app

│   ├── public/

│   ├── src/

│   ├── tailwind.config.js

│   ├── package.json

│   └── vite.config.js

└── README.md

⚙️ Setup Instructions

Prerequisites

- Java 17+

- Maven 3.8+

- Node.js 18+

- npm or yarn

- MySQL or compatible relational DB

---------------------------

Backend Setup

Clone and navigate to backend:

bash

git clone https://github.com/yaswanthbodd/foodhub.git

cd foodhub/backend

Configure your database connection in application.properties:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/foodhub_db
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update

Build and run:

bash

mvn clean install

mvn spring-boot:run

The backend API will run on: http://localhost:8080

------------------------------------------------------------

Frontend Setup

Navigate to frontend:

bash

cd ../frontend

Install dependencies:

bash

npm install

npm install material-UI

- react-router-dom
- jwt-decode

or

yarn install

Run development server:

bash

npm run dev

or

yarn dev

Frontend will be available at: http://localhost:5173 (or your configured port)

📋 Usage

Register or login as a user to browse and add food items to your cart.

Admin users can login to manage food inventory.

Add items, view and delete items via admin dashboard.

Toggle between light and dark modes.

Real-time notifications guide user actions.

(Future) Checkout and order history features to be added.

