import { Author, Benefits, CTA, FAQ, Feedbacks, Footer, Guarantee, Hero, Services, Testimonials, WatchAnywhere } from "./sections";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton";
import MetaPixel from "./utils/meta/metaPixel";
import CountdownTimer from "./components/CountdownTimer";
import ExitPopup from "./components/ExitPopup";

const App = () => {

  const promotionEndDate = new Date('2024-11-12T23:59:59');

  return (
    <main className="relative">
      <CountdownTimer targetDate={promotionEndDate} />
      <ExitPopup />
      <MetaPixel />
      <div className="absolute z-auto right-0 top-0 w-1/4 h-1/5 rounded-full red__gradient" />
      <Nav />
      <section className="xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding-x padding-t">
        <div className="absolute z-auto -left-1/2 bottom-0 w-1/2 h-1/3 rounded-full red__gradient" />
        <Benefits />
      </section>
      <section className="padding-x padding-b">
        <Services />
      </section>
      <section className="padding-x padding-t">
        <div className="absolute z-auto inset-1/3 w-1/6 h-1/6 white__gradient" />
        <CTA />
      </section>
      <section className="padding-x padding-t">
        <WatchAnywhere />
      </section>
      <section className="padding-x">
        <Guarantee />
      </section>
      <section className="padding">
        <Testimonials />
      </section>
      <section className="padding">
        <Feedbacks />
      </section>
      <section className="padding">
        <Author />
      </section>
      <section className="padding">
        <FAQ />
      </section>
      <section className="padding-x">
        <Footer />
      </section>
      <WhatsAppButton />
    </main>
  )
};

export default App;