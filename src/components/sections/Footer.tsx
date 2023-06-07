import { Section, Subtle, Title } from "@/components/ui";
import Image from "next/image";

const cardData = [
  { img: "Instagram", views: 4200 },
  { img: "telegram", views: 2300 },
  { img: "discord", views: 1900 },
  { img: "twitter", views: 5700 },
  { img: "Linkdin", views: 2100 },
  { img: "Emailer", views: 30000 },
];

export default function Footer() {
  let toggle = true;

  function Card({ data }: { data: { img: string, views: number } }) {
    toggle =! toggle;
    return (
      <div className="flex justify-center items-center">
        <Image
          src={`/assets/${data.img}.png`}
          width={120}
          height={120}
          alt=""
          className={`${toggle && "order-last"}`}
        />
        <Subtle className="text-white w-40">{data.views}+</Subtle>
      </div>
    );
  }
  return (
    <Section>
      <Title>46500+ And Growing</Title>
      <div>
        {cardData.map((data)=> (
          <Card key={data.img} data={data} />
        ))}
      </div>
    </Section>
  );
}
