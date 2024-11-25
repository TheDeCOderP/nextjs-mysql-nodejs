import RegisterForm from '@/components/register';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100">
     
      {/* Hero Section */}
      <header className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Bright Smile Dental Care</h1>
          <p className="mt-4 text-lg">Providing quality dental care for your perfect smile</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-100 transition">
            Book an Appointment
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Teeth Cleaning", desc: "Professional cleaning for healthy teeth." },
              { title: "Cavity Filling", desc: "Painless cavity treatment." },
              { title: "Cosmetic Dentistry", desc: "Enhance your smile with our cosmetic services." },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RegisterForm/>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "John Doe", feedback: "Best dental care I've ever received!" },
              { name: "Jane Smith", feedback: "Highly recommend their friendly team." },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <p className="italic mb-4">`{testimonial.feedback}`</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Transform Your Smile?</h2>
          <p className="mt-4">Contact us today to schedule your appointment!</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </footer>
    </div>
  );
}
