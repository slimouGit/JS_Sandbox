export class Car{
  constructor(public id: number, public brand: string, public horsePower: number){
    console.log("Constructor Car");

    this.getCarName();
  }

  getCarName(){
    console.log(this.brand + " getCarName()");
  }
}
