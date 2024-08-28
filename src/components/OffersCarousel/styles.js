import styled from "styled-components";
import { Button } from '../../components'

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #ff0000;
        color: #EFEFEF;
        border: none;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #ff0000;
        background-color: #EFEFEF;
        color: #ff0000;
    }

    .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #EFEFEF;
    }
`

export const OfferImg = styled.img`

`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    p{
        color: #424242;
        font-size: 18px;
        line-height: 120%;
        font-weight: bold;
    }
`

export const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`

export const ButtonStyle = styled(Button)`
&:hover{
    color: #f6ff00;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23F6FF00FF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
border-radius: 8px;
}
`