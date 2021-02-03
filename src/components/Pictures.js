import React, { useState } from 'react';
import moment from "moment";
import MomentUtils from "@date-io/moment";
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Card from "./Card";
import api from '../utils/Api';

function Pictures(props) {
  const { onCardClick } = props;
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [inputStartValue, setInputStartValue] = useState(moment().format("YYYY-MM-DD"));
  const [inputEndValue, setInputEndValue] = useState(moment().format("YYYY-MM-DD"));
  const [cards, setCards] = useState([]);
  const handleStartDateChange = (date, value) => {
    setStartDate(date);
    setInputStartValue(value);
  };
  const handleEndDateChange = (date, value) => {
    setEndDate(date);
    setInputEndValue(value);
  };
  const dateFormatter = str => {
    return str;
  };

  function handleSubmit(e) {
    e.preventDefault()

    api.getPictureForThePeriod(inputStartValue, inputEndValue)
    .then((res) => {
      console.log(res);
      setCards(res)
    })
    .catch((err) => console.log(`Ошибка ${err}`));
  }

  return (
    <div className="pictures block">
      <form className="pictures__form"
      onSubmit={handleSubmit}
      >
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <Grid container justify="space-around">
            <div className="pictures__input-container">
              <KeyboardDatePicker
                variant="inline"
                format="YYYY-MM-DD"
                value={startDate}
                inputValue={inputStartValue}
                onChange={handleStartDateChange}
                rifmFormatter={dateFormatter}
                animateYearScrolling="'true"
              />
            </div>
            <div className="pictures__input-container">
              <KeyboardDatePicker
                variant="inline"
                format="YYYY-MM-DD"
                value={endDate}
                inputValue={inputEndValue}
                onChange={handleEndDateChange}
                rifmFormatter={dateFormatter}
              />
            </div>
          </Grid>
        </MuiPickersUtilsProvider>

        <button className="button pictures__button">Показать</button>
      </form>
      <div className="pictures__grid">
        {cards.map((card, index) => 
          <Card
            card={card}
            key={index}
            onCardClick={onCardClick}
          />
        )}
      </div>
    </div>
  )
}

export default Pictures;