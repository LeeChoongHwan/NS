import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Table} from "react-bootstrap";
import "./uw-select-insurance-type.css"

export default function UWList() {
    const navigate = useNavigate();

    const handleUWInfo = () => {
        navigate("/uwListTable",{
            
        });
    }
    
    return (
        <Table striped>
      <thead>
        <tr>
          <th>계약 ID</th>
          <th>이름</th>
          <th>인수심사 상태</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={handleUWInfo}>
          <td>1</td>
          <td>이충환</td>
          <td>승인 대기</td>
        </tr>
        <tr onClick={handleUWInfo}>
          <td>2</td>
          <td>이종범</td>
          <td>승인 대기</td>
        </tr>
        <tr onClick={handleUWInfo}>
          <td>3</td>
          <td>김민규</td>
          <td>승인 대기</td>
        </tr>
      </tbody>
    </Table>
    );
}
