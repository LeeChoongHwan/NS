import CustTable from "../component/cust-table";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {InsuranceListSample} from "../utils/sample-data/sample";
import {baseAxios} from "../utils/cust-axios";
import {insurance_all} from "../utils/url";
import {useLocation} from "react-router-dom";


export default function InsuranceList() {

    const [showModal, setShowModal] = useState(false)
    const [insId, setInsId] = useState("");
    const [list, setList] = useState([]);
    const [mode, setMode] = useState();
    const location = useLocation();


    const listProps = {
        showModal,
        setShowModal,
        insId,

    }
    useEffect(() => {

        baseAxios().get(insurance_all())
            .then(function (response) {
                setList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        if(location.state.mode!== null)
            setMode(location.state.mode);

    }, [])
const createModal = (event) => {
    setShowModal(true)
    setInsId(event.currentTarget.childNodes[0].innerHTML)
}


return <>
    <Container>
        <CustTable _head={InsuranceListSample().head} _body={list} _rowAction={createModal}
                   _mode={mode} _modalProps={listProps}/>
    </Container>
</>
}