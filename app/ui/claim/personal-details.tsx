"use client";
import { formatIDCamelCase } from "@/app/lib/utils";

export default function PersonalDetails({ particular, errors }: any) {
  const idPreFix = formatIDCamelCase(particular);
  return (
    <>
      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor={`${idPreFix}Name`}
          className="mb-2 block text-sm font-medium"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id={`${idPreFix}Name`}
              name={`${idPreFix}Name`}
              type="text"
              step="0.01"
              placeholder={`Enter ${particular} name`}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby={`${particular}-name-error`}
            />
          </div>
        </div>
        {errors && errors[`${idPreFix}Name`] ? (
          <div
            id={`${idPreFix}-name-error`}
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors[`${idPreFix}Name`].map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      {/* Phone Number */}
      <div className="mb-4">
        <label
          htmlFor={`${idPreFix}PhoneNumber`}
          className="mb-2 block text-sm font-medium"
        >
          Phone Number
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id={`${idPreFix}PhoneNumber`}
              name={`${idPreFix}PhoneNumber`}
              type="number"
              step="0.01"
              placeholder={`Enter ${particular}'s phone number`}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="phone-number-error"
            />
          </div>
        </div>
        {errors && errors[`${idPreFix}PhoneNumber`] ? (
          <div
            id={`${idPreFix}PhoneNumber-error`}
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors[`${idPreFix}PhoneNumber`].map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      {/* Address */}
      <div className="mb-4">
        <label
          htmlFor={`${idPreFix}Address`}
          className="mb-2 block text-sm font-medium"
        >
          Address
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <textarea
              id={`${idPreFix}Address`}
              name={`${idPreFix}Address`}
              placeholder={`Enter ${particular}'s address`}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="address-error"
            />
          </div>
        </div>
        {errors && errors[`${idPreFix}Address`] ? (
          <div
            id={`${idPreFix}Address-error`}
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {errors[`${idPreFix}Address`].map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
