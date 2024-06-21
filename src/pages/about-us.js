import Layout from '@/components/Layout';
import React from 'react';


const AboutUsPage = () => {
  return (
    <Layout>
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-merriweather text-red text-center mb-8">Welcome to Shiva Catering</h1>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Shiva Catering, we strive to exceed our clients' expectations by delivering delicious food, impeccable service, and creative presentations. We aim to create unforgettable dining experiences that leave a lasting impression.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Established in [year], Shiva Catering has grown from a small family-run business to a renowned catering service in [location/city]. Our journey began with a passion for culinary excellence and a commitment to customer satisfaction. Over the years, we have expanded our menu offerings and services to cater to a diverse range of events and occasions.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Exceptional Culinary Expertise:</strong> Our chefs bring years of experience and creativity to every dish, ensuring exquisite flavors and quality.
            </li>
            <li>
              <strong>Personalized Service:</strong> We work closely with each client to understand their preferences and vision, customizing menus and services to suit their unique requirements.
            </li>
            <li>
              <strong>Attention to Detail:</strong> From menu planning to presentation, we pay meticulous attention to every detail to ensure flawless execution of your event.
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Services We Offer</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Wedding Catering:</strong> Elevate your special day with our elegant wedding catering services.
            </li>
            <li>
              <strong>Corporate Events:</strong> Impress clients and colleagues with our professional catering for business meetings, conferences, and more.
            </li>
            <li>
              <strong>Private Parties:</strong> Celebrate life's milestones with our tailored catering services for birthdays, anniversaries, and gatherings.
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Our Commitment to Quality</h2>
          <p className="text-gray-700">
            At Shiva Catering, quality is at the heart of everything we do. We source fresh, locally-sourced ingredients and adhere to the highest standards of food safety and hygiene. Your satisfaction is our priority, and we continuously strive to deliver excellence in every aspect of our service.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-red mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Ready to plan your next event with Shiva Catering? Contact us today to discuss your catering needs, request a quote, or schedule a tasting session. We look forward to serving you!
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default AboutUsPage;
