export class Weather {
	constructor(
		public cityName: string,
		public country: string,
		public img: string,
		public temp: number,
		public description: string,
		public humidity: string,
		public pressure: string,
		public wspeed: string,
		public wdirection: string,
		public sunrise: string,
		public sunset: string,
		public cloud: string
	) {}
} 