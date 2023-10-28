import { Box, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Data() {
    const [apiData,setApiData] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:5000/data').then(res =>{
            res.json().then(result => {
                setApiData(result);
            })
        })
    }, [])
   
    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell >English</StyledTableCell>
                                <StyledTableCell >Hindi</StyledTableCell>
                                <StyledTableCell >Maths</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {apiData.map((row, key) => (
                                <StyledTableRow key={key}>
                                    <StyledTableCell component="th" >
                                        {row.label}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.data[0]}</StyledTableCell>
                                    <StyledTableCell >{row.data[1]}</StyledTableCell>
                                    <StyledTableCell >{row.data[2]}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}