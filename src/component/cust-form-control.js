import Form from 'react-bootstrap/Form';

export default function  CustFormControl({props}){
    return <Form.Group controlId="validationCustom01">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control required
                      name={props.name}
                      type={props.type}
                      placeholder={props.placeholder}
                      pattern={props.pattern}
        />
        <Form.Control.Feedback type>{props.valid}</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">{props.invalid}</Form.Control.Feedback>
    </Form.Group>
}