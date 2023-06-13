import { Section, Title } from "@/components/ui";
import Image from "next/image";

const aData = [
  {
    img: 'f1',
    caption: 'Non-custodial Wallet',
  },
  {
    img: 'f2',
    caption: 'Ownership',
  },
  {
    img: 'f3',
    caption: 'Multi-Chain',
  },
  {
    img: 'f4',
    caption: 'Zero Knowledge',
  },
  {
    img: 'f5',
    caption: 'Lightning Fast',
  },
  {
    img: 'f6',
    caption: 'Swapping',
  },
  {
    img: 'f7',
    caption: 'API Keys',
  },
  {
    img: 'f8',
    caption: 'Ease of Use',
  },
  {
    img: 'f9',
    caption: 'Portfolio Tracking',
  },
]

export default function WhoWeAre() {
  return (
    <Section>
      <Title>Who We Are</Title>
      <div className ="grid max-sm:text-xs grid-cols-3 md:mt-6 justify-between tems-center w-full gap-y-12 gap-x-8 md:gap-x-20 text-white">
        {aData.map(({img, caption})=> (
          <figure key={img} className ="flex flex-col items-center justif-center container max-w-[9rem]">
          <Image src={`/whoweare/${img}.png`} width={100} height={100} alt="" className="w-8 h-8 sm:w-12 sm:h-12" />
          <figcaption className ="mt-2 text-center">{caption}</figcaption>
        </figure>
          ))}
      </div>
    </Section>
  );
}
