import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>כתובת הנכס</Button>
        <Button>על הנכס</Button>
        <Button>תשלומים תאריכים ועוד</Button>
        <Button>תמונות וסרטונים</Button>
        <Button>פרטים ויצירת קשר</Button>
        <Button>סיום פרסום</Button>

      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button>כתובת הנכס</Button>
        <Button>על הנכס</Button>
        <Button>תשלומים תאריכים ועוד</Button>
        <Button>תמונות וסרטונים</Button>
        <Button>פרטים ויצירת קשר</Button>
        <Button>סיום פרסום</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
        <Button>כתובת הנכס</Button>
        <Button>על הנכס</Button>
        <Button>תשלומים תאריכים ועוד</Button>
        <Button>תמונות וסרטונים</Button>
        <Button>פרטים ויצירת קשר</Button>
        <Button>סיום פרסום</Button>
      </ButtonGroup>
    </div>
  );
}