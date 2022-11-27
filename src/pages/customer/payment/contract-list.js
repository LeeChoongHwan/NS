import {useEffect, useState} from "react";
import {tokenAxios} from "../../../utils/cust-axios";
import {read_contract_paying_info} from "../../../utils/url";
import CustTable from "../../../component/cust-table";
import {customer_contract_paying_header} from "../../../utils/table_header";
import {ModalMode as ModalStatus} from "../../../utils/global-variable";

export default function ContractList(){

    const [contracts,setContracts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [contractId, setContractId] = useState()
    const modalState = {
        modalStatus: ModalStatus.PAY,
        showModal,
        setShowModal,
        contractId,
    }


    useEffect(() => {
        tokenAxios().get(read_contract_paying_info())
            .then((res) => {
                setContracts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const createModal = (event) =>{
        setContractId(event.currentTarget.childNodes[0].innerHTML)
        setShowModal(true)
    }
    return (
        <>
            <CustTable _head={customer_contract_paying_header} _body={contracts} _rowAction={createModal} _modalProps={modalState}></CustTable>
        </>

    )
}