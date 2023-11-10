"use client";
import { lusitana } from "@/app/ui/fonts";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function TowingGarageDetails({ errors }: any) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
        Towing service and garage
      </h1>
      {/* Did you call the Police */}
      <div className="mb-4">
        <label
          htmlFor="towingService"
          className="mb-2 block text-sm font-medium"
        >
          Do you need towing service
        </label>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="no"
                name="towingService"
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
                name="towingService"
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
        {errors?.towingService ? (
          <div
            id="towingService-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors.towingService.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
