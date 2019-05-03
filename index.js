const admin = require('firebase-admin');

var serviceAccount = require("./secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://notification-d102d.firebaseio.com"
});


// This registration token comes from the client FCM SDKs.
var registrationToken = 'dRcUIxVDVAk:APA91bGfrf_8plcNGafIVaC8i_eiLd9Mdsxrfqvu7twUS7VylWAxVynA_Yi-36s0fiqH1c8iCKsoAWWKUThiqemP1aMU6TRPwk16je4i_YblBpVxXGmw1462UIxuSlBLLQNiiC3uTcsO'
var message = {
  data: {
    title: 'TIL HAMINGJU!!!',
    message: 'Þetta er super push notification'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
