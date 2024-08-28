import styled from "styled-components";
import { Button } from "../../../components";
import BackgroundImage from '../../../assets/bg-login.png'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background:url('${BackgroundImage}');
background-size: cover;

form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #565656;
    border-radius: 10px;
    padding: 30px;

    h1{
        text-align: center;
        color: #fff;
    }
}
`

export const Label = styled.p`
color: #fff;
font-size: 14px;
margin-bottom: 3px;
`

export const Input = styled.input`
height: 40px;
border-radius: 8px;
box-shadow: 0px 4px 14px 0px #0000001A;
background: #fff;
border: none;
width: 100%;
min-width: 280px;
padding-left: 10px;
`

export const ButtonStyles = styled(Button)`
width: 100%;
border-radius: 8px;
margin-top: 25px;

&:hover{
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F6FF00FF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
`

export const LabelUpload = styled.label`
cursor: pointer;
display: flex;
align-items: center;
border: 1px dashed #fff;
border-radius: 5px;
padding: 10px;
color: #fff;
gap: 10px;

input{
    opacity: 0;
    width: 1px;
}
`