const admin = require("firebase-admin");
admin.initializeApp();

// Import the funtion from the specific file
const {addMessage} = require("./api/addMessage");

// Export the funtion for deployment
exports.addMessage = addMessage;
