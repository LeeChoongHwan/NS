import {Button, Modal, Table} from "react-bootstrap";
import {InsuranceListSample} from "../utils/sample-data/sample";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {baseAxios} from "../utils/cust-axios";
import {convertValues} from "../utils/convert-values";
import {handleError} from "../utils/exception/global-exception-handler";


export default function GuaranteeModal({_show, _handleShow, _id, _mode}) {
    const [insurance, setInsurance] = useState(Object)
    useEffect(() => {
        if (_show) {
            baseAxios().get(`/insurance/${_id}`)
                .then(response => {
                    setInsurance(response.data)
                }).catch(error =>  handleError(error))
        }
    },[_id])

    const navigate = useNavigate();
    const handleClose = () => {
        _handleShow(false)
    }

    const handleSignUp = () => {
        navigate("/signup",{
            state:{
                id : _id,
                type : insurance.type,
                mode : _mode
            }
        });
    }

    return <Modal show={_show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
            <Modal.Title>{insurance.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* TODO CSS 생각 하기*/}
            <p>
                계약기간 : {insurance.contractPeriod}년<br/>
                납입기간 : {insurance.paymentPeriod}년
            </p>
            <h5>보장 항목</h5>
            <Table striped bordered hover >
                <thead>
                <tr>
                    {convertValues(InsuranceListSample().modalHead).map(v=>{
                      return <th className={"table_cel_center"} >{v}</th>
           })}
              </tr>
               </thead>
                <tbody>
                {
                    insurance.guaranteeList !== undefined ?
                    insurance.guaranteeList.map(v=>{
                    return     <tr className={"hover_cursor"}>
                        {
                            convertValues(v).map(v=>{
                                return <td className={"table_cel_center"} >{v}</td>
                            })
                        }
                    </tr>
                }) : null}
                </tbody>
            </Table>


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