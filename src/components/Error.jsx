import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err = useRouteError(); // or we can destructure it here
   return (
    <>
    <div>
        <h1>Oops!! 😢😢</h1>
        <h1>Something Went Wrong!!</h1>
        <h1>{err.status+":"+ err.statusText}</h1>
    </div>
    </>
   ) 
}

export default Error  