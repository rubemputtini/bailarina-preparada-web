import { Author, Benefits, CTA, FAQ, Feedbacks, Footer, Guarantee, Hero, Services, Slider, Testimonials, WatchAnywhere } from "./sections";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b bg-[#504359]">
      <Hero />
    </section>
    <section className="padding">
      <Slider />
    </section>
    <section className="padding">
      <Benefits />
    </section>
    <section className="padding-x py-10">
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
    <section className="bg-pale-blue padding">
      <Testimonials />
    </section>
    <section className="padding">
      <Feedbacks />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Author />
    </section>
    <section className="padding bg-gray-100">
      <FAQ />
    </section>
    <Footer />
    <WhatsAppButton />
  </main>
);

export default App;