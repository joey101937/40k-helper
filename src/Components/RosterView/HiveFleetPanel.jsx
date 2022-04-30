import React from 'react';
import { makeStyles } from '@mui/styles';
import { darkGray } from '../../GLOBALS';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import * as fleets from '../../fleets';

const useStyles = makeStyles((theme) => {
    return {
        wrapper: () => ({
        }),
        root: (props) => ({
            background: darkGray,
            textAlign: 'center',
            minHeight: '40px',
            width: '150px',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingTop: '10px',
            marginTop: '15px',
        }),
        inputLabelRoot: () => ({
            color: 'white !important',
            verticalAlign: 'middle',
        }),
    }
});

const HiveFleetPanel = (props) => {
    const classes = useStyles(props);
    const { currentHiveFleet, setCurrentHiveFleet } = props;
    return (
        <div className={classes.wrapper}>
            <div className={classes.root}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentHiveFleet}
                        label="Hive Fleet"
                        onChange={({ target: { value }}) => setCurrentHiveFleet(value)}
                        classes={{ select: classes.inputLabelRoot, icon: classes.inputLabelRoot}}
                    >
                        {Object.values(fleets).map(x => {
                            return (
                                <MenuItem value={x.key}>
                                    <b>{x.name}</b>
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default HiveFleetPanel; 