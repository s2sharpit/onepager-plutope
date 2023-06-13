import { Section, Title } from "@/components/ui";
import Image from "next/image";

export default function OurInvesters() {
  return (
    <Section>
      <Title>Tokenomics</Title>
      <div className="grid grid-cols-3 gap-9 md:gap-x-16 place-items-center">
        <Investor heading="5%" para="Pre Seed" />
        <Investor heading="13.3%" para="Seed" />
        <Investor heading="6%" para="Strategic" />
        <Investor heading="5%" para="Public Sale" />
        <Investor heading="12%" para="Team" />
        <Investor heading="20%" para="Ecosystem Cashback" />
        <Investor heading="2.5%" para="Advisors" />
        <Investor heading="18.2%" para="Treasury Liquidity & Stacking" />
        <Investor heading="18%" para="Partnerships" />
      </div>
    </Section>
  );
}

function Investor({ heading, para }: { heading: string; para: string }) {
  return (
    <div className="bg-[url('../../public/assets/hexagon.png')] bg-no-repeat bg-center bg-contain w-[5.5rem] h-24 xs:w-[7rem] xs:h-[7.5rem] px-0.5 flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">{heading}</h1>
      <p className="flex items-center text-[0.6rem] xs:text-xs text-center h-8">
        {para}
      </p>
    </div>
  );
}

