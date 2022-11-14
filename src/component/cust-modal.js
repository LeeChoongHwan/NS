import {Button, Modal} from "react-bootstrap";
import CustTable from "./cust-table";
import {InsuranceListSample} from "../utils/sample-data/sample";
import {useNavigate} from "react-router-dom";


export default function CustModal({_show, _handleShow, _id}) {

    // 
    //  TODO axios를 통해서 정보를 받아와서 값을 채워준다. 보험 이름, 계약 기간, 납입 기간, 보장 항목 [이름, 설명, 금액    ]

    const navigate = useNavigate()

    const handleClose = () => {
        _handleShow(false)
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    return <Modal show={_show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>건강 보험 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* TODO CSS 생각 하기*/}
            <p> 
                계약기간 : 80년<br/>
                납입기간 : 40년
            </p>
            <h5>보장 항목</h5>
            <CustTable _body={InsuranceListSample().modalBody} _head={InsuranceListSample().modalHead}/>

        </Modal.Body>
        <Modal.Footer>
            {/*TODO 가입 버튼 클릭 시 입력 form으로 이동하기*/}
            <Button variant="danger" onClick={handleClose}>
                취소
            </Button>
            <Button variant="primary" onClick={handleSignUp}>
                가입
            </Button>
        </Modal.Footer>
    </Modal>
}