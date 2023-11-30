"use client";

import { createElement } from "react";
import { useFormState } from "react-dom";
import { lusitana } from "@/app/ui/fonts";
import { createCustomerQuery } from "@/app/lib/actions";
import { FormFields } from "@/app/lib/definitions";

type Props = {
  formFields: FormFields[];
};

const ContactUs = ({ formFields }: Props) => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createCustomerQuery, initialState);
  console.log(state);
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <h1 className={`${lusitana.className} text-lg mb-4 md:text-xl`}>
        Contact us
      </h1>
      <form action={dispatch}>
        {formFields.map((props: FormFields) => (
          <div key={props.id} className="mb-4">
            {props.type !== "submit" && (
              <label
                htmlFor={props.id}
                className="mb-2 block text-sm font-medium"
              >
                {props.name}
              </label>
            )}
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                {createElement(
                  props.inputType,
                  Object.assign(
                    {},
                    {
                      id: props.id,
                      type: props.type,
                      placeholder: props.placeholder,
                      name: props.name,
                      className: `peer block rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 ${
                        props.type !== "submit"
                          ? "w-full"
                          : "p-2 bg-blue-500 text-cyan-50"
                      }`,
                    }
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ContactUs;
