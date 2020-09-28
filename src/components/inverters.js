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



class inverters extends Component {

    state = {
        inverter: [],
    }

    async componentDidMount() {
        const response = await api.get('inverters');
        this.setState({ inverter: response.data.Inverters });
    }


    render(){
        const { inverter } = this.state
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
                    <Table className={classes.table} aria-label="Lista de inversores">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="left">customer</TableCell>
                                <TableCell align="right">numberInverters</TableCell>
                                <TableCell align="right">inverter01</TableCell>
                                <TableCell align="right">inverter02</TableCell>
                                <TableCell align="right">inverter03</TableCell>
                                <TableCell align="right">inverter04</TableCell>
                                <TableCell align="right">inverter05</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inverter.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell> {row.id} </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.customer}
                                    </TableCell>
                                    <TableCell align="right">{row.numberInverters}</TableCell>
                                    <TableCell align="right">{row.inverter01}</TableCell>
                                    <TableCell align="right">{row.inverter02}</TableCell>
                                    <TableCell align="right">{row.inverter03}</TableCell>
                                    <TableCell align="right">{row.inverter04}</TableCell>
                                    <TableCell align="right">{row.inverter05}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default inverters;