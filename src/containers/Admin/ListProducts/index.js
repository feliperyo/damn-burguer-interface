import React, { useEffect, useState } from "react";

import { Container, Img, EditIconStyles } from "./styles";
import api from "../../../services/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

import formatCurrency from "../../../utils/formatCurrency";
import path from "../../../constants/paths";

export function ListProducts() {
    const [products, setProducts] = useState()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{ color: '#228B22' }} />
        }
        return <DisabledByDefaultIcon style={{ color: '#CC1717' }} />
    }

    function editProduct(product) {
        push(path.EditProduct, { product })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products &&
                            products.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{formatCurrency(product.price)}</TableCell>
                                    <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                    <TableCell align="center"><Img src={product.url} alt="imagem do produto" /></TableCell>
                                    <TableCell>
                                        <EditIconStyles onClick={() => editProduct(product)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts