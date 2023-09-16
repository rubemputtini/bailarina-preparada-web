import { Author, Benefits, CTA, FAQ, Feedbacks, Footer, Guarantee, Hero, Services, Testimonials, WatchAnywhere } from "./sections";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => (
  <main className="bg-[#302539]">
    <Nav />
    <section className="xl:padding-l wide:padding-r">
      <Hero />
    </section>
    <section className="padding">
      <Benefits />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
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