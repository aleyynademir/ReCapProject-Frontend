export interface RentalDetail{
    rentalId?:number;
    carId:number;
    userId?:number;
    modelYear:string;
    brandName:string;
    unitPrice:number;
    firstName:string;
    lastName:string;
    rentDate:Date;
    returnDate?:Date;
}