import React from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        //accessToken recieved is mandatory to perform CRUD operations
        console.log(user);
        const userDocReference = await createUserDocumentFromAuth(user)
    }

    // useEffect(() => {
    //     async function fetchUserData() {
    //         const response = await getRedirectResult(auth)
    //         console.log(response);
    //     }
    //     fetchUserData()
    // }, [])
    return (
        <div>SignIn
            <button onClick={logGoogleUser}>sign in with google</button>
            {/* <button onClick={signInGoogleRedirect}>singni with redirect</button> */}
        </div>
    )
}

export default SignIn