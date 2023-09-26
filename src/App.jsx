import { Author, Benefits, CTA, FAQ, Feedbacks, Footer, Guarantee, Hero, Services, Testimonials, WatchAnywhere } from "./sections";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => (
  <main className="relative bg-[#302539]">
    <div className="absolute z-auto right-0 top-0 w-1/4 h-1/5 rounded-full red__gradient" />
    <Nav />
    <section className="xl:padding-l wide:padding-r">
      <Hero />
    </section>
    <section className="padding">
      <div className="absolute z-auto -left-1/2 bottom-0 w-1/2 h-1/3 rounded-full red__gradient" />
      <Benefits />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <div className="absolute z-auto inset-1/3 w-1/6 h-1/6 white__gradient" />
      <CTA />
    </section>
    <section className="padding">
      <WatchAnywhere />
    </section>
    <section className="padding">
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
);

export default App;