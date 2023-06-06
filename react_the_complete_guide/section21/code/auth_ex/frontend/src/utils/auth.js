import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem('expiration');

    const expirationDate = new Date(storedExpirationDate);

    const now = new Date();

    // in milliseconds
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}
export const getAuthToken = () => {

    const token = localStorage.getItem('token');

    if (!token){
        return null;
    }

    if (getTokenDuration() < 0){
        return "EXPIRED";
    }

    return token;
};

export const loader = () => {
    return getAuthToken();
};

export const checkAuthLoader = () => {
    const token = getAuthToken();
    
    if (!token) {
      return redirect('/auth');
    }
   
    return null;
}