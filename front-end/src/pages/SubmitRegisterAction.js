import axios from "axios";
import { json, redirect } from "react-router-dom";

export default async function registerAction({request}) {
    let formData = await request.formData(); 

    const requestBody = {
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name'),
        password_confirmation: formData.get('password_confirmation')
    }

    const response = await axios.post('http://localhost:8000/api/auth/register', requestBody, {
        // headers: {
        //     Authorization: "Bearer " + token
        // }
    });
    
    if (!(response.status === 201)) {
        throw json({message: 'Could not save event'}, {status: 500});
    }

    return redirect('/login');
}