import React, {useState, useEffect} from 'react';
import {useAppSelector} from '@/store/hooks';
import {getAllResponse} from '@/store/features/flight/flight.feature';
import FilterCard from './FilterCard';
import getConfig from 'next/config';
import {
  convertNumberToTime,
  isTimeInRange
} from 'utils/utils';
import { UnifiedFlightResponse, SearchValue} from '@/store/features/flight/flights';
import FlightDetailExtension from '../FlightDetailExtension'

const config = getConfig();

interface BookCardProps {
  searchValue : SearchValue
}

const BookCard: React.FC<BookCardProps> = ({searchValue}) => {
  const allFlights = useAppSelector(getAllResponse);
  const [flightsData, setFlightsData] = useState<UnifiedFlightResponse[] | []>(
    []
  );

 
  const [selectedFlights, setSelectedFlights] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<{
    value: string;
    name: string;
  } | null>({
    value: '',
    name: ''
  });
  const [arrivalFilter, setArrivalFilter] = useState<number[]>([1, 48]);
  const [deptFilter, setDeptFilter] = useState<number[]>([1, 48]);

  useEffect(() => {
    if (allFlights) setFlightsData(allFlights);
  }, [allFlights]);

  useEffect(() => {
    handleFilter();
  }, [selectedFlights, selectedStops, arrivalFilter, deptFilter]);

  const handleFilter = () => {
    let filteredData = [...allFlights];

    // filter by fligh name
    if (selectedFlights.length) {
      filteredData = allFlights?.filter(flight =>
        selectedFlights.includes(flight.airlineName)
      );
    }

    // filtere by stop
    if (
      selectedStops?.value &&
      selectedStops?.value !== 'Any number of stops'
    ) {
      filteredData = filteredData?.filter(
        flight =>
          flight.haveConnectingFlight &&
          flight.connectingFlights.length <= Number(selectedStops?.value) + 1
      );
    }

    // filter by time range
    filteredData = filteredData?.filter(
      flight =>
        isTimeInRange(
          flight.arrivalTime.substring(11, 16),
          convertNumberToTime(arrivalFilter[0]),
          convertNumberToTime(arrivalFilter[1])
        ) &&
        isTimeInRange(
          flight.departure.substring(11, 16),
          convertNumberToTime(deptFilter[0]),
          convertNumberToTime(deptFilter[1])
        )
    );

    setFlightsData(filteredData);
  };

  return (
    <>
      {/* filter section */}

      <FilterCard
        searchValue={searchValue}
        selectedFlights={selectedFlights}
        setSelectedFlights={setSelectedFlights}
        selectedStops={selectedStops}
        setSelectedStops={setSelectedStops}
        arrivalFilter={arrivalFilter}
        setArrivalFilter={setArrivalFilter}
        deptFilter={deptFilter}
        setDeptFilter={setDeptFilter}
      />
      <h6 className="font-bold">
        {flightsData?.length} flight{flightsData?.length > 1 ? '(s)' : ''}
      </h6>
      {/* /filter section */}

      {flightsData?.length ? (
        flightsData.map(flight => (
          <FlightDetailExtension key={Math.random()} flight={flight} />
        ))
      ) : (
        <h4 className="font-bold mt-10 flex items-center justify-center">
          no flights found
        </h4>
      )}
    </>
  );
};

export default BookCard;
