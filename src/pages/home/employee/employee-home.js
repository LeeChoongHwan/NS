import {Button, Container} from "react-bootstrap";
import {
    nav_comp_investigate_list,
    nav_comp_list, nav_comp_loss_assess_list,
    nav_create_insurance_list,
    nav_home,
    nav_insurance,
    nav_login,
    nav_uw
} from "../../../utils/url";
import {mode_sales} from "../../../utils/global-variable";
import {useNavigate} from "react-router-dom";

export default function EmployeeHome() {

    const navigate = useNavigate();


    const moveToSalesPage = () => {
        if (sessionStorage.getItem("access-token") !== null) {
            navigate(nav_insurance(), {
                state: {
                    mode: mode_sales
                }
            });
        } else
            navigate(nav_login())
    }

    const moveToUwPage = () => {
        if (sessionStorage.getItem("access-token") !== null)
            navigate(nav_uw());
        else
            navigate(nav_login())
    }
    const logOut = () => {
        sessionStorage.removeItem("access-token");
        navigate(nav_home(), {replace: true})
    }

    const moveTo = (url) => {
        navigate(url)
    }

    const moveToCreateInsurancePage = () => {
        if (sessionStorage.getItem("access-token") !== null)
            navigate(nav_create_insurance_list());
        else
            navigate(nav_login())
    }

    return (
        <>
            <Container className={"w-50"}>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>직원 작업 목록</h4>
                </div>
                <Button className={"col-12 mt-3 mb-3"} lg variant={"primary"} onClick={moveToSalesPage}>영업 하기</Button>
                <Button className={"col-12 mt-3 mb-3"} lg variant={"success"} onClick={moveToUwPage}>인수심사하기</Button>
                <Button className={"col-12 mt-3 mb-3"} lg variant={"info"} onClick={moveToCreateInsurancePage}>보험
                    설계하기</Button>
                <Button className={"col-12 mt-3 mb-3"} lg variant={"secondary"}
                        onClick={() => moveTo(nav_comp_list())}>사고목록조회</Button>
                <Button className={"col-12 mt-3 mb-3"} lg variant={"warning"}
                        onClick={() => moveTo(nav_comp_investigate_list())}>손해조사</Button>
                <Button className={"col-12 mt-3 mb-3"} lg variant={"light"}
                        onClick={() => moveTo(nav_comp_loss_assess_list())}>손해사정</Button>
                <Button className={"col-12 mt-3 mb-3"} onClick={logOut} variant={"dark"}>로그아웃</Button>
            </Container>
        </>
    )

}