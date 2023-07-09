import React from 'react';
import Slider from 'rc-slider';

const TimeSlider = ({
  arrivalFilter,
  setArrivalFilter,
  deptFilter,
  setDeptFilter
}) => {
  const getTimeForSlider = (number: number) => {
    const hours = Math.floor((number - 1) / 2);
    const minutes = number % 2 === 0 ? '30' : '00';
    const period = hours < 12 ? 'AM' : 'PM';
    const formattedHours =
      hours === 0 || hours === 12 ? '12' : (hours % 12).toString();

    return `${formattedHours}:${minutes} ${period}`;
  };

  return (
    <ul className="space-y-4">
      <li>
        <h6 className="text-base font-bold text-black capitalize mb-1">
          Arrival: (CDG)
        </h6>
        <h6 className="text-sm font-normal text-black50 mb-3">
          {getTimeForSlider(arrivalFilter[0])} -{' '}
          {getTimeForSlider(arrivalFilter[1])}
        </h6>
        <Slider
          range={true}
          className="w-full"
          min={1}
          max={48}
          value={arrivalFilter}
          onChange={value => setArrivalFilter(value)}
        />
      </li>
      <li>
        <h6 className="text-base font-bold text-black capitalize mb-1">
          Departure: (JFK)
        </h6>
        <h6 className="text-sm font-normal text-black50 mb-3">
          {getTimeForSlider(deptFilter[0])} - {getTimeForSlider(deptFilter[1])}
        </h6>
        <Slider
          range={true}
          className="w-full"
          min={1}
          max={48}
          value={deptFilter}
          onChange={value => setDeptFilter(value)}
        />
      </li>
    </ul>
  );
};

export default TimeSlider;
