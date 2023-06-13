import { Section, Title } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const data = [
  { p: "Exclusive Rewards" },
  { p: "Priority Access to card" },
  { p: "Bonuses in PLT Token" },
];
export default function EarlyPart() {
  return (
    <Section className="relative">
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

      <Title className="max-sm:max-w-xs justify-self-center">
        Early Participation Benefits
      </Title>
      <ul className="list-disc grid justify-center place-items-center max-w-6xl gap-x-20 items-center text-neutral-300 text-lg">
        {data.map((d, i) => (
          <li key={i} className="text-center py-2 space-x-4 xl:py-3">
            {d.p}
          </li>
        ))}
      </ul>

      <Link
        href={"https://plutope.io/"}
        target="_blank"
        className="mt-12 text-center text-3xl justify-self-center py-4 w-60 rounded-full bg-gradient-to-r from-purple-900 viapurple-700 to-blue-800"
      >
        Join us
      </Link>
    </Section>
  );
}
