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



class cleanings extends Component {

    state = {
        passwords: [],
    }

    async componentDidMount() {
        const response = await api.get('passwords');
        this.setState({ passwords: response.data.AccessPasswords });
    }


    render(){
        const { passwords } = this.state
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
                    <Table className={classes.table} aria-label="Lista de senhas Internet">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="left">customer</TableCell>
                                <TableCell align="right">portal</TableCell>
                                <TableCell align="right">user</TableCell>
                                <TableCell align="right">password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {passwords.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell> {row.id} </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.customer}
                                    </TableCell>
                                    <TableCell align="right">{row.portal}</TableCell>
                                    <TableCell align="right">{row.user}</TableCell>
                                    <TableCell align="right">{row.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default cleanings;