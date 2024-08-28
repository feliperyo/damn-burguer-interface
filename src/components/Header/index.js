import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useUser } from "../../hooks/UserContext";

import Cart from '../../assets/cart-header.svg'
import Person from '../../assets/person-header.png'

import { Container, ContainerLeft, PageLink, ContainerRight, Line, ContainerText, PageLinkExit } from "./styles";

export function Header() {
    const { logout, userData } = useUser()

    const {
        push,
        location: { pathname }
    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}