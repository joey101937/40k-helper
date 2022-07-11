import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Route, Routes } from 'react-router-dom';
import UnitStatsTablePanel from './UnitStatsTablePanel';
import TopBanner from './TopBanner';
import CreateRosterPage from './CreateRosterPage';
import { LOGIN_OBJ_KEY } from '../GLOBALS';
import { doLogin, registerUser, validateJwt } from '../actions/userActions';
import LoginModal from './LoginModal';
import LoadRosterPage from './LoadRosterPage';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'linear-gradient(180deg, rgba(80,80,80,1) 0%, rgba(92,56,56,1) 0%, rgba(135,45,45,1) 100%, rgba(150,150,150,1) 100%)',
            textAlign: 'center',
            minHeight: 'max(100vh, 1100px)',
            minWidth: '1100px',
            paddingTop: '20px',
        }),
    }
});

const BaseBackground = (props) => {
    const classes = useStyles(props);

    const [rerender, setRerender] = useState(false);

    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const cachedRoster = JSON.parse(localStorage.getItem('whHelperCachedRoster')) || [];

    const [currentUser, setCurrentUser] = useState();

    const [loadedRoster, setLoadedRoster] = useState(null);

    const [loadingLoginRequest, setLoadingLoginRequest] = useState(false);

    const onSetLoadedRoster = (r) => {
        setLoadedRoster(r);
        localStorage.setItem('whHelperLoadedRoster', JSON.stringify(r));
    }

    const logout = () => {
        localStorage.removeItem(LOGIN_OBJ_KEY);
        setCurrentUser(null);
    }

    const login = async (u, p) => {
        setLoadingLoginRequest(true);
        try {
            const res = await doLogin(u, p);
            if (res.jwt) {
                setCurrentUser(res);
            }
            console.log(res);
            setLoadingLoginRequest(false);
            return res;
        } catch (e) {
            console.log(e);
        }
        setLoadingLoginRequest(false);
    }

    const register = async (u, p) => {
        const res = await registerUser({
            username: u,
            password: p,
        });
        if (res.jwt) {
            setCurrentUser(res);
            setLoadingLoginRequest(false);
        }
        return res;
    }


    useEffect(() => {
        // attempt to login using cached login info
        const loginViaCache = async () => {
            let cachedLogin = localStorage.getItem(LOGIN_OBJ_KEY);
            if (!cachedLogin) return;
            cachedLogin = JSON.parse(cachedLogin);
            setLoadingLoginRequest(true);
            const stillValid = await validateJwt(cachedLogin.jwt);
            setLoadingLoginRequest(false);
            console.log(stillValid);
            if (stillValid) {
                setCurrentUser(cachedLogin);
            } else {
                localStorage.removeItem(LOGIN_OBJ_KEY);
            }
        };
        loginViaCache();
    }, [])

    useEffect(() => {
        const loadedRosterInCache = localStorage.getItem('whHelperLoadedRoster');
        if (loadedRosterInCache) {
            setLoadedRoster(JSON.parse(loadedRosterInCache));
        }
    }, [])

    return (
        <>
            <TopBanner loadingLoginRequest={loadingLoginRequest} currentUser={currentUser} openLoginModal={() => { setLoginModalOpen(true) }} doLogout={logout} />
            <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} onLogin={login} onRegister={register} />
            <div className={classes.root}>
                <Routes>
                    <Route path="/" element={<UnitStatsTablePanel />} />
                    <Route path="fullRoster" element={<UnitStatsTablePanel />} />
                    <Route path="load" element={<LoadRosterPage loadingLoginRequest={loadingLoginRequest} currentUser={currentUser} setLoadedRoster={onSetLoadedRoster} />} />
                    <Route path="cached" element={<UnitStatsTablePanel rosterUnits={cachedRoster?.content?.filter(x => x.selected)} defaultFleet={cachedRoster?.metadata?.fleet} />} />
                    <Route path="loaded" element={<UnitStatsTablePanel rosterUnits={loadedRoster?.content?.filter?.(x => x.selected)} defaultFleet={loadedRoster?.metadata?.fleet} />} />
                    <Route path="createRoster" element={<div><CreateRosterPage setLoadedRoster={onSetLoadedRoster} loginModalProps={{ onLogin: login, onRegister: register }} currentUser={currentUser} onCreateRoster={() => { setRerender(!rerender) }} /></div>} />
                </Routes>
            </div>
        </>
    );
};

export default BaseBackground; 