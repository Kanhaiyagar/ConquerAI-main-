
---

## Backend Implementation

### 1. Server Setup (server.js)

The Express.js server is configured with:
- **CORS** enabled for multiple origins (localhost, Render deployment)
- **Static file serving** for uploads
- **Body parsing** for JSON requests
- **Middleware** for error handling
- **API Routes** for all features

```javascript
Key Configuration:
- PORT: 8000 (default)
- Allowed Origins: localhost:5173, localhost:5174, Render deployment
- Methods: GET, POST, PUT, DELETE
- Environment: Loaded from .env file
