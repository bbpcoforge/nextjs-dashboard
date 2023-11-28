import { getContactusFormFromCms } from "@/app/lib/api";
import ContactUs from "@/app/ui/cmsblog/contact-us";

export default async function Page() {
  const formFields = await getContactusFormFromCms();
  return (
    <>
      <ContactUs formFields={formFields} />
    </>
  );
}
