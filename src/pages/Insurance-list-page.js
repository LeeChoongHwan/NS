import CustTable from "../component/cust-table";
import {Button, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {InsuranceListSample} from "../utils/sample-data/sample";
import {baseAxios} from "../utils/cust-axios";
import {insurance_all, nav_customer_non_member_home, nav_employee_home} from "../utils/url";
import {useLocation, useNavigate} from "react-router-dom";
import {ModalMode, mode_direct} from "../utils/global-variable";


export default function InsuranceList() {

    const [showModal, setShowModal] = useState(false)
    const [insId, setInsId] = useState("");
    const [list, setList] = useState([]);
    const [mode, setMode] = useState();
    const location = useLocation();
    const navigate = useNavigate();


    const listProps = {
        showModal,
        setShowModal,
        insId,
        mode,
        modalStatus: ModalMode.GUARANTEE
    }
    useEffect(() => {

        baseAxios().get(insurance_all())
            .then(function (response) {
                setList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        if (location.state.mode !== null)
            setMode(location.state.mode);

    }, [])
    const createModal = (event) => {
        setShowModal(true)
        setInsId(event.currentTarget.childNodes[0].innerHTML)
    }

    const moveToBack = () => {
        const url = mode === mode_direct ? nav_customer_non_member_home() : nav_employee_home()
        navigate(url, {replace: true});
    }

    return <>
        <Container>
            <CustTable _head={InsuranceListSample().head} _body={list} _rowAction={createModal}
                       _modalProps={listProps}/>
            <Button onClick={moveToBack}>뒤로가기</Button>
        </Container>
    </>
}