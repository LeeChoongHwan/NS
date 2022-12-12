import { Container } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useNavigate,useLocation} from "react-router-dom";
import { nav_employee_home } from "../../utils/url";
import {useEffect, useState} from "react";
import { baseAxios, tokenAxios } from "../../utils/cust-axios";
import { show_dev_insurance_list } from "../../utils/url";
import InsuranceListTable from "./InsuranceListTable";
import { CreateInsuranceSample } from "../../utils/sample-data/create-insurance-sample";
import { nav_create_insurance_health } from "../../utils/url";
import { nav_create_insurance_car } from "../../utils/url";
import { nav_create_insurance_fire } from "../../utils/url";
import { insurance_all } from "../../utils/url";
import { nav_insurance_auth } from "../../utils/url";

export default function CreateInsuranceList() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [list, setList] = useState([]);
    const [mode, setMode] = useState();
    const [insId, setInsId] = useState("");
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        tokenAxios().get(show_dev_insurance_list())
            .then(function (response) {
                setList(response.data);
            })
            .catch(function (error) {
                console.log(error);
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
        <Button onClick={() => navigate(nav_create_insurance_health())}>건강보험 설계</Button>{' '}
        <Button onClick={() => navigate(nav_create_insurance_car())}>자동차보험 설계</Button>{' '}
        <Button onClick={() => navigate(nav_create_insurance_fire())}>화재보험 설계</Button>{' '}
        <Button onClick={() => navigate(nav_employee_home())}>뒤로가기</Button>
        </>
    );
}