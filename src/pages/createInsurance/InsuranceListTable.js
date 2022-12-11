import { convertValues } from "../../utils/convert-values";
import {Table} from "react-bootstrap";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function InsuranceListTable({_head, _body, _rowAction}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                {convertValues(_head).map(v => {
                    return <th className={"table_cel_center"} key={v}>{v}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {

                _body.map(v => {
                    return <tr className={"hover_cursor"} onClick={_rowAction}>
                        {
                            convertValues(v).map(v => {
                                return <td className={"table_cel_center"}>{v}</td>
                            })
                        }
                    </tr>
                })}
                
            </tbody>
            
            </Table>
    );
}