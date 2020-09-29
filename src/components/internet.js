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



class cleanings extends Component {
    constructor() {
        super();
        this.state = {
            internets: [],
            itensPage: [],
            page: [],
        }
    }

    async componentDidMount() {
        const response = await api.get('internet');
        this.setState({ internets: response.data.InternetPassword });
        this.setState({page: 0})
        this.setState({itensPage: 10})
    }


    render(){
        const theme = createMuiTheme({
            palette: {
                type: 'dark',
            },
        });
        const { internets, page, itensPage } = this.state
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
                    <Table className={classes.table} aria-label="Lista de senhas Internet">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="left">customer</TableCell>
                                <TableCell align="right">ssid</TableCell>
                                <TableCell align="right">password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {internets.slice(page * itensPage, page * itensPage + itensPage).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell> {row.id} </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.customer}
                                    </TableCell>
                                    <TableCell align="right">{row.ssid}</TableCell>
                                    <TableCell align="right">{row.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 15, 20, 25, 50,100]}
                    component="div"
                    count={internets.length}
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

export default cleanings;