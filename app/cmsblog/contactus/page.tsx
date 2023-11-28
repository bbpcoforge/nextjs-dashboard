import { getContactusFormFromCms } from "@/app/lib/api";
import ContactUs from "@/app/ui/cmsblog/contact-us";
import AcmeLogo from "@/app/ui/acme-logo";

export default async function Page() {
  const formFields = await getContactusFormFromCms();
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-20">
        <AcmeLogo />
      </div>
      <div className="mt-4">
        <ContactUs formFields={formFields} />
      </div>
    </main>
  );
}
