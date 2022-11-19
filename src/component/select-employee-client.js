import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function SelectEmployeeClient() {

    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate("",{
            
        });
    }

    return (
        <Container className={"w-75"}>
            <div>
            <Button variant="primary" onClick={handleSignUp}>직원</Button>{' '}
            <Button variant="primary" onClick={handleSignUp}>고객</Button>{' '}
            </div>
        </Container>

    );
}
