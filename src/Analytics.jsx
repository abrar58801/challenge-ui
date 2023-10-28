import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { BarChart}  from '@mui/x-charts';
import React from "react";
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function Analytics() {
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
            <Box className="chart_main" component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Hindi', 'English', 'Maths'] }]}
                    series={apiData}
                    width={700}
                    height={400}
                />
            </Box>
        </>
    );
}