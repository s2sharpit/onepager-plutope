import { Section, Title } from "@/components/ui";
import Image from "next/image";

const data = [
  { p: "Exclusive Rewards and Promotion." },
  { p: "Priority Access to Card Earlier Shipping." },
  { p: "Bonuses in PLT Token." },
  { p: "Reserve Highest Tier to be only exclusive for early adopter." },
];
export default function EarlyPart() {
  return (
    <Section className="relative ">
      <Image
        src={"/assets/Bitcoi--4.png"}
        width={120}
        height={120}
        alt=""
        className="absolute -left-12 -top-4"
      />
      <Image
        src={"/assets/thd.png"}
        width={120}
        height={120}
        alt=""
        className="absolute -right-12 -bottom-8"
      />

      <Title>Early Participation Benefits</Title>
      <ul className="list-disc pt-16 grid md:grid-cols-2 justify-center max-w-6xl gap-x-20 items-center text-neutral-300 text-lg">
        {data.map((d, i) => (
          <li key={i} className="flex items-center py-2 space-x-4 xl:py-3">
            <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
            <span className=" max-w-sm">{d.p}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
