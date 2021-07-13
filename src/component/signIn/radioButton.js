import React from 'react'
import { RadioGroup, Radio } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButton(props) {
  const { arr, handleChangeRadio } = props;

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="radios" name="customized-radios">
        {arr.map((a) => {
          return <FormControlLabel onChange={handleChangeRadio} key={a} value={a} control={<Radio />} label={a} />
        }
        )}
      </RadioGroup>
    </FormControl>
  )
}