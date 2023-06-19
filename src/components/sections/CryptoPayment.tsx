import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const data = [
  { p: "Upto 3.5 % cashback on spends" },
  // { p: "Insured funds by BitGo post-swap" },
  { p: "Integrated with Apple / Samsung / Google Pay" },
  { p: "Hold crypto qnd spend fiat" },
  { p: "Accepted at all Mastercard supported merchant" },
];

export default function CryptoPayment() {
  return (
    <Section className="relative">
      <div className="z-10">
        <Title className="mb-2">Crypto Payment</Title>
        <Title className="font-extralight text-2xl">
          Debit Card powered by Mastercard
        </Title>
        <div className="px-4">
          <ul className="list-disc pt- grid grid-cols-2 justify-center max-w-6xl gap-x-10 md:gap-x-40 items-center text-neutral-300 text-lg pl-4">
            {data.map((d, i) => (
              <li
                key={i}
                className="flexitems-center py-2 space-x-4 xl:py-3 max-w-[20rem] max-md:text-xs"
              >
                {d.p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute sm:hidden max-md:min-w-[100dvw] flex justify-self-center bottom-96 md:top-96">
        <Image
          className="top-40 relative "
          src={"/assets/debitCard.png"}
          width={1000}
          height={200}
          alt=""
        />
      </div>
      <Image
        className="justify-self-center mt-60 sm:mt-12 max-w-xl w-screen"
        src={"/assets/Table.png"}
        width={900}
        height={900}
        alt=""
      />
      <Link
        href={""}
        target="_blank"
        className="pointer-events-none mt-12 text-center text-2xl md:text-3xl justify-self-center p-4 px-8 rounded-full bg-gradient-to-r from-purple-900 viapurple-700 to-blue-800"
      >
        Choose your Card
      </Link>
    </Section>
  );
}
