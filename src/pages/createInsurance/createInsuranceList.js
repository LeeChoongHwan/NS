import {Button} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {
    nav_create_insurance_car,
    nav_create_insurance_fire,
    nav_create_insurance_health,
    nav_employee_home,
    nav_insurance_auth,
    show_dev_insurance_list
} from "../../utils/url";
import {useEffect, useState} from "react";
import {tokenAxios} from "../../utils/cust-axios";
import InsuranceListTable from "./InsuranceListTable";
import {CreateInsuranceSample} from "../../utils/sample-data/create-insurance-sample";
import {handleError} from "../../utils/exception/global-exception-handler";

export default function CreateInsuranceList() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [forbidden, setForbidden] = useState(false)

    useEffect(() => {

        tokenAxios().get(show_dev_insurance_list())
            .then(function (response) {
                setList(response.data);
            })
            .catch(function (error) {
                handleError(error);
                if(error.response.status === 403)
                    setForbidden(true)
            });
    }, [])

    const moveToAuth = (event) => {
        const id = event.currentTarget.childNodes[0].innerHTML;
        navigate(nav_insurance_auth(),{
            replace : true,
            state : {
                id
            }
        })
    }

    return(
        <>
        <InsuranceListTable _head={CreateInsuranceSample().head} _body={list} _rowAction={moveToAuth}>
        </InsuranceListTable>
        <Button disabled={forbidden} onClick={() => navigate(nav_create_insurance_health())}>건강보험 설계</Button>{' '}
        <Button disabled={forbidden} onClick={() => navigate(nav_create_insurance_car())}>자동차보험 설계</Button>{' '}
        <Button disabled={forbidden} onClick={() => navigate(nav_create_insurance_fire())}>화재보험 설계</Button>{' '}
        <Button onClick={() => navigate(nav_employee_home())}>뒤로가기</Button>
        </>
    );
}