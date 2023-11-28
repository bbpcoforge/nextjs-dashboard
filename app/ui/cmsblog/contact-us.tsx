"use client";

import { createElement } from "react";
import { useFormState } from "react-dom";
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
    <div>
      Contact Us!!!
      <form action={dispatch}>
        {formFields.map((props: FormFields) => (
          <div key={props.id}>
            {createElement(
              props.inputType,
              Object.assign(
                {},
                {
                  id: props.id,
                  type: props.type,
                  placeholder: props.placeholder,
                  name: props.name,
                  style: {
                    padding: "5px",
                    border: "solid 1px #ccc7c7",
                    "border-radius": "10px",
                    margin: "10px",
                  },
                }
              )
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ContactUs;
