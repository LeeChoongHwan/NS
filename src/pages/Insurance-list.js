import CustTable from "../component/cust-table";
import {Container} from "react-bootstrap";
import CustModal from "../component/cust-modal";
import {useState} from "react";
import {InsuranceListSample} from "../utils/sample-data/sample";



export default function InsuranceList() {

    const [showModal, setShowModal] = useState(false)
    const [insId, setInsId]= useState("");

    const listProps = {
        showModal,
        setShowModal,
        insId
    }

    console.log(InsuranceListSample())
    console.log(InsuranceListSample().body  )

    const createModal = (event) =>{
        console.log(event)
        setShowModal(true)
        setInsId(event.target.key)
    }

    return <>
        <Container>
            <CustTable _head={InsuranceListSample().head} _body={InsuranceListSample().body} _rowAction={createModal} _modalProps={listProps}/>
        </Container>
    </>
}