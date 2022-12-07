import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {tokenAxios} from "../../utils/cust-axios";
import {
    nav_comp_investigate,
    nav_comp_loss_assess,
    nav_employee_home,
    read_employee_accident,
    read_employee_accident_state
} from "../../utils/url";
import {convertAccidentTypeToEng} from "../../utils/convert-values";
import {Button, Container} from "react-bootstrap";
import CompListTable from "../../component/comp-emp/comp-list-table";
import {comp_accident_list} from "../../utils/table_header";
import {COMP_STATE} from "../../utils/global-variable";
import {handleError} from "../../utils/exception/global-exception-handler";

export default function CompAccidentLossassessListPage(){
    const [accidentList, setAccidentList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        tokenAxios().get(read_employee_accident_state(COMP_STATE.ASSESSMENT))
            .then((res) =>{
                setAccidentList(res.data)
                }
            ).catch(err =>{
            handleError(err)
        })
    }, [])

    const moveBack = () => {
        navigate(nav_employee_home())
    }
    const moveToInvestigate = (event) => {
        const id = event.currentTarget.childNodes[0].innerHTML;
        const type = convertAccidentTypeToEng(event.currentTarget.childNodes[1].innerHTML)
        navigate(nav_comp_loss_assess(),{
            replace : true,
            state : {
                id, type
            }
        })
    }

    return (
        <>
            <Container>
                <div className={"flex_box center mt-3 mb-3"}>
                    <h4>손해 사정 사고 목록</h4>
                </div>
                <CompListTable _head={comp_accident_list} _body={accidentList} _action={moveToInvestigate}/>
                <Button className={"mt-3 mb-3"} variant={"dark"} onClick={moveBack}>뒤로가기</Button>
            </Container>
        </>
    )
}
