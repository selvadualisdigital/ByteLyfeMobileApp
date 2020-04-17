import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  offlineAccess: true,
  scopes: ['profile', 'email'],
  webClientId:'160864518018-5aib2krhh06afqcddidecbita32melbk.apps.googleusercontent.com',
});



class AuthApi {
  static googleSignInSignUp() {
    return new Promise(async (resolve, reject) => {      
      try {
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential);
        // Get Firebase access idToken
        const userToken = await auth().currentUser?.getIdToken(true);        
        resolve(JSON.stringify({userToken}));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  static signOut() {
    return new Promise((resolve, reject) => {
      auth()
        .signOut()
        .then(() => {
          GoogleSignin.revokeAccess();
          GoogleSignin.signOut();
          console.log('User signed out!');
          resolve('User signed out!');
        })
        .catch((err) => {reject(err);console.log(err);});
    });
  }
}
export default AuthApi;
