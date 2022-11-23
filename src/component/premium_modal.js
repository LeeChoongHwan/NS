import {Button, Modal} from "react-bootstrap";

export default function PremiumModal({_show, _setShow,_signUp, _premium}){

    const handleClose = () => {
        _setShow(false)
    }

    return (
        <Modal show={_show} onHide={handleClose}
               backdrop="static"
               keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>보험료 조회</Modal.Title>
            </Modal.Header>
            <Modal.Body> 조회된 귀하의 보험료는 {_premium}원 입니다. </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                <Button variant="primary" onClick={_signUp}>
                    가입
                </Button>
            </Modal.Footer>
        </Modal>
    )
}