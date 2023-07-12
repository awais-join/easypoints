export interface UnifiedConnectingFlight {
  departure: string;
  arrivalTime: string;
  duration: number;
  layoverTimeAfterFlight: number;
  bookingClass: string;
  cabinClass: string;
  origin: string;
  destination: string;
  flightNumber: string;
  operatedBy?: string;
  aircraft: string;
}

export enum MoneyType {
  MILES = 'MILES',
  HARD_CASH = 'HARD_CASH'
}

export interface TotalRequiredMoneyType {
  moneyType: MoneyType;
  amount: number;
  currency?: string;
}

export interface UnifiedFlightFare {
  totalRequiredMoneyType: TotalRequiredMoneyType[];
  cabinClass?: string;
  bookingClass?: string;
}

export interface UnifiedFlightResponse {
  imageUrl?: string;
  airlineName: string;
  departure: string;
  arrivalTime: string;
  duration: number;
  origin: string;
  destination: string;
  flightNumber: string;
  operatedBy?: string;
  aircraft: string;
  haveConnectingFlight: boolean;
  connectingFlights: UnifiedConnectingFlight[];
  flightFares: UnifiedFlightFare[];
}

export interface Response {
  result: UnifiedFlightResponse[];
  logLines: string[];
}

export interface Airport {
  airportCode: string;
  code: string;
  airportName: string;
  countryCode: string;
  countryName: string;
  country: string;
  cityName: string;
  city: string;
}

interface FlightResponse {
  responses: UnifiedFlightResponse[];
  airports: Airport[];
}

export interface ListItem {
  name: string;
  value: string;
}

export interface SearchValue {
  from: Airport | null;
  to: Airport | null;
  departureDate: string;
  flightClass: string;
  roundTrip: string;
}
