const crypto = require('crypto');

// Generate a secure random string (e.g., 32 characters)
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Generated Secret Key:', secretKey);
