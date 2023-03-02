import { redirect } from "react-router-dom";

export const action = () => {
    localStorage.clear("token");
    localStorage.clear("expiration");
    return redirect("/");
};