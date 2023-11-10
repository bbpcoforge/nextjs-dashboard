"use client";
import { lusitana } from "@/app/ui/fonts";
import PersonalDetails from "./personal-details";

export default function DriverDetails({ errors }: any) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
        Driver Details
      </h1>
      <PersonalDetails particular="driver" errors={errors} />
    </div>
  );
}
