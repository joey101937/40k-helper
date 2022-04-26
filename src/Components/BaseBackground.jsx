import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Route, Routes } from 'react-router-dom';
import UnitStatsTablePanel from './UnitStatsTablePanel';
import TopBanner from './TopBanner';
import CreateRosterPage from './CreateRosterPage';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'linear-gradient(180deg, rgba(80,80,80,1) 0%, rgba(92,56,56,1) 0%, rgba(135,45,45,1) 100%, rgba(150,150,150,1) 100%)',
            textAlign: 'center',
            minHeight: '100vh',
            minWidth: '1100px',
            paddingTop: '20px',
        }),
    }
});

const BaseBackground = (props) => {
    const classes = useStyles(props);

    const [rerender, setRerender] = useState(false);

    const cachedRoster = JSON.parse(localStorage.getItem('whHelperCachedRoster')) || [];

    return (
        <>
        <TopBanner />
        <div className={classes.root}>
            <Routes>
                <Route path="/" element={<UnitStatsTablePanel />} />
                <Route path="fullRoster" element={<UnitStatsTablePanel />} />
                <Route path="cached" element={<UnitStatsTablePanel rosterUnits={cachedRoster.filter(x => x.selected)} />} />
                <Route path="createRoster" element={<div><CreateRosterPage onCreateRoster={() => {setRerender(!rerender)}}/></div>} />
            </Routes>
        </div>
        </>
    );
};

export default BaseBackground; 