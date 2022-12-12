import CompListTable from "../../component/comp-emp/comp-list-table";
import {useEffect, useState} from "react";
import {tokenAxios} from "../../utils/cust-axios";
import {nav_employee_home, read_employee_accident} from "../../utils/url";
import {Button, Container} from "react-bootstrap";
import {comp_accident_list} from "../../utils/table_header";
import {useNavigate} from "react-router-dom";
import {handleError} from "../../utils/exception/global-exception-handler";

export default function CompAccidentListPage() {
    const [accidentList, setAccidentList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        tokenAxios().get(read_employee_accident())
            .then((res) =>
                setAccidentList(res.data)
            ).catch((err) => handleError(err))
    }, [])

    const moveBack = () => {
        navigate(nav_employee_home())
    }


    return (
        <>
            <Container>
                <div className={"flex_box center"}>
                    <h4>접수된 사고 목록</h4>
                </div>
                <CompListTable _head={comp_accident_list} _body={accidentList}/>
                <Button variant={"dark"} onClick={moveBack}>뒤로가기</Button>
            </Container>
        </>
    )
}