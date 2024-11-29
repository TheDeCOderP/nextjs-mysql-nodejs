// pages/about.js
import Head from 'next/head';
import Heroheader from './hero_header';
import { Fullscreen } from 'lucide-react';
import Link from 'next/link';


export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Your Smile Dental</title>
        <meta
          name="description"
          content="Learn more about Your Smile Dental, where we prioritize your oral health and beautiful smile."
        />
      </Head>
      <main className="bg-gray-50 min-h-screen text-gray-800 ml-0">

      <header className="relative bg-bgclr text-gray-800 py-20 px-6 sm:px-12 shadow-lg m-11 mt-24">
  <div className="container mx-auto text-center">
    <div className="relative z-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-headclr mb-6">
        Your Smile Deserves the Best Care
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Providing quality dental care with a personal touch, helping you achieve the smile of your dreams.
      </p>
      <Link
        href="/appointment"
        className="inline-block bg-btnclr text-white font-semibold px-8 py-4 rounded-full shadow-xl  transition duration-300 transform hover:scale-105"
      >
        Book an Appointment
      </Link>
    </div>
  </div>
</header>

        {/* About Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-headclr">Who We Are</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At <span className="font-semibold text-headclr">Your Smile Dental</span>, we are dedicated to providing top-quality dental care in a comfortable and welcoming environment. Our team of skilled professionals uses the latest technology and techniques to ensure every patient leaves with a healthy, radiant smile.
              </p>
            </div>
            <div>
              <img
                src="images/slide_one.jpg"
                alt="Dental Care"
                className="rounded-lg shadow-md w-full h-auto  transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 bg-bgclr">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/ourmission.jpg"
                alt="Happy Family Smiling"
                className="rounded-lg shadow-md w-full h-auto  transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-headclr mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Our mission is to empower individuals and families to maintain optimal oral health. We are committed to creating a personalized care experience that leaves you feeling confident and valued.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl font-semibold mb-4 text-headclr">Meet Our Team</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              Our highly qualified dentists, hygienists, and support staff work together to provide exceptional care tailored to your unique needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <img
                  src="/images/den1.jpg"
                  alt="Dentist 1"
                  className=" mx-auto w-32 h-32 object-cover shadow-md w-full h-auto rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
                <h3 className="mt-4 font-semibold text-lg">Dr.Shatisha Ranna</h3>
                <p className="text-gray-600 text-sm">Cosmetic Dentist</p>
              </div>
              <div>
                <img
                  src="/images/den2.jpg"
                  alt="Dentist 2"
                  className="rounded-full mx-auto w-32 h-32 object-cover shadow-md w-full h-auto rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
                <h3 className="mt-4 font-semibold text-lg">Dr.Anjalli </h3>
                <p className="text-gray-600 text-sm">Orthodontist</p>
              </div>
              <div>
                <img
                  src="/images/den3.jpg"
                  alt="Dentist 3"
                  className="rounded-full mx-auto w-32 h-32 object-cover shadow-md w-full h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
                <h3 className="mt-4 font-semibold text-lg">Dr. Emily Davis</h3>
                <p className="text-gray-600 text-sm">Pediatric Dentist</p>
              </div>
            </div>
          </div>
        </section>

      
      </main>
    </>
  );
}
