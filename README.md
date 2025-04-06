# Anonymous HIV Appointment Booking System

A secure and private appointment booking system for HIV testing services.

## Features

- Anonymous appointment booking
- Email confirmations
- Daily slot availability
- Beautiful UI with rainbow gradients
- Mobile responsive design

## Complete Setup Guide for Beginners

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [Git](https://git-scm.com/downloads)
- [MySQL](https://dev.mysql.com/downloads/mysql/) or a MySQL database service

### Step 1: Clone the Repository

```bash
# Open your terminal/command prompt and run:
git clone https://github.com/justinmoto/Appointment-System.git
cd hivappointment
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install
```

### Step 3: Set Up the Database

### Cloud Database (Clever Cloud or similar)
1. Sign up for a service like [Clever Cloud](https://www.clever-cloud.com/)
2. Create a new MySQL database
3. Note your database credentials (host, username, password, database name)
4. Access the PHPMyAdmin interface provided by your host
5. Create a new table called `appointments` with these columns:
   - `id`: INT, AUTO_INCREMENT, PRIMARY KEY
   - `date`: DATE, NOT NULL
   - `time`: TIME, NOT NULL
   - `email`: VARCHAR(255), NOT NULL
   - `created_at`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP
   - Add a UNIQUE KEY constraint for (date, time)

### Step 4: Configure Environment Variables

1. Create a file named `.env.local` in the project root directory
2. Add the following variables and replace with your own values:

```
# Database Configuration
DB_HOST=bn09jjz57nzt4758qukk-mysql.services.clever-cloud.com
DB_USER=uilxihrzzdpone5n
DB_PASSWORD=rdZSgfqgIralvNO4WcSq
DB_NAME=bn09jjz57nzt4758qukk

# EmailJS Configuration for Email Notifications
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=69zHv40aZR4QJmQY1
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_fk0a6wx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_77kt78u
NEXT_PUBLIC_EMAILJS_STAFF_TEMPLATE_ID=template_31y4s9u
```

### Step 5: Email Configuration

To enable appointment confirmation emails:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create email templates for user confirmation and staff notification
4. Copy your EmailJS credentials to your `.env.local` file

### Step 6: Run the Development Server

```bash
npm run dev
```

### Step 7: Access Your Application

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

### Step 8: Deploy to Production (Optional)

For a production environment:


# Start the production server
npm start
```

## Troubleshooting

Common issues and solutions:

- **Database connection errors**: Double-check your database credentials in `.env.local`
- **Missing tables error**: Ensure you've created the `appointments` table with the correct structure
- **Email sending failures**: Verify your EmailJS configuration and template IDs



