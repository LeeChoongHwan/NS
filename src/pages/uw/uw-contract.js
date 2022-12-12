import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CustTable from "../../component/cust-table";
import {uw_contract_header} from "../../utils/table_header";
import {tokenAxios} from "../../utils/cust-axios";
import {nav_uw, read_customer_uw_status} from "../../utils/url";
import {convertUwStatus} from "../../utils/convert-values";
import {ModalMode as ModalStatus} from "../../utils/global-variable";
import {Button} from "react-bootstrap";
import {handleError} from "../../utils/exception/global-exception-handler";

export default function UwContract() {
    const [body, setBody] = useState([])
    const [type, setType] = useState();
    const [showModal, setShowModal] = useState(false)
    const [customerId, setCustomerId] = useState();
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const modalState = {
        modalStatus: ModalStatus.UW,
        showModal,
        setShowModal,
        customerId,
        type,
        setRefresh
    }

    useEffect(() => {
        if (location.state.insuranceType !== null) {
            setType(location.state.insuranceType)
            tokenAxios().get(read_customer_uw_status(location.state.insuranceType))
                .then((res) => {
                    res.data.map((data) => {
                            data.conditionOfUw = convertUwStatus(data.conditionOfUw)
                        }
                    )
                    setBody(res.data);
                }).catch(err => handleError(err))
        }


    }, [refresh])

    const createModal = (event) => {
        setShowModal(true)
        setCustomerId(event.currentTarget.childNodes[0].innerHTML)
    }

    return (
        <>
            <CustTable _head={uw_contract_header} _body={body} _modalProps={modalState} _rowAction={createModal}/>
            <Button onClick={() => navigate(nav_uw())}>뒤로가기</Button>
        </>
    )
}