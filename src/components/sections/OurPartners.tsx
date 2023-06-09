import React from "react";
import { Section, Title, Wrapper } from "@/components/ui";
import Image from "next/image";

export default function OurPartners() {
  return (
    <Section>
      <Title>Our Partners</Title>
      <div className="flex flex-wrap gap-8 max-w-screen-xl justify-center items-center bg-white rounded-xl px-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"
          >
            <Image src={`/partner/a${i}.png`} width={200} height={200} alt="" />
          </div>
        ))}
      </div>
    </Section>
  );
}
