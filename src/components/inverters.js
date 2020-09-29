import React, { Component } from 'react';
import api from "../services/api";
import { Link } from 'react-router-dom';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";


class inverters extends Component {
    constructor() {
        super();
        this.state = {
            inverter: [],
            itensPage: [],
            page: [],
        }
    }

    async componentDidMount() {
        const response = await api.get('inverters');
        this.setState({ inverter: response.data.Inverters });
        this.setState({page: 0})
        this.setState({itensPage: 10})
    }


    render(){
        const theme = createMuiTheme({
            palette: {
                type: 'dark',
            },
        });
        const { inverter, page, itensPage } = this.state
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });

        const handleChangePage = (event, newPage) => {
            this.setState({ page: newPage});
        };

        const handleChangeRowsPerPage = (event) => {
            this.setState({ itensPage: +event.target.value});
            this.setState({page: 0})
        };

        return (
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <div>
                        <h2 align='center'>
                            <Link to="/">Ir para a página Home</Link>
                        </h2>
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
                            {inverter.slice(page * itensPage, page * itensPage + itensPage).map((row) => (
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
                <TablePagination
                    rowsPerPageOptions={[10, 15, 20, 25, 50,100]}
                    component="div"
                    count={inverter.length}
                    rowsPerPage={itensPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
            </ThemeProvider>
        );
    }
}

export default inverters;