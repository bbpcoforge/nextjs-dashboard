import { lusitana } from "@/app/ui/fonts";
import ClaimForm from "@/app/ui/claim/claim-form";

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} text-xl md:text-2xl`}>
        Claim Intimation
      </h1>
      <p className="mb-4 text-sm">Please Provide Your Details</p>
      <ClaimForm />
    </main>
  );
}
