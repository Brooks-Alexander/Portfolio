import { signInWithGoogle } from "../../firebase";

export default function Login() {
    
    return (
        
        <div className='dashboard'>
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}