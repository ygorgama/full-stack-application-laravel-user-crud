import axios from "axios";
import { getToken } from "../utils/auth";
import { json, redirect } from "react-router-dom";

export default async function logoutAction() {
    const token = getToken();

    const response = await axios.post('http://localhost:8000/api/auth/logout', {}, {
        headers: {
            Authorization: "Bearer " + token
        }
    });

    if (response.status != 200) {
        throw new json({message: "An error ocurred!"}, {status:500})
    }

    return redirect('/login')

}