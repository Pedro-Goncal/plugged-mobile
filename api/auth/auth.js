import { Auth } from "aws-amplify";
import { Hub } from "aws-amplify";

//===================================
//SIGN UP
//===================================
export const signUp = async (email, name, password) => {
  console.log("Sign up run");
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        email,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
};
//===================================

//===================================
//RESEND CONFIRMATION CODE
//===================================
export const resendConfirmationCode = async (username) => {
  try {
    await Auth.resendSignUp(username);
    console.log("Code resent successfully");
  } catch (error) {
    console.log("error resending code: ", err);
  }
};
//===================================

//===================================
//CONFIRM SIGN UP
//===================================
export const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
    console.log("Confirme SignUp sent");

    //Auto signin after confirmation
    const listenToAutoSignInEvent = () => {
      Hub.listen("auth", ({ payload }) => {
        const { event } = payload;
        if (event === "autoSignIn") {
          const user = payload.data;
          // assign user
          console.log(user);
          //TODO - Push info to redux and redirect to profile screen
        } else if (event === "autoSignIn_failure") {
          // redirect to sign in page
          console.log("Auto signin failed");
        }
      });
    };

    listenToAutoSignInEvent();
  } catch (error) {
    console.log("error confirming sign up", error);
  }
};
//===================================

//===================================
//SIGN IN
//===================================

export const signIn = async (username, password) => {
  try {
    await Auth.signIn(username, password);

    //TODO - Redirect to profile screen
  } catch (error) {
    console.log("error signing in", error);
  }
};

//===================================
//SIGN OUT
//===================================

export const signOut = async () => {
  try {
    await Auth.signOut();
    //TODO - Redirect to home screen or login screen
  } catch (error) {
    console.log("error signing out", error);
  }
};

//===================================
//SIGN OUT
//===================================

export const signOutFromAllDevices = async () => {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log("error signing out from all devices", error);
  }
};

//===================================
//CHANGE PASSWORD
//===================================
export const changePassword = async (oldPassword, newPassword) => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, oldPassword, newPassword);
    })
    .then((data) => {
      //TODO - Push new data to redux
      console.log(data);
    })
    .catch((err) => console.log(err));
};

//===================================
//FORGOT PASSWORD REQUEST
//===================================
export const forgotPasswordRequest = async (username) => {
  Auth.forgotPassword(username)
    .then((data) => {
      //TODO - Push data to redux and/or redirect to page to enter verification code and new password
      console.log(data);
    })
    .catch((err) => console.log(err));
};

//===================================
//FORGOT PASSWORD CONFIRM
//===================================
export const forgotPasswordConfirm = async (username, code, newPassword) => {
  Auth.forgotPasswordSubmit(username, code, newPassword)
    .then((data) => {
      //TODO - Push to redux, and redirect to profile page
      console.log(data);
    })
    .catch((err) => console.log(err));
};
