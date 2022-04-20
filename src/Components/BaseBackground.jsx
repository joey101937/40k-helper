import React from 'react';
import { makeStyles } from '@mui/styles';
import { Route, Routes } from 'react-router-dom';
import ContentPanel from './ContentPanel';
import UnitStatsTablePanel from './UnitStatsTablePanel';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'linear-gradient(180deg, rgba(80,80,80,1) 0%, rgba(92,56,56,1) 0%, rgba(135,45,45,1) 100%, rgba(150,150,150,1) 100%)',
            textAlign: 'center',
            minHeight: '100vh',
            minWidth: '1000px',
            paddingTop: '20px',
        }),
    }
});

const BaseBackground = (props) => {
    const classes = useStyles(props);


    return (
        <div className={classes.root}>
            <Routes>
                <Route path="/" element={<UnitStatsTablePanel />} />
                <Route path="fullRoster" element={<UnitStatsTablePanel />} />
                <Route path="invoices" element={<div><ContentPanel /></div>} />
            </Routes>
        </div>
    );
};

export default BaseBackground; 