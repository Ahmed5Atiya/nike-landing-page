import CustomerReviews from "./componant/CustomerReviews";
import Footer from "./componant/Footer";
import Hero from "./componant/Hero";
import Navbar from "./componant/Navbar";
import PopularProducts from "./componant/PopularProducts";
import Services from "./componant/Services";
import SpecialOffer from "./componant/SpecialOffer";
import Subscribe from "./componant/Subscribe";
import SuperQyality from "./componant/SuperQyality";
import "./index.css";
export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r paddind-b">
        <Hero />
      </section>
      <section className="padding  mt-5">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQyality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-ful">
        <Subscribe />
      </section>
      <Footer />
    </main>
  );
}
