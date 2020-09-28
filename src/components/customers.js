import React, { Component } from 'react';
import api from "../services/api";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class customers extends Component {

    state = {
        customers: [],
    }

    async componentDidMount() {
        const response = await api.get('customer');
        this.setState({ customers: response.data.CustomerRegistration });
    }


    render(){
        const { customers } = this.state
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });

        return (
            <div>
                <div className="App">
                    <p className="App-intro">
                        <Link to="/">Ir para a página Home</Link>
                    </p>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="Lista de Clientes">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="left">customer</TableCell>
                                <TableCell align="right">typeCustomer</TableCell>
                                <TableCell align="right">CPF_CNPJ</TableCell>
                                <TableCell align="right">code</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell> {row.id} </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.customer}
                                    </TableCell>
                                    <TableCell align="right">{row.typeCustomer}</TableCell>
                                    <TableCell align="right">{row.CPF_CNPJ}</TableCell>
                                    <TableCell align="right">{row.code}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default customers;