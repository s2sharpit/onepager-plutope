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
      {q: "Q1:Conceptualization and planning of non-custodial wallet."},
      {q: "Q2:Launch landing page, hire developers and staff."},
      {q: "Q3:Design infrastructure and UI/UX, launch waitlist program."},
      {q: "Q4:Build Bolt network for connecting to various blockchain networks."},
    ],
  },
  {
    yr: 2023,
    p: [
      {q: "Q1:Launch multi-chain lightning network for faster transactions."},
      {q: "Q2:Integrate with debit card providers, forge partnerships, launch debit card, announce beta testing."},
      {q: "Q3:Explore forex trading capabilities, launch official wallet."},
      {q: "Q4:Launch Scan and Pay feature using NFC technology, launch official token."},
    ],
  },
];

export default function Roadmap() {
  let toggle = true;

  function Card({ data }: { data: RInterface }) {
    toggle = !toggle;
    return (
      <div className="group grid grid-cols-[1fr_max-content_1fr] gap-2 gap-x-6 ">
        <div className={`${toggle && "hidden"}`}></div>
        <div className={`${toggle && "order-last"}`}>
          <span className="inline-block h-[13px] w-[13px] bg-neutral-500 rounded-full"></span>
          <div className="w-[1px] h-full bg-neutral-500 -translate-y-2 translate-x-[6px]"></div>
        </div>
        <div>
          <Subtle
            className={`${toggle ? "text-right" : "text-left"} text-white mb-4`}
          >
            {data.yr}
          </Subtle>
          <ul className="list-disc grid justify-center max-w-6xl gap-x-20 items-center text-neutral-300 text-lg">
            {data.p.map((d, i) => (
              <li key={i} className="flex items-center py-2 space-x-4 xl:py-3">
                <span className="max-w-sm max-md:text-xs">{d.q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <Section className="relative pt-24">
      <Image
        src={"/assets/bitcoin-icon.png"}
        width={180}
        height={180}
        alt=""
        className="absolute -left-20 -top-4"
      />
      <Image
        src={"/assets/bitcoin-green.png"}
        width={180}
        height={180}
        alt=""
        className="absolute -right-20 -bottom-8"
      />
      <Title className="pb-2">Roadmap</Title>
      <Title className="font-extralight">Horizontal Scale</Title>
      <div className="max-w-2xl">
        {roadmapData.map((data) => (
          <Card key={data.yr} data={data} />
        ))}
      </div>
    </Section>
  );
}
