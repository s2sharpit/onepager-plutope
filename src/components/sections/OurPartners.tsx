import React from "react";
import { Section, Title, Wrapper } from "@/components/ui";
import Image from "next/image";

export default function OurPartners() {
  return (
    <Section>
      <Title>Our Partners</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 max-w-screen-lg place-items-center justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          // <div
          // className="flex items-center justify-center"
          // >
            <Image
              key={i}
              className="w-24 xs:w-28 md:w-fit md:h-8"
              src={`/partners/p${i}.png`}
              width={100}
              height={100}
              alt=""
            />
          // </div>
        ))}
      </div>
    </Section>
  );
}
