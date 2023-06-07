import { Section, Title } from "@/components/ui";
import Image from "next/image";

export default function OurInvesters() {
  return (
    <Section>
        <Title>Our Investers</Title>
        <Image src={'/assets/pie-chat.png'} width={400} height={400} alt="" />
    </Section>
  )
}
