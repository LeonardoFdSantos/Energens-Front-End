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
        irradiation: [],
    }

    async componentDidMount() {
        const response = await api.get('irradiation');
        this.setState({ irradiation: response.data.LocalIrradiation });
    }


    render(){
        const { irradiation } = this.state
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
                                <TableCell>city</TableCell>
                                <TableCell>january</TableCell>
                                <TableCell>february</TableCell>
                                <TableCell>march</TableCell>
                                <TableCell>april</TableCell>
                                <TableCell>may</TableCell>
                                <TableCell>june</TableCell>
                                <TableCell>july</TableCell>
                                <TableCell>august</TableCell>
                                <TableCell>september</TableCell>
                                <TableCell>october</TableCell>
                                <TableCell>november</TableCell>
                                <TableCell>december</TableCell>
                                <TableCell>average</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {irradiation.map((row) => (
                                <TableRow key={row.city}>
                                    <TableCell> {row.city} </TableCell>
                                    <TableCell align="right">{row.january}</TableCell>
                                    <TableCell align="right">{row.february}</TableCell>
                                    <TableCell align="right">{row.march}</TableCell>
                                    <TableCell align="right">{row.april}</TableCell>
                                    <TableCell align="right">{row.may}</TableCell>
                                    <TableCell align="right">{row.june}</TableCell>
                                    <TableCell align="right">{row.july}</TableCell>
                                    <TableCell align="right">{row.august}</TableCell>
                                    <TableCell align="right">{row.september}</TableCell>
                                    <TableCell align="right">{row.october}</TableCell>
                                    <TableCell align="right">{row.november}</TableCell>
                                    <TableCell align="right">{row.december}</TableCell>
                                    <TableCell align="right">{row.average}</TableCell>
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