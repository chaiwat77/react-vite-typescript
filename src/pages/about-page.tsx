import { Link } from "react-router-dom";
import { SelectAuthState, updateProfileAction } from "../redux-toolkit/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";


const AboutPage = () => {
    const {profile,email} = useAppSelector(SelectAuthState)
    const dispatch = useAppDispatch();

    const updateProfile = () =>{
        dispatch(updateProfileAction())
    }

    return ( 
        <>
            <h1>About Page </h1>
            <p> {profile} , {email } </p>
            <button onClick={updateProfile}>Update</button>
            <Link to='/' replace={true}> กลับหน้าแรก </Link>
        </>
     );
}
 
export default AboutPage;