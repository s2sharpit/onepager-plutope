import { Section, Title } from "@/components/ui";
import Image from "next/image";

const aData = [
  {
    img: 'f1',
    caption: 'Non-custodial Wallet',
  },
  {
    img: 'f4',
    caption: 'Ownership',
  },
  {
    img: 'f3',
    caption: 'Multi-chain',
  },
  {
    img: 'f2',
    caption: 'Zero Knowledge',
  },
  {
    img: 'f10',
    caption: 'Lightning Fast',
  },
  {
    img: 'f9',
    caption: 'Swapping',
  },
  {
    img: 'f8',
    caption: 'Api Keys',
  },
  {
    img: 'f12',
    caption: 'Ease of use',
  },
  {
    img: 't2',
    caption: 'Portfolio Tracking',
  },
]

export default function WhoWeAre() {
  return (
    <Section>
      <Title>Who We Are</Title>
      <div className ="grid max-sm:text-xs grid-cols-3 mt-12 justify-between tems-center w-full gap-y-12 gap-x-16 text-white">
        {aData.map(({img, caption})=> (
          <figure key={img} className ="flex flex-col items-center justif-center">
          <Image src={`/img/${img}.jpeg`} width={100} height={100} alt="" className="w-16 sm:w-24 h-16 sm:h-24 rounded-md" />
          <figcaption className ="mt-2 text-center">{caption}</figcaption>
        </figure>
          ))}
      </div>
    </Section>
  );
}
