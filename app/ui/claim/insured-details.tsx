"use client";
import PersonalDetails from "./personal-details";
import { lusitana } from "@/app/ui/fonts";

export default function InsuredDetails({ errors }: any) {
  return (
    <>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
          Insured Details
        </h1>
        {/* Policy Number */}
        <div className="mb-4">
          <label
            htmlFor="policyNumber"
            className="mb-2 block text-sm font-medium"
          >
            Policy Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="policyNumber"
                name="policyNumber"
                type="number"
                step="0.01"
                placeholder="Enter your policy number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="policy-number-error"
              />
            </div>
          </div>
          {errors?.policyNumber ? (
            <div
              id="policyNumber-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {errors.policyNumber.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <PersonalDetails particular="policy holder" errors={errors} />
      </div>
    </>
  );
}
