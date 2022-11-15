import CustTable from "../component/cust-table";
import {Container} from "react-bootstrap";
import CustModal from "../component/cust-modal";
import {useEffect, useState} from "react";
import {InsuranceListSample} from "../utils/sample-data/sample";
import baseAxios from "../utils/cust-axios";


export default function InsuranceList() {

    const [showModal, setShowModal] = useState(false)
    const [insId, setInsId] = useState("");
    const [list, setList] = useState([]);

    const listProps = {
        showModal,
        setShowModal,
        insId
    }
    useEffect(() => {
            try {
                async function request(){
                    const response = await baseAxios.get("/insurance/all");
                    // setList[response.data];
                }
            }
            catch(e){
                    console.log(e)
                }}, [])
const createModal = (event) => {
    setShowModal(true)
    setInsId(event.currentTarget.childNodes[0].innerHTML)
}

return <>
    <Container>
        <CustTable _head={InsuranceListSample().head} _body={InsuranceListSample().body} _rowAction={createModal}
                   _modalProps={listProps}/>
    </Container>
</>
}