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
    <Section className="relative">
      <div className="z-10">
      <Title className="mb-2">Crypto Payment</Title>
      <Title className="font-extralight text-2xl">
        Debit Card powered by Mastercard
      </Title>
      <ul className="list-disc pt- grid grid-cols-2 justify-center max-w-6xl gap-x-10 md:gap-x-40 items-center text-neutral-300 text-lg pl-4">
        {data.map((d, i) => (
          <li key={i} className="flexitems-center py-2 space-x-4 xl:py-3 max-w-[20rem] max-md:text-xs">
            {d.p}
          </li>
        ))}
      </ul>
        </div>
      <div className="absolute sm:hidden max-md:min-w-[100dvw] flex justify-self-center bottom-96 md:top-96">
        <Image
          className="top-60 relative "
          src={"/assets/debit.png"}
          width={1000}
          height={200}
          alt=""
        />
      </div>
      <Image
        className="justify-self-center max-sm:mt-60 max-w-xl w-screen"
        src={"/assets/tables.png"}
        width={900}
        height={900}
        alt=""
      />
    </Section>
  );
}
