import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children,user}:{children:any,user:string}) => {
    if (!user) {
        return <Navigate to='/'/>
    }
    return children;
}

export default ProtectedRoute;