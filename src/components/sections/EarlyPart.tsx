import { Section, Title } from "@/components/ui";
import Image from "next/image";

export default function EarlyPart() {
  return (
    <Section className="relative ">
      <Image src={'/assets/Bitcoi--4.png'} width={120} height={120} alt="" className="absolute -left-12 -top-4" />
      <Image src={'/assets/thd.png'} width={120} height={120} alt="" className="absolute -right-12 -bottom-8" />

        <Title>Early Participation Benefits</Title>
        <div className="text-justify max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae quam corrupti architecto? Expedita vitae delectus laudantium inventore deserunt commodi obcaecati eum. Aliquam debitis cupiditate et voluptates ducimus veniam asperiores excepturi maiores! Commodi repellat soluta ad laboriosam dignissimos consequuntur consequatur?</div>
    </Section>
  )
}
