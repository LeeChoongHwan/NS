import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {nav_customer_home, nav_employee_home, nav_login} from "../utils/url";
import {useEffect} from "react";
import Header from "../component/header";

export default function Base() {

    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem("access-token")
    }, [])

    const moveToCustomerPage = () => {
        navigate(nav_customer_home());
    }
    const moveToEmployeePage = () => {
        if (sessionStorage.getItem("access-token") !== null)
            navigate(nav_employee_home());
        else
            navigate(nav_login(), {
                state: {
                    nextPage: nav_employee_home()
                }
            })
    }
    return (
        <>
            <Container className={"w-50"}>
                <Header _content={"메뉴"}/>
                <Button className={"w-100 mt-3 mb-3"} lg variant={"primary"} onClick={moveToCustomerPage}>고객</Button>
                <Button className={"w-100 mt-3 mb-3"} lg variant={"danger"} onClick={moveToEmployeePage}>직원</Button>
            </Container>
        </>
    )
}