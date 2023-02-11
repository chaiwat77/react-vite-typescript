import { useState } from "react";

const AppFooter = () => {

    // let Company = 'TypeScript';
    type User = {
        fullname: string
    }

    const issShow = true;
    const [company, setCompany] = useState("typescript") // ประกาศแบบตรงๆ fix ค่า 
    // const [user, setUser] = useState<User>({fullname: 'Chaiwat'}); 
    const [user, setUser] = useState<User | null>(null);  // ประกาศแบบ custom type

    const showMsg =()=>{
        setCompany('React')
        setUser({fullname: 'Chaiwat'})
    }
 

    return ( 
        <>
            { user && <p>User: {user?.fullname} </p> }
            <hr/>
            <button onClick={showMsg} >Click me</button>
            <p>create by {company}</p>
            <p>{new Date().getFullYear()}</p>
            {
                issShow && (<p>hello react TypeScript</p>)
            }
        </>
     );
}
 
export default AppFooter;