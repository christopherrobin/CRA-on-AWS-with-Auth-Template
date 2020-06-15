import { Auth } from 'aws-amplify';

export const signIn = async (username, password) => {
    try {
        await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export const signOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export const signUp = async (userName, password, email, phoneNumber) => {
    try {
        await Auth.signUp({
            username: userName,
            password,
            attributes: {
                email,          // optional
                // phone_number: phoneNumber,   // optional - E.164 number convention
                // other custom attributes 
            }
        }).then(
            (result) => console.log({ result })
        );
    } catch (error) {
        console.log('error signing up:', error);
    }
}
