import Form from 'react-bootstrap/Form';

export default function  CustFormControl({props}){
    return <Form.Group >
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} />
        {/*<Form.Control.Feedback type="invalid">{props.feedback}</Form.Control.Feedback>*/}
        {/*    TODO error message 처리를 어떻게 할 지 ?*/}
    </Form.Group>
}