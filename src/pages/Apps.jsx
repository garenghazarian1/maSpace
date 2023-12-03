import React from 'react'
import Calculator from '../calculator/Calculator'
import NumberGuessingGame from '../numberGuessingGame/NumberGuessingGame'
import MyCalendar from '../calender/MyCalendar'

export default function Apps() {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center gap-6 ml-2 md:ml-0">
      <Calculator />
      <NumberGuessingGame />
      <MyCalendar />
    </div>
);


}
