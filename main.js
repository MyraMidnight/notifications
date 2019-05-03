const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BOkyIa8CV7i-OZvZoRz-Ynrf5KghV1qE3_hLMOj415xA209x7VmUL_sDM59UCB6jlCn3WJc5mSqO6TLE6k9msuM");

messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken().then(function(currentToken) {
        if (currentToken) {
        sendTokenToServer(currentToken);
        //updateUIForPushEnabled(currentToken);
        } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        //updateUIForPushPermissionRequired();
        //setTokenSentToServer(false);
        }
    }).catch(function(err) {
        console.log('An error occurred while retrieving token. ', err);
        //showToken('Error retrieving Instance ID token. ', err);
        //setTokenSentToServer(false);
    });
  
    // ...
  }).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
  // Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(refreshedToken) {
      console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
      //setTokenSentToServer(false);
      // Send Instance ID token to app server.
      sendTokenToServer(refreshedToken);
      // ...
    }).catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
      //showToken('Unable to retrieve refreshed token ', err);
    });
  });
  messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
    // ...
  });
  

  const sendTokenToServer = (token)=>{
    console.log(token);
  }
  
