import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_home, nav_employee_home, nav_login} from "../utils/url";
import {useEffect} from "react";

export default function Base() {

    const navigate = useNavigate();
    useEffect(() =>{
        sessionStorage.removeItem("access-token")
    },[])

    const moveToCustomerPage = ()=>{
        navigate(nav_customer_home());
    }
    const moveToEmployeePage = () => {
        if(sessionStorage.getItem("access-token")!==null)
            navigate(nav_employee_home());
        else
            navigate(nav_login(),{
                state : {
                    nextPage : nav_employee_home()
                }
            })
    }
    return (
        <>

            <Button lg variant={"primary"} onClick={moveToCustomerPage}>고객</Button>
            <Button lg variant={"danger"} onClick={moveToEmployeePage}>직원</Button>
        </>
    )
}