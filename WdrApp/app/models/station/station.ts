export class Station {
  constructor (
    public StationName: string,
    public StationNumber: string,
    public StationRegNumber: string,
    public Location: string,
    public Indicator: string,
    public StationRegion: string,
    public Country: string,
    public Latitude: number,
    public Longitude: number,
    public Height: number,
    public Altitude: number,
    public StationStatus: string,
    public StationType: string,
    public Opened: string,
    public Closed: string,
    public SubmittedBy: string,
    public stationCategory: string
  ){}
}

export class Instrument {
  constructor (
    public InstrumentName:string,
    public StationName:string,
    public StationNumber:number,
    public DateRegistered:string,
    public ExpirationDate:string,
    public InstrumentCode:string,
    public Manufacturer:string,
    public Description:string,
    public SubmittedBy: string
  ){}
}

export class Element {
  constructor (
    public ElementName:string,
    public InstrumentName:string,
    public StationName:string,
    public StationNumber:number,
    public Abbrev:string,
    public Type:string,
    public Units:string,
    public Scale:string,
    public Limits:string,
    public Description:string,
    public SubmittedBy:string
  ){}
}
