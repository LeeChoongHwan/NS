import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Table,Container,Button} from "react-bootstrap";
import "./uw-select-insurance-type.css"

export default function CreateInsuranceList() {
    const navigate = useNavigate();

    const handleCreateHealth = () => {
        navigate("/createInsuranceHealth",{
            
        });
    }

    const handleCreateCar = () => {
      navigate("/createInsuranceCar",{
          
      });
  }

  const handleCreateFire = () => {
    navigate("/createInsuranceFire",{
        
    });
}
    
    return (
      <Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>보험종류</th>
          <th>보험코드</th>
          <th>보험이름</th>
          <th>보험설명</th>
          <th>개발일자</th>
          <th>판매시작일자</th>
          <th>판매인가상태</th>
          <th>담당자 이름</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>화재</td>
          <td>123</td>
          <td>화재1</td>
          <td>첫 화재보험</td>
          <td>2012/12/31</td>
          <td>2013/01/02</td>
          <td>인가 완료</td>
          <td>이충환</td>
        </tr>
        <tr>
          <td>건강</td>
          <td>456</td>
          <td>건강1</td>
          <td>첫 건강보험</td>
          <td>2013/01/05</td>
          <td>2013/01/05</td>
          <td>인가 완료</td>
          <td>양현종</td>
        </tr>
        <tr>
          <td>자동차</td>
          <td>789</td>
          <td>자동차1</td>
          <td>첫 자동차 보험</td>
          <td>2013/01/02</td>
          <td></td>
          <td>미승인</td>
          <td>김민상</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="primary" onClick={handleCreateHealth}>건강보험 개발</Button>{' '}
    <Button variant="primary" onClick={handleCreateCar}>자동차보험 개발</Button>{' '}
    <Button variant="primary" onClick={handleCreateFire}>화재보험 개발</Button>{' '}
    </Container>
    );
}
