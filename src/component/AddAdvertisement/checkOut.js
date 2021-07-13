import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Review from './review';
import Home from '../home';
import KindApartment from './kindApartment';


const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
        flexDirection: "row-reverse",
        // direction: "rtl",
        },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['סוג הנכס', 'כתובת הנכס', 'על הנכס', 'תשלומים תאריכים ועוד', 'תמונות וסרטונים', 'פרטים ליצירת קשר', 'סיום פרסום'];
const list = [
    {
        title: 'מכירה',
        buttonText: 'בחר',
        buttonVariant: 'contained',
    },
    {
        title: 'השכרה',
        buttonText: 'בחר',
        buttonVariant: 'contained',
    },
    {
        title: 'דירת שותפים',
        buttonText: 'בחר',
        buttonVariant: 'contained',
    },
    {
        title: 'מסחרי',
        buttonText: 'בחר',
        buttonVariant: 'contained',
    }
];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <KindApartment list={list} />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        case 3:
            return <AddressForm />;
        case 4:
            return <PaymentForm />;
        case 5:
            return <Review />;
        case 6:
            return <Review />;
        default:
            return <Home />;
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        הוספת נכס
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                </Typography>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'סיום' : 'הבא'}
                                        </Button>
                                        {activeStep !== steps.length && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                הקודם
                                            </Button>
                                        )}
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}
