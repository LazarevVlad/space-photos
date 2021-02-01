import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { withStyles } from "@material-ui/core/styles";
import api from '../utils/Api';

function Pictures(props) {
  const {} = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // handleSubmit() {

  // }

  return (
    <div className="pictures block">
      <form className="pictures__form">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              variant="inline"
              format="yyyy/MM/dd"
              disableToolbars
              value={startDate}
              onChange={handleStartDateChange}
            />
            <KeyboardDatePicker
              variant="inline"
              format="yyyy/MM/dd"
              disableToolbars
              value={endDate}
              onChange={handleEndDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <button className="button pictures__button">Показать</button>
      </form>
    </div>
  )
}

export default Pictures;