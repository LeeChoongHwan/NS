import {Form} from "react-bootstrap";
import React from "react";

export default function CustomFormNumberGroup({_name, _min, _max, _value, _setValue}){
    return <Form.Group className={"mb-3 mt-3"}>
        <Form.Control
            value={_value}
            onChange={(event)=>_setValue(event.target.value)}
            name={_name}
            required
            type="number"
            placeholder= {_name}
            min={_min}
            max={_max}
        />
        <Form.Control.Feedback>사용 가능합니다!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            {`${_min} ~ ${_max} 사이의 값을 입력해주세요`}
        </Form.Control.Feedback>
    </Form.Group>;
}