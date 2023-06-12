import { Section, Subtle, Title } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    img: "Instagram",
    views: 4200,
    url: "https://www.instagram.com/plutope",
  },
  {
    img: "telegram",
    views: 2300,
    url: "https://t.me/plutopeglobal",
  },
  {
    img: "Discord",
    views: 1900,
    url: "https://discord.com/invite/yXgfQ8Kpwn",
  },
  {
    img: "twitter",
    views: 5700,
    url: "https://twitter.com/Plutopeio",
  },
  {
    img: "Linkdin",
    views: 2100,
    url: "https://www.linkedin.com/company/plutope/",
  },
  {
    img: "Emailer",
    views: 30000,
    url: "mailto:hey@plutope.io",
  }
];

export default function Footer() {
  let toggle = true;

  function Card({ data }: { data: { img: string; views: number, url: string } }) {
    toggle = !toggle;
    return (
      <div className="flex justify-center items-center">
        <Link href={data.url} target="_blank" className={`${toggle && "order-last"}`}>
          <Image
            src={`/assets/${data.img}.png`}
            width={120}
            height={120}
            alt=""
          />
        </Link>
        <Subtle className="text-white w-40">{data.views}+</Subtle>
      </div>
    );
  }
  return (
    <Section>
      <Title>46500+ And Growing</Title>
      <div>
        {cardData.map((data) => (
          <Card key={data.img} data={data} />
        ))}
      </div>
    </Section>
  );
}
