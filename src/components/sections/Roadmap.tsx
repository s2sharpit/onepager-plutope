import { Section, Subtle, Title } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

interface RInterface {
  yr: number;
  p: {
    q: string;
  }[];
}
[];

const roadmapData = [
  {
    yr: 2022,
    p: [
      {q: "Conceptualization and planning of non-custodial wallet."},
      {q: "Launch landing page, hire developers and staff."},
      {q: "Design infrastructure and UI/UX, launch waitlist program."},
      {q: "Build Bolt network for connecting to various blockchain networks."},
    ],
  },
  {
    yr: 2023,
    p: [
      {q: "Launch multi-chain lightning network for faster transactions."},
      {q: "Integrate with debit card providers, forge partnerships, launch debit card, announce beta testing."},
      {q: "Explore forex trading capabilities, launch official wallet."},
      {q: "Launch Scan and Pay feature using NFC technology, launch official token."},
    ],
  },
];

export default function Roadmap() {
  let toggle = true;

  function Card({ data }: { data: RInterface }) {
    toggle = !toggle;
    return (
      <div className="group grid md:grid-cols-[1fr_max-content_1fr] gap-2 gap-x-6">
        <div className={`${toggle && "hidden"} max-md:hidden`}></div>
        <div className={`${toggle && "md:order-last"} max-md:`}>
          <span className="inline-block h-[13px] w-[13px] bg-neutral-500 rounded-full max-md:hidden"></span>
          <div className="w-[1px] h-full bg-neutral-500 -translate-y-2 translate-x-[6px]"></div>
        </div>
        <div>
          <Subtle
            className={`${toggle ? "md:text-right" : "md:text-left"} text-white mb-4`}
          >
            {data.yr}
          </Subtle>
          <ul className="list-disc grid justify-center max-w-6xl gap-x-20 items-center text-neutral-300 text-lg">
            {data.p.map((d, i) => (
              <li key={i} className="flex items-center py-2 space-x-4 xl:py-3">
                <span className="inline-block w-2 h-2 min-w-fit bg-white rounded-full"></span>
                <span className="max-w-sm">{d.q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <Section className="relative">
      <Image
        src={"/assets/bitcoin-icon.png"}
        width={120}
        height={120}
        alt=""
        className="absolute -left-12 -top-4"
      />
      <Image
        src={"/assets/bitcoin-green.png"}
        width={120}
        height={120}
        alt=""
        className="absolute -right-12 bottom-8"
      />
      <Title>Roadmap</Title>
      <div className="max-w-2xl">
        {roadmapData.map((data) => (
          <Card key={data.yr} data={data} />
        ))}
      </div>
    </Section>
  );
}
