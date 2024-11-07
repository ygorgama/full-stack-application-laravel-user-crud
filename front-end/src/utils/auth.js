import { redirect } from "react-router-dom";

export const getToken = () => {
    const token =  localStorage.getItem("token");

    const duration = getTokenExpiration();

    if (duration < 0) {
       localStorage.clear();
    }

    return token;
}

export const chechAuthLoader = () => {
    const token = getToken();

    if (!token) {
        return redirect('/login');
    }

    return true;
}

export const getTokenExpiration = () => {
    const storedExpirationDate = localStorage.getItem('expiration');

    if (storedExpirationDate) {
        const expirationDate = new Date(storedExpirationDate);
        const now = new Date();
        const duration = expirationDate.getTime() - now.getTime();
        return duration;
    }
    return;
}