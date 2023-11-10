"use client";
import { formatIDCamelCase } from "@/app/lib/utils";

export default function VehicleDetails({ particular, errors }: any) {
  const idPreFix = formatIDCamelCase(particular);
  return (
    <>
      {/* Vehicle Type */}
      <div className="mb-4">
        <label
          htmlFor={`${idPreFix}VehicleType`}
          className="mb-2 block text-sm font-medium"
        >
          Vehicle Type
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id={`${idPreFix}VehicleType`}
              name={`${idPreFix}VehicleType`}
              type="text"
              step="0.01"
              placeholder={`Enter ${particular} vehicle type`}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="vehicle-type-error"
            />
          </div>
        </div>
        {errors && errors[`${idPreFix}VehicleType`] ? (
          <div
            id={`${idPreFix}VehicleType-error`}
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors[`${idPreFix}VehicleType`].map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      {/* Vehicle Number */}
      <div className="mb-4">
        <label
          htmlFor={`${idPreFix}VehicleNumber`}
          className="mb-2 block text-sm font-medium"
        >
          Vehicle Number
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id={`${idPreFix}VehicleNumber`}
              name={`${idPreFix}VehicleNumber`}
              type="text"
              step="0.01"
              placeholder={`Enter ${particular} vehicle number`}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="vehicle-number-error"
            />
          </div>
        </div>
        {errors && errors[`${idPreFix}VehicleNumber`] ? (
          <div
            id={`${idPreFix}VehicleNumber-error`}
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors[`${idPreFix}VehicleNumber`].map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      {/* Vehicle Place */}
      <div className="mb-4">
        <label
          htmlFor={`${idPreFix}VehiclePlace`}
          className="mb-2 block text-sm font-medium"
        >
          Vehicle Place
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id={`${idPreFix}VehiclePlace`}
              name={`${idPreFix}VehiclePlace`}
              type="text"
              step="0.01"
              placeholder={`Enter ${particular} vehicle place`}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="vehicle-place-error"
            />
          </div>
        </div>
        {errors && errors[`${idPreFix}VehiclePlace`] ? (
          <div
            id={`${idPreFix}VehiclePlace-error`}
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors[`${idPreFix}VehiclePlace`].map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
