import React from 'react';
import { makeStyles } from '@mui/styles';
import Close from '@material-ui/icons/Close';
import { mediumGray } from '../../GLOBALS';
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            marginTop: '10px',
        }),
        dropdownRoot: () => ({
            width: '100px !important',
        }),
    }
});

const AddItemPanel = (props) => {
    const classes = useStyles(props);
    const {options, onAdd, onClose, itemName} = props;

    const renderMenuItems = () => {
        return options?.map(x => {
            return (
                <MenuItem value={x}>
                {x.name}
                </MenuItem>
            )
        })
    }

    return (
        <div className={classes.root}>
            <Close style={{color: mediumGray, cursor: 'pointer', verticalAlign: 'bottom', paddingBottom: '4px', marginRight: '5px'}} onClick={onClose} />
            <FormControl>
            <InputLabel variant="standard">
                {`Add ${itemName || 'Item'}`}
            </InputLabel>
                <Select
                    onChange={onAdd}
                    classes={{ root: classes.dropdownRoot}}
                    fullWidth
                >
                {renderMenuItems()}
                </Select>
            </FormControl>
        </div>
    );
};

export default AddItemPanel; 