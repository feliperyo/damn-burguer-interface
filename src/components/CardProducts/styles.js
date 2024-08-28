import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.div`
background-color: #fff;
box-shadow: 0px 30px 60px rgba(57,57,57,0.1);
border-radius: 30px;
display: flex;
gap: 12px;
padding: 16px;
width: max-content;

div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`

export const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 10px;
`

export const ProductName = styled.p`
font-size: 16px;
line-height: 19px;
color: #000;
width: 150px;
`

export const ProductPrice = styled.p`
font-size: 18px;
line-height: 21px;
font-weight: 500;
color: #000;
margin-top: 30px;
`

export const ButtonStyle = styled(Button)`
&:hover{
   border-radius: 20px;
}
`