class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank += gallons;

    }

    drive(distance){
        let gallonsCons = 0;
        let milesPerm = this.tank*this.milesPerGallon;
        this.odometer += distance;

        gallonsCons = distance / this.milesPerGallon;
        if(gallonsCons <= this.tank){
            this.tank -= gallonsCons;
        }else{
            
            return ("I ran out of fuel at " + milesPerm + "miles!");
            this.tank = 0;
            this.odometer += milesPerm;
        }

    }

}