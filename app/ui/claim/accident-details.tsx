"use client";
import { lusitana } from "@/app/ui/fonts";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function AccidentDetails({ errors }: any) {
  return (
    <>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
          Accident Details
        </h1>
        {/* Date & Time */}
        <div className="mb-4">
          <label htmlFor="dateTime" className="mb-2 block text-sm font-medium">
            Date & Time
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="dateTime"
                name="dateTime"
                type="text"
                step="0.01"
                placeholder="mm/dd/yyyy hh:mm"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="date-time-error"
              />
            </div>
          </div>
          {errors?.dateTime ? (
            <div
              id="dateTime-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {errors.dateTime.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        {/* Place of the Accident */}
        <div className="mb-4">
          <label
            htmlFor="placeOfAccident"
            className="mb-2 block text-sm font-medium"
          >
            Place of the Accident
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="placeOfAccident"
                name="placeOfAccident"
                type="text"
                step="0.01"
                placeholder="Enter place of accident"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="place-of-accident-error"
              />
            </div>
          </div>
          {errors?.placeOfAccident ? (
            <div
              id="placeOfAccident-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {errors.placeOfAccident.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        {/* Give brief description of the accident */}
        <div className="mb-4">
          <label
            htmlFor="descriptionOfAccident"
            className="mb-2 block text-sm font-medium"
          >
            Give brief description of the accident
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="descriptionOfAccident"
                name="descriptionOfAccident"
                placeholder="Enter brief description of the accident"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="description-of-accident-error"
              />
            </div>
          </div>
          {errors?.descriptionOfAccident ? (
            <div
              id="descriptionOfAccident-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {errors.descriptionOfAccident.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        {/* Did you call the Police */}
        <div className="mb-4">
          <label
            htmlFor="callThePolice"
            className="mb-2 block text-sm font-medium"
          >
            Did you call the Police
          </label>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="no"
                  name="callThePolice"
                  type="radio"
                  value="no"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="no"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300"
                >
                  No <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="yes"
                  name="callThePolice"
                  type="radio"
                  value="yes"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                />
                <label
                  htmlFor="yes"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  Yes <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          {errors?.callThePolice ? (
            <div
              id="callThePolice-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {errors.callThePolice.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
