"use client";

import { useState, createElement } from "react";
import { FormFields } from "@/app/lib/definitions";

type Props = {
  formFields: FormFields[];
};

const ContactUs = ({ formFields }: Props) => {
  //const formflds = formFields.map(obj => ({ ...obj, value: '' }));
  const [formData, setFormData] = useState(formFields);
  const handleChange = (e: any) => {
    const updatedData = formData.map((data: FormFields) => {
      if (data.name == e.target.name) data.value = e.target.value;
      return data;
    });
    setFormData(updatedData);
  };
  const handleSubmit = (event: any) => {
    console.log("Form submitted: ", formData);
    event.preventDefault();
  };
  return (
    <div>
      Contact Us!!!
      <form onSubmit={handleSubmit}>
        {formData.map((props: FormFields) => (
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
                  value: props.value || "",
                  onChange: handleChange,
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
