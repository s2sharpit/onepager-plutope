import { Section, Title } from "@/components/ui";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <Section>
      <Title>Who We Are</Title>
      <div className ="grid grid-cols-2 max-sm:text-xs md:grid-cols-3 mt-12 justify-between items-center w-full gap-y-12 gap-x-16 text-white">
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f1.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Non Custodial Wallet</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f4.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Ownership</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f3.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Multi-Chain</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f2.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Zero Knowledge</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f10.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Lightning Fast</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f9.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Swapping</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f8.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Api keys</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/f12.jpeg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Ease of use</figcaption>
        </figure>
        <figure className ="flex flex-col items-center justify-center">
          <Image src="/img/t2.jpg" width={100} height={100} alt="" />
          <figcaption className ="mt-2">Portfolio Tracking</figcaption>
        </figure>
      </div>
    </Section>
  );
}
