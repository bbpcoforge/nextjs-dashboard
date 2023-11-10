"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { createClaim } from "@/app/lib/actions";
import InsuredDetails from "@/app/ui/claim/insured-details";
import DriverDetails from "@/app/ui/claim/driver-details";
import ODVehicleDetails from "@/app/ui/claim/od-vehicle-details";
import TPVehicleDetails from "@/app/ui/claim/tp-vehicle-details";
import AccidentDetails from "@/app/ui/claim/accident-details";
import DocumentsUpload from "@/app/ui/claim/documents-upload";
import TowingGarageDetails from "@/app/ui/claim/towing-garage-details";
import { Button } from "@/app/ui/button";
import Steps from "@/app/ui/steps";

export default function ClaimForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createClaim, initialState);
  const [step, setStep] = useState(1);
  console.log(state);
  return (
    <form action={dispatch}>
      <div className=" grid gap-6">
        {/*
        <Steps
          listOfSteps={["1", "2", "3", "4", "5", "6"]}
          currentStep={step}
        />
  */}
        <div className={`${step === 1 ? "" : "hidden"}`}>
          <InsuredDetails error={state.errors} />
        </div>
        <div className={`${step === 2 ? "" : "hidden"}`}>
          <DriverDetails error={state.errors} />
        </div>
        <div className={`${step === 3 ? "" : "hidden"}`}>
          <ODVehicleDetails error={state.errors} />
        </div>
        <div className={`${step === 4 ? "" : "hidden"}`}>
          <TPVehicleDetails error={state.errors} />
        </div>
        <div className={`${step === 5 ? "" : "hidden"}`}>
          <AccidentDetails error={state.errors} />
        </div>
        <div className={`${step === 6 ? "" : "hidden"}`}>
          <DocumentsUpload error={state.errors} />
          <TowingGarageDetails error={state.errors} />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button
          className={`${step > 1 ? "" : "hidden"}`}
          onClick={() => setStep(step - 1)}
        >
          Previous
        </Button>
        <Button
          className={`${step < 6 ? "" : "hidden"}`}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
        <Button className={`${step === 6 ? "" : "hidden"}`} type="submit">
          Raise a claim
        </Button>
      </div>
    </form>
  );
}
