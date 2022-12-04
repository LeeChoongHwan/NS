import CustTable from "../../../component/cust-table";
import {useEffect, useState} from "react";
import {tokenAxios} from "../../../utils/cust-axios";
import {nav_customer_home, nav_customer_member_home, read_customer_accident} from "../../../utils/url";
import {handleError} from "../../../utils/exception/global-exception-handler";
import AccidentListTable from "../../../component/accident-list-table";
import {accident_list} from "../../../utils/table_header";
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function ReportedAccidentListPage() {

    const [accidentList, setAccidentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        tokenAxios().get(read_customer_accident())
            .then(res => {
                setAccidentList(res.data);
            }).catch(err => {
            handleError(err)
        })

    }, [])


    return (
        <>
            <Container>
                <div className={"flex_box center mb-3 mt-3"}>
                <h3>접수된 사고 목록</h3>
                </div>
                <AccidentListTable _head={accident_list} _body={accidentList} _rowAction={null}/>
                <Button onClick={() => navigate(nav_customer_member_home())}>뒤로 가기</Button>
            </Container>
        </>
    )
}