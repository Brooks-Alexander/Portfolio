import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Home from "./home";
import Login from "../Login";

export default function Dashboard() {
    
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);
    
    return (
        
        <div className='dashboard'>
           {user ? <Home /> : <Login />}
        </div>
    )
}