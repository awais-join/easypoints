import React from 'react';
import Slider from 'rc-slider';
import { getTimeForSlider } from '../../utils/utils';


interface TimeSliderProps {
  arrivalFilter: [number, number];
  setArrivalFilter: React.Dispatch<React.SetStateAction<[number, number]>>;
  deptFilter: [number, number];
  setDeptFilter: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const TimeSlider: React.FC<TimeSliderProps> = ({
  arrivalFilter,
  setArrivalFilter,
  deptFilter,
  setDeptFilter
}) => {

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
          onChange={(value: [number, number]) => setArrivalFilter(value)}

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
          onChange={(value: [number, number]) => setDeptFilter(value)}
        />
      </li>
    </ul>
  );
};

export default TimeSlider;
