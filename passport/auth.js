module.exports = {

	"facebookAuth": {
		clientID:'604081799753537',
		clientSecret:'eb1cc89d34bc0bfae8c4da3340fd5bdb',
 		callbackURL:'http://localhost:3000/auth/facebook/callback'
	}
}



// // Redirect the user to Facebook for authentication.  When complete,
// // Facebook will redirect the user back to the application at
// //     /auth/facebook/callback
// app.get('/auth/facebook', passport.authenticate('facebook'));

// // Facebook will redirect the user to this URL after approval.  Finish the
// // authentication process by attempting to obtain an access token.  If
// // access was granted, the user will be logged in.  Otherwise,
// // authentication has failed.
// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));