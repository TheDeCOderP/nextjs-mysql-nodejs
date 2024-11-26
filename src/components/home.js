import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dental Care | Your Trusted Dental Clinic</title>
        <meta name="description" content="Providing exceptional dental care for your entire family." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 py-16 px-6 sm:px-12 m-10">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    {/* Text Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-6">
        A Healthy Smile for Every Stage of Life
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Professional dental care tailored for you and your family. Book an appointment today to get the care you deserve.
      </p>
      <a
        href="/contact"
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-blue-500 transition duration-300 transform hover:scale-105"
      >
        Book an Appointment
      </a>
    </div>

    {/* Image */}
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <img
        src="/images/homeHeader1.jpg"
        alt="Happy patient at the dentist"
        className="rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 w-full lg:w-4/5 h-auto max-h-[500px] object-cover"
      />
    </div>
  </div>
</header>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Dentistry", image: "/images/General-Dentisry.jpg" },
              { title: "Cosmetic Dentistry", image: "/images/Cosmetic Dentistry.jpg" },
              { title: "Orthodontics", image: "/images/Orthodontics.jpg" },
              { title: "Dental Implants", image: "/images/Dental Implants.webp" },
              { title: "Teeth Whitening", image: "/images/Teeth Whitening.jpg" },
              { title: "Emergency Care", image: "/images/Emergency Care.jpg" },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">
                  High-quality {service.title.toLowerCase()} to meet your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
  <div className="container mx-auto px-6 sm:px-12 text-center">
    <h2 className="text-3xl font-extrabold text-gray-800 mb-12">What Our Patients Say</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Jane Doe",
          image: "/images/patint1.jpg",
          text: "The staff was incredibly kind and professional. My teeth feel amazing!",
        },
        {
          name: "John Smith",
          image: "/images/patint2.webp",
          text: "I never thought visiting the dentist could be such a pleasant experience.",
        },
        {
          name: "Emily Wilson",
          image: "/images/patint3.jpg",
          text: "Excellent care! I recommend this clinic to everyone I know.",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-gray-600 italic mt-4">"{testimonial.text}"</p>
          <h4 className="text-blue-600 font-bold mt-4">{testimonial.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
            Ready to Enhance Your Smile?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Schedule an appointment with our professional team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer Section */}
      
    </div>
  );
}
