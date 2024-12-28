import React from 'react';
import Breadcrumb from '../../components/common/breadcrumb/Breadcrumb';
import ContactForm from '../../components/pages/components/ContactForm/ContactForm';
import ContactInfo from '../../components/pages/components/ContactInfo/ContactInfo';
import CustomMap from '../../components/pages/components/Map/CustomMap';
// import Newsletter from '../../components/shared/newsletter/Newsletter';

import logo from '../../assets/logo.png'

export const metadata = {
  title: {
    absolute: "Contact Us | Travello"
  },
  description: "Get in touch with Travello to inquire about our tours, packages, or services. We're happy to assist you.",
  keywords: "contact us, travel inquiries, customer support, tour booking",
  favicon: {logo},
};

function ContactPage() {
  return (
    <main>
      <Breadcrumb title="Contact Us" buttonText="Contact" />
      <section className="container mt-5 pt-4">
        <div className="row my-5">
          <div className="col-md-6 me-5">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
        <CustomMap />
      </section>
      {/* <Newsletter /> */}
    </main>
  );
}

export default ContactPage;
