import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import Image from "next/image";

const data = [
  { p: "Upto 5% cashback on spends" },
  { p: "Insured funds by BitGo post-swap." },
  { p: "Integration with Apple / Samsung / Google Pay." },
  { p: "Top-up your crypto and spend in fiat" },
  { p: "Accepted at all Mastercard supported merchants" },
];

export default function CryptoPayment() {
  return (
    <Section>
      <Title className="pb-4">Crypto Payment</Title>
      <Subtle>
        Debit Card powered <br /> by Mastercard
      </Subtle>
      <ul className="list-disc pt-16 grid md:grid-cols-2 justify-center max-w-6xl gap-x-20 items-center text-neutral-300 text-lg">
      {data.map((d,i) => (
        <li key={i} className="flex items-center py-2 space-x-4 xl:py-3">
        <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
        <span>{d.p}</span>
      </li>
        ))}
    </ul>
    {/* <Image className="absolute wscreen opacity-60" src={'/assets/debit-card.png'} width={800} height={200} alt="" /> */}
    <Image className="justify-self-center" src={'/assets/Table.png'} width={600} height={200} alt="" />
    </Section>
  );
}
