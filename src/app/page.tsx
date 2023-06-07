import {
  CryptoPayment,
  EarlyPart,
  Footer,
  Main,
  OurInvesters,
  OurPartners,
  Roadmap,
  WhoWeAre,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto text-white bg-[url('../../public/assets/bg.png')] bg-[length:100%_200%]">
      <Main />
      <WhoWeAre />
      <CryptoPayment />
      <OurInvesters />
      <OurPartners />
      <Roadmap />
      <EarlyPart />
      <Footer />
    </main>
  );
}
