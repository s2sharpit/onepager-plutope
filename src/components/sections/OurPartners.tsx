import React from "react";
import { Section, Title, Wrapper } from "@/components/ui";
import Image from "next/image";

export default function OurPartners() {
  return (
    <Section>
      <Title>Our Partners</Title>
      <div className="flex flex-wrap gap-12 max-w-screen-xl justify-center items-center px-2">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <Image
              className="w-24 xs:w-28 md:w-fit md:h-8"
              src={`/partners/p${i}.png`}
              width={100}
              height={100}
              alt=""
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
