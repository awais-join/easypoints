import React from 'react';
import Slider from 'rc-slider';

const TimeSlider = () => {
  return (
    <ul className="space-y-4">
      <li>
        <h6 className="text-base font-bold text-black capitalize mb-1">
          Arrival: (CDG)
        </h6>
        <h6 className="text-sm font-normal text-black50 mb-3">
          12:00am - 9:00pm
        </h6>
        <Slider
          range={true}
          className="w-full"
          min={0}
          max={24}
          defaultValue={[0, 24]}
        />
      </li>
      <li>
        <h6 className="text-base font-bold text-black capitalize mb-1">
          Departure: (JFK)
        </h6>
        <h6 className="text-sm font-normal text-black50 mb-3">
          1:00am - 10:00pm
        </h6>
        <Slider
          range={true}
          className="w-full"
          min={0}
          max={24}
          defaultValue={[0, 24]}
        />
      </li>
    </ul>
  );
};

export default TimeSlider;
