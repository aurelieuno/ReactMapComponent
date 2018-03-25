import React from "react";
import { Link } from 'react-router-dom';
import Button from './awesome-possum/lib/Button'
import HelpText from './awesome-possum/lib/HelpText'
import Row from './awesome-possum/lib/Row'
import Col from './awesome-possum/lib/Col'
import DatePicker from './awesome-possum/lib/DatePicker'
import Lipsum from './awesome-possum/lib/Lipsum'

const TimePicker = () => {
  const isFirefox = () => {
    return navigator.userAgent.indexOf('Firefox') > -1;
  }

  console.log(isFirefox());

    return (
      <div>
       <DatePicker isOpen label="Always open" />
      </div>
    )
}



module.exports = TimePicker;

