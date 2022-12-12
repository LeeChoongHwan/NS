import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {InsuranceType} from "../../utils/global-variable";
import {nav_employee_home, nav_home, nav_uw_contract} from "../../utils/url";
import Header from "../../component/header";

export default function UwPage() {
    const navigate = useNavigate();

    const moveToHealthContractListPage = () => {
        navigate(nav_uw_contract(), {
            state: {
                insuranceType: InsuranceType.HEALTH
            }
        })
    }
    const moveToCarContractListPage = () => {
        navigate(nav_uw_contract(), {
            state: {
                insuranceType: InsuranceType.CAR
            }
        })
    }
    const moveToFireContractListPage = () => {
        navigate(nav_uw_contract(), {
            state: {
                insuranceType: InsuranceType.FIRE
            }
        })
    }

    return (
        <>
            <Container className={"w-50"}>
                <Header _content={"인수 심사 메뉴"}/>
                <Button className={"col-12 mt-3 mb-3"} onClick={moveToHealthContractListPage} variant={"primary"}>건강
                    보험</Button>
                <Button className={"col-12 mt-3 mb-3"} onClick={moveToCarContractListPage} variant={"danger"}>자동차
                    보험</Button>
                <Button className={"col-12 mt-3 mb-3"} onClick={moveToFireContractListPage} variant={"warning"}>화재
                    보험</Button>
                <Button className={"col-12 mt-3 mb-3"} onClick={() => navigate(nav_employee_home(), {replace: true})}
                        variant={"success"}>뒤로 가기</Button>
            </Container>
        </>
    )
}