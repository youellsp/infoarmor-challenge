import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {TextField} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '200px'
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
    block: {
        display: 'block'
    }
}));

export default function CoconutCalculator(props) {
    const { setCoconuts } = props;
    const classes = useStyles();
    const [values, setValues] = React.useState({
        numberOfMen: 5,
        monkeysShare: 1
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value ? parseInt(event.target.value) : '' });
    };

    useEffect(() => {
        const { monkeysShare, numberOfMen} = values;
        if(typeof monkeysShare === 'number' && typeof numberOfMen === 'number') {
            const numOfIterations = numberOfMen + 1;
            const givenToMonkey = monkeysShare * (numberOfMen - 1);
            setCoconuts(Math.pow(numberOfMen, numOfIterations) - givenToMonkey);
        } else {
            setCoconuts('');
        }
    }, [setCoconuts, values]);

    return (
        <div className={classes.root}>
            <div className={classes.block}>
                <FormControl className={classes.formControl}>
                    <TextField
                        label="Number of Men"
                        variant="outlined"
                        type="number"
                        value={values.numberOfMen}
                        onChange={handleChange('numberOfMen')}
                    />
                </FormControl>
            </div>
            <div className={classes.block}>
                <FormControl className={classes.formControl}>
                    <TextField
                        label="Monkey's Share"
                        variant="outlined"
                        type="number"
                        value={values.monkeysShare}
                        onChange={handleChange('monkeysShare')}
                    />
                </FormControl>
            </div>
        </div>
    );
}
