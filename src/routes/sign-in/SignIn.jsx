import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        //accessToken recieved is mandatory to perform CRUD operations
        console.log(response);
    }
    return (
        <div>SignIn
            <button onClick={logGoogleUser}>sign in with google</button>
        </div>
    )
}

export default SignIn