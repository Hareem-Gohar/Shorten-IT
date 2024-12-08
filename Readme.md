
# Shorten-IT

Shorten-IT is a URL shortening application that allows users to create short, easy-to-share links. The application also provides the ability to track the number of clicks on each shortened URL and set an expiry date for the links.

## Features

- **URL Shortening**: Paste a long URL to generate a short, shareable link.
- **Expiry Date**: Set an expiry date for your shortened URL.
- **Click Tracking**: Track the number of clicks for each shortened URL.
- **Automatic Expiry**: URLs will automatically expire after the set date.
- **Clipboard Copy**: Easily copy the shortened URL to your clipboard.
- **Redirect**: Redirect users to the original URL when they access the shortened link.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Validation**: Simple URL validation using regular expressions
- **URL Shortening Library**: [nanoid](https://github.com/ai/nanoid)
- **dotenv**: A zero-dependency module to load environment variables.

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Hareem-Gohar/Shorten-IT.git
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your environment variables (e.g., MongoDB connection string).

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser.
2. Paste the long URL in the provided input field.
3. Set an expiry date (optional).
4. Click "Shorten URL" to generate a short link.
5. The shortened URL will be displayed, along with the option to copy it to your clipboard.
6. Click the shortened URL to be redirected to the original URL.

## API Endpoints

### POST /shorten

Create a new shortened URL.

#### Request Body
```json
{
  "originalUrl": "https://example.com",
  "expiryDate": "2024-12-31T23:59:59"
}
```

#### Response
```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

### GET /:shortUrl

Redirect to the original URL for the given shortened URL.

#### Response
- **200 OK**: Redirects to the original URL.
- **404 Not Found**: If the shortened URL does not exist.
- **410 Gone**: If the shortened URL has expired.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them.
4. Push to your forked repository.
5. Create a pull request.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [nanoid](https://github.com/ai/nanoid)
