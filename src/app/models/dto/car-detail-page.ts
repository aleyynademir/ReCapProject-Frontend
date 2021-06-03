import { CarImage } from "../entities/car-image";
import { CarDetail } from "./car-detail";

export interface CarDetailPage{
   car:CarDetail,
   carImages:CarImage[]
}