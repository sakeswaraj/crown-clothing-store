import React from 'react';
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
// import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import "./Authentication.scss";

function Authentication() {
    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup()
    //     //accessToken recieved is mandatory to perform CRUD operations
    //     console.log(user);
    //     const userDocReference = await createUserDocumentFromAuth(user)
    // }

    // useEffect(() => {
    //     async function fetchUserData() {
    //         const response = await getRedirectResult(auth)
    //         console.log(response);
    //     }
    //     fetchUserData()
    // }, [])
    return (
        <div className='authentication-container'>
            {/* <button onClick={logGoogleUser}>sign in with google</button> */}
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInGoogleRedirect}>singni with redirect</button> */}
        </div>
    )
}

export default Authentication