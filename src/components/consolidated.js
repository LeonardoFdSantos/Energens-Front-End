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



class ListCostumer extends Component {

    state = {
        consolidated: [],
    }

    async componentDidMount() {
        const response = await api.get('consolidated');
        this.setState({ consolidated: response.data.Consolidated });
    }


    render(){
            const { consolidated } = this.state
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
                                    <TableCell align="right">projectNumber</TableCell>
                                    <TableCell align="right">modulesNumber</TableCell>
                                    <TableCell align="right">modulesPower</TableCell>
                                    <TableCell align="right">powerTotal</TableCell>
                                    <TableCell align="right">effectiveness</TableCell>
                                    <TableCell align="right">delivered</TableCell>
                                    <TableCell align="right">local</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {consolidated.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell> {row.id} </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.customer}
                                        </TableCell>
                                        <TableCell align="right">{row.projectNumber}</TableCell>
                                        <TableCell align="right">{row.modulesNumber}</TableCell>
                                        <TableCell align="right">{row.modulesPower}</TableCell>
                                        <TableCell align="right">{row.powerTotal}</TableCell>
                                        <TableCell align="right">{row.effectiveness}</TableCell>
                                        <TableCell align="right">{row.delivered}</TableCell>
                                        <TableCell align="right">{row.local}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
        }
}

export default ListCostumer;