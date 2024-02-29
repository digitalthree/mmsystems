"use client";
import Seo from "@/app/components/Seo";

export default function Page() {
  const seo = {
    title: "Privacy Policy",
    description: "Puoi contattarci",
    url: "contattaci",
    index: false,
  };
  return (
    <>
      <Seo metadata={seo} />
      <div className="w-full h-[85vh] flex justify-center items-center">
        <h1>Privacy Policy</h1>
      </div>
    </>
  );
}
