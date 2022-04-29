import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            background: 'rgba(255,255,50, .9)',
            textAlign: 'left',
            width: props.width || '1000px',
            display: 'inline-block',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }),
        header: (props) => ({
            width: "100%",
            whiteSpace: 'nowrap',
        }),
        row: (props) => ({
            width: '100%',
            whiteSpace: 'nowrap',
        }),
    }
});

const InteractiveTable = (props) => {
    const {
        headers,
        values
    } = props;
    const classes = useStyles(props);

    const renderHeaderCells = () => {
        const output = [];
        for(let i = 0; i < headers.length; i++) {
            const header = headers[i];
            output.push(<div style={{
                display: 'inline-block',
                borderTopLeftRadius: i === 0 ? '3px' : '0px',
                borderTopRightRadius: i === headers.length-1 ? '3px' : '0px',
                paddingLeft: header.textAlign === 'left' ? '10px' : 'auto',
                textAlign: header.textAlign || 'center',
                width: header.textAlign === 'left' ? `calc(${header.width} - 10px)` : header.width,
                fontSize: props.small ? '14pt' : '16pt',
                fontWeight: 'bold',
                background: 'rgb(90,90,90)',
                overflow: 'visible',
                height: '100%',
                paddingBottom: '4px',
            }}>
                {header.label || <>&nbsp;</>} 
            </div>);
        }
        return output;
    };

    const renderCellsForRow = (rowItem) => {
        const output = [];
        for(let i = 0; i < headers.length; i++) {
            const header = headers[i];
            output.push(<div style={{
                display: 'inline-block',
                textAlign: header.textAlign || 'center',
                paddingLeft: header.textAlign === 'left' ? '10px' : 'auto',
                width: header.textAlign === 'left' ? `calc(${header.width} - 10px)` : header.width,
                fontSize: props.small ? '12pt' : '14pt',
                fontWeight: 'normal',
                paddingTop: '4px',
                paddingBottom: '4px',
                background: 'rgb(200,200,200)',
                whiteSpace: 'normal',
                clear: 'both',
                verticalAlign: 'top',
                ...rowItem.cellStyles,
            }}>
                {rowItem[header.value] || <>&nbsp;</>}
            </div>);
        }
        return output;
    }

    const renderHeader = () => {
        return (
            <div className={classes.header}>
               {renderHeaderCells()}
            </div>
        )
    }

    const renderRows = () => {
        return values.map(item => {
            return (
                <div className={classes.row} style={{ ...item.cellStyles }} >
                    {renderCellsForRow(item)}
                </div>
            );
        })
    };

    return (
        <div className={classes.root}>
            {renderHeader()}
            {renderRows()}
        </div>
    );
};

export default InteractiveTable; 