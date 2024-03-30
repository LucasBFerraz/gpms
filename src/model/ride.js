class Ride {
    constructor(id, driver, passengers, origin, destination) {
        this.id = id;
        this.driver = driver;
        this.passengers = Array.from(passengers);
        this.origin = origin;
        this.destination = destination;
    }
    toJson() {
        return {
            id: this.id,
            driver: this.driver,
            passengers: this.passengers,
            origin: this.origin,
            destination: this.destination
        }
    }
}