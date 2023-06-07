import { Section, Subtle, Title } from "@/components/ui";
import Link from "next/link";

const roadmapData = [
    {
        yr: 2022,
        p: 'dfal ksjdalkf jdlksafjd sklafjd fsdjklsaj sdfjlksj asfjlfsdak sajksda ',
    },
    {
        yr: 2023,
        p: 'fdd dfjak sdafksa asdfjk sadfj jkfasdkl sdfklja',
    },
]

export default function Roadmap() {
    let toggle = true;

    function Quali({ data }: { data: any }) {
      toggle = !toggle;
      return (
        <div className="group grid grid-cols-[1fr_max-content_1fr] gap-2 gap-x-6">
          <div className={`${toggle && "hidden"}`}></div>
          <div className={`${toggle && "order-last"}`}>
            <span className="inline-block h-[13px] w-[13px] bg-neutral-500 rounded-full"></span>
            <div className="group-last:hidden w-[1px] h-full bg-neutral-500 -translate-y-2 translate-x-[6px]"></div>
          </div>
          <div>
            <Subtle className="text-white">{data.yr}</Subtle>
            <p>{data.p}</p>
          </div>
        </div>
      );
    }
  return (
    <Section>
      <Title>Roadmap</Title>
      <div className="max-w-2xl">
        {roadmapData.map((data) => (
          <Quali key={data.yr} data={data} />
        ))}
      </div>
    </Section>
  );
}
