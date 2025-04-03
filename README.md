# Anonymous HIV Appointment Booking System

A secure and private appointment booking system for HIV testing services.

## Features

- Anonymous appointment booking
- Email confirmations
- Daily slot availability
- Beautiful UI with rainbow gradients
- Mobile responsive design

## Tech Stack

- Next.js
- MySQL
- Nodemailer
- Tailwind CSS
- shadcn/ui

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a MySQL database
   - Run the schema.sql file:
     ```bash
     mysql -u root -p < schema.sql
     ```

4. Configure environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the variables with your database and SMTP credentials

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Email Configuration

To send confirmation emails, you'll need to:
1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate an app-specific password
4. Update the SMTP settings in `.env.local`

## Security Considerations

- No personal information is stored except for the email address
- All communication is encrypted
- Database is secured with proper access controls
- Email confirmations are sent securely

## Contributing

Feel free to submit issues and pull requests.

## License

MIT
