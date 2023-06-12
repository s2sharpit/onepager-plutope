import { Section, Title } from "@/components/ui";
import Image from "next/image";

export default function OurInvesters() {
  return (
    <Section>
        <Title className="pb-2">Our Investors</Title>
        <Title className="font-extralight">Tokenomics</Title>
        <Image src={'/assets/pie-chat.png'} width={400} height={400} alt="" />
    </Section>
  )
}
