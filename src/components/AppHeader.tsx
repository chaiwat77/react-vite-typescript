import { useEffect, useState } from "react";

type AppHeaderProps ={
    title : string,
    year? : number //ไม่ส่ง year ก็ได้
    // year : number
}

type testName = {
    name1: string,
    jojo1?: string,

}

// type testLast= {
//     last1?: string,
// }




function AppHeader({title, year} :AppHeaderProps) {

    const [isShow, setIsShow] = useState(false);
    const [fname, setFname] = useState<testName>();
    const [testSc, setTestSc] = useState(0);
    const [lastName, setLastName] = useState<testName[]>([]);
    // const [lastName, setLastName] = useState<testLast>();

    const clickM = () =>{ 
        setFname({name1: "jojo haha"})
    }



    const mouseOver = ()=> {
        setIsShow(!isShow) // แบบ toggle
    }
    
    useEffect(() => {
        console.log('use Effect header ทำครั้งแรก และทุกครั้งที่ re-render');
    })

    useEffect(() => {
        console.log('ทำครั้งที่ re-render')
    },[])

    useEffect(() => {
        console.log('apphead 3 ทำครั้งแรก และ re-render ต่อเมื่อ isshow มีการเปลี่ยนค่า เท่านั้น')
    },[isShow])
    return (
        <>
        {fname &&  <p>testName: {fname?.name1}</p>}
        <h1 onMouseOver={mouseOver}>{title} {year}</h1>
        {isShow && <p>app header show</p>}
        <div>
            {/* <h2>testName:{fname}</h2> */}
            <button onClick={clickM}>click t</button>
            <hr />
            <h2 onClick={()=> setTestSc((e)=> testSc+1)}>{testSc}</h2>
            <hr />
            <button onClick={() => setTestSc((e)=> testSc+1)}>click sc</button>
            
            <input type="text" onChange={(e) => setFname({name1: e.target.value})} />

            {/* <input type="text" onChange={(e) => setLastName({jojo1: e.target.value})} /> */}
        
        </div>
        </> 
    );
}

export default AppHeader;




