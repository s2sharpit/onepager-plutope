import { Section, Title } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const data = [
  { p: "1. Exclusive Rewards and Promotion." },
  { p: "2. Priority Access to Card Earlier Shipping." },
  { p: "3. Bonuses in PLT Token." },
  { p: "4. Reserve Highest Tier to be only exclusive for early adopter." },
];
export default function EarlyPart() {
  return (
    <Section className="relative ">
      <Image
        src={"/assets/Bitcoi--4.png"}
        width={180}
        height={180}
        alt=""
        className="absolute -left-20 -top-4"
      />
      <Image
        src={"/assets/thd.png"}
        width={180}
        height={180}
        alt=""
        className="absolute -right-20 bottom-0"
      />

      <Title className="max-w-xs">Early Participation Benefits</Title>
      <ol className=" grid justify-center place-items-center max-w-6xl gap-x-20 items-center text-neutral-300 text-lg">
        {data.map((d, i) => (
          <li key={i} className="text-center py-2 space-x-4 xl:py-3">
            {d.p}
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center bg-black justify-self-center py-4 px-8 rounded-full bg-gradient-to-r from-purple-900 viapurple-700 to-blue-800">Join us- All socials</div>
    </Section>
  );
}
