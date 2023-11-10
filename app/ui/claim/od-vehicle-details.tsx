"use client";
import { lusitana } from "@/app/ui/fonts";
import VehicleDetails from "./vehicle-details";

export default function ODVehicleDetails({ errors }: any) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
        O.D. Vehicle Details
      </h1>
      <VehicleDetails particular="O.D." errors={errors} />
    </div>
  );
}
