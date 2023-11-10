"use client";
import { lusitana } from "@/app/ui/fonts";

export default function DocumentsUpload({ errors }: any) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
        Please attach required documents
      </h1>
      {/* R. C. Copy of the Vehicle */}
      <div className="mb-4">
        <label htmlFor="rcCopy" className="mb-2 block text-sm font-medium">
          R.C. Copy of the Vehicle
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="rcCopy"
              name="rcCopy"
              type="file"
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              aria-describedby="rc-copy-error"
            />
          </div>
        </div>
        {errors?.rcCopy ? (
          <div
            id="rcCopy-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors.rcCopy.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      {/* Driving License */}
      <div className="mb-4">
        <label
          htmlFor="drivingLicense"
          className="mb-2 block text-sm font-medium"
        >
          Driving License
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="drivingLicense"
              name="drivingLicense"
              type="file"
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              aria-describedby="driving-license-error"
            />
          </div>
        </div>
        {errors?.drivingLicense ? (
          <div
            id="drivingLicense-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors.drivingLicense.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      {/* Vehicle Photo */}
      <div className="mb-4">
        <label
          htmlFor="vehiclePhoto"
          className="mb-2 block text-sm font-medium"
        >
          Vehicle Photo
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="vehiclePhoto"
              name="vehiclePhoto"
              type="file"
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              aria-describedby="vehicle-photo-error"
            />
          </div>
        </div>
        {errors?.vehiclePhoto ? (
          <div
            id="vehiclePhoto-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors.vehiclePhoto.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
