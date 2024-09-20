# Parlour Service Application

This is a Parlour Service Application designed to manage and book various beauty and grooming services such as haircuts, facials, manicures, and more. The application provides a user-friendly interface for customers to browse services, book appointments, and make payments, while allowing parlour administrators to manage appointments, service listings, and customer data.

## Features

- **Service Listing:** Display a list of services provided by the parlour with details like price, duration, and description.
- **Appointment Booking:** Customers can book an appointment by selecting a service, preferred date, and time.
- **User Authentication:** Secure sign-up, login, and profile management for customers and administrators.
- **Admin Dashboard:** Manage services, customer appointments, and view analytics.
- **Payment Integration:** Customers can make secure payments for booked services online.
- **Notifications:** Email and SMS notifications for booking confirmations and reminders.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.

## Technologies Used

- **Frontend:** React.js, Next.js, Tailwind CSS, Material UI (MUI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Tokens) for secure authentication
- **Payment Gateway:** Integration with Stripe/PayPal for secure online payments
- **Deployment:** Vercel/Netlify for frontend, Heroku/DigitalOcean for backend
- **Others:** Email and SMS services (Twilio, SendGrid)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mehetaj/jerins-client
   ```

2. Navigate into the project directory:

   ```bash
   cd jerins-client
   ```

4. Set up environment variables:

   - In the backend, create a `.env` file and configure the following variables:

     ```env
     MONGO_URI=<your_mongo_db_connection_string>
     JWT_SECRET=<your_jwt_secret>
     STRIPE_SECRET_KEY=<your_stripe_secret_key>
     EMAIL_SERVICE_API_KEY=<your_email_service_key>
     SMS_SERVICE_API_KEY=<your_sms_service_key>
     ```

   - In the frontend, create a `.env` file and configure the following variables:

     ```env
     NEXT_PUBLIC_API_URL=<your_backend_api_url>
     ```


6. Open your browser and visit `http://localhost:3000` to use the application.

## Usage

- **Customer:** Sign up, log in, browse services, and book appointments. Customers can manage their bookings from the dashboard.
- **Admin:** Log in to the admin dashboard to manage services, view bookings, and handle customer queries.

`

## Future Improvements

- Add loyalty program for frequent customers.
- Integrate real-time chat for customer support.
- Enable calendar integration for seamless appointment management.
- Add more payment gateways for flexibility.
- Develop a mobile app for Android and iOS.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy Coding!
