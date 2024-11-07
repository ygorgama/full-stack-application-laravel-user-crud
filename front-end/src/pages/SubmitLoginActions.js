import axios from "axios";
import { json, redirect} from "react-router-dom";

export default async function  loginAction({request}) {
    let formData = await request.formData(); 

    const requestBody = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const response = await axios.post('http://localhost:8000/api/auth/login', requestBody, {
        // headers: {
        //     Authorization: "Bearer " + token
        // }
    });


    if (!(response.status === 200)) {
        throw json({message: 'Could not save event'}, {status: 500});
    }

    localStorage.setItem('token', response.data.data.access_token);
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + response.data.data.expires_in);
    console.log(expiration)
    localStorage.setItem('expiration', expiration.toISOString());
    return redirect('/');
}