import {useEffect, useState} from "react";
import {tokenAxios} from "../../../utils/cust-axios";
import {nav_customer_member_home, read_contract_paying_info} from "../../../utils/url";
import CustTable from "../../../component/cust-table";
import {customer_contract_paying_header} from "../../../utils/table_header";
import {ModalMode as ModalStatus} from "../../../utils/global-variable";
import {useNavigate} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {handleError} from "../../../utils/exception/global-exception-handler";
import Header from "../../../component/header";

export default function ContractList(){

    const  navigate = useNavigate();

    const [contracts,setContracts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [contractId, setContractId] = useState()
    const modalState = {
        modalStatus: ModalStatus.PAY,
        showModal,
        setShowModal,
        contractId,
    }

    const moveToMemberPage = () => {
        navigate(nav_customer_member_home(),{replace : true});
    }
    useEffect(() => {
        tokenAxios().get(read_contract_paying_info())
            .then((res) => {
                setContracts(res.data)
            })
            .catch((err) => {
                handleError(err)
            })
    },[])

    const createModal = (event) =>{
        setContractId(event.currentTarget.childNodes[0].innerHTML)
        setShowModal(true)
    }
    return (
        <>
            <Container className={"mb-3"}>
                <Header _content={"계약 목록"}/>
            <CustTable _head={customer_contract_paying_header} _body={contracts} _rowAction={createModal} _modalProps={modalState}></CustTable>
            <Button variant={"dark"} onClick={moveToMemberPage}>뒤로가기</Button>
            </Container>
        </>

    )
}