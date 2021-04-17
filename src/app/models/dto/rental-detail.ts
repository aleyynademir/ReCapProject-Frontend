export interface RentalDetail{
    rentalId:number;
    carId:number;
    modelYear:string;
    brandName:string;
    unitPrice:number;
    firstName:string;
    lastName:string;
    rentDate:Date;
    returnDate?:Date;
}