export interface GeoData {
  country: string;
  cc: string;
  ip: string;
  as: number;
  ss: string;
  org: string;
  cli: string;
}

export type LogsGeoData = Partial<GeoData>;
