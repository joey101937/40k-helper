import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { getMyRosters } from '../actions/rosterActions';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { red1 } from '../GLOBALS';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'rgba(220,220,220, .9)',
            textAlign: 'center',
            minHeight: '80px',
            width: '1000px',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }),
        titleBar: () => ({
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16pt',
            paddingBottom: '10px',
            borderBottom: '1px solid #555555',
            marginBottom: '20px',
            marginTop: '10px'
        }),
        body: () => ({

        }),
        rosterItem: () => ({
            marginBottom: '10px',
            borderRadius: '5px',
            background: 'rgb(180,180,180)',
            fontSize: '14pt',
            fontWeight: 'bold',
            padding: '5px',
            cursor: 'pointer',
            color: 'black',
        }),
        accountRosterItem: () => ({
            marginBottom: '10px',
            borderRadius: '5px',
            background: 'rgb(180,180,210)',
            fontSize: '14pt',
            fontWeight: 'bold',
            padding: '5px',
            cursor: 'pointer',
            color: 'black',
        }),
        noRotersMessage: () => ({
            marginBottom: '10px',
            fontSize: '14pt',
            fontWeight: 'bold',
            padding: '5px',
            color: 'black',
        })
    }
});

const LoadRosterPage = (props) => {
    const { currentUser, setLoadedRoster } = props;
    const cachedRoster = JSON.parse(localStorage.getItem('whHelperCachedRoster'));
    const [accountRosters, setAccountRosters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onLoadAccountRoster = (accountRoster) => {
        setLoadedRoster(accountRoster);
        navigate('/loaded');
    };

    const renderAccountRosters = () => {
        if (!accountRosters) return <div></div>;
        return accountRosters.map((ar) => {
            return (
                <div className={classes.accountRosterItem} onClick={() => onLoadAccountRoster(ar)}>
                    {ar.name}
                </div>
            )
        });
    }

    useEffect(() => {
        const getRosters = async () => {
            if (currentUser) {
                setIsLoading(true);
                const rosters = await getMyRosters();
                if (rosters?.length) {
                    setAccountRosters(rosters);
                }
                setIsLoading(false);
            } else {
                setAccountRosters([]);
            }
        };
        getRosters();
    }, [currentUser])
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <div className={classes.titleBar}>
                Load Roster
            </div>
            {!cachedRoster && !accountRosters.length && <div className={classes.noRotersMessage}>No Rosters to Load!</div>}
            <div>
                {cachedRoster && <Link style={{ textDecoration: 'none' }} to='/cached'><div className={classes.rosterItem} >Cached Roster</div></Link>}
            </div>
            {isLoading && <CircularProgress style={{ color: red1}} />}
            {renderAccountRosters()}
        </div>
    );
};

export default LoadRosterPage; 