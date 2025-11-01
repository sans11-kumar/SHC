import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  title: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    title: "Diabetes Management Patient",
    content: "Dr. Dhirendra's approach to diabetes management has completely transformed my life. The combination of modern medicine and lifestyle guidance has helped me maintain stable blood sugar levels naturally."
  },
  {
    name: "Priya Patel",
    title: "Wellness Program Member",
    content: "The integrated approach at Saanvi Healthcare is unique. Dr. Sunitha's Ayurvedic treatments complemented my regular medical care perfectly, leading to better overall health outcomes."
  },
  {
    name: "Amit Kumar",
    title: "Chronic Pain Patient",
    content: "After years of struggling with chronic pain, the combined treatment plan from both doctors has given me relief I never thought possible. Their collaborative approach makes all the difference."
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600">
        {/* Modern geometric patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        
        {/* Floating shapes */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-br from-secondary-400/30 to-accent-400/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full filter blur-3xl"></div>
        </motion.div>

        {/* Main content */}
        <div className="container relative mx-auto px-4 h-screen flex items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            {/* Left side content */}
            <div className="md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              >
                Modern 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 via-accent-300 to-primary-300 block">
                  Healthcare
                </span>
                Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed"
              >
                Experience compassionate care and cutting-edge medical expertise that puts your well-being first.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/appointment"
                  className="btn btn-primary group flex items-center justify-center gap-2"
                >
                  <span>Book Appointment</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-white/80"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-primary-400/50 backdrop-blur-sm" />
                  ))}
                </div>
                <span>Trusted by 10,000+ patients</span>
              </div>
            </motion.p>
            </div>

            {/* Right side - Hero Image with Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:w-1/2 relative"
            >
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
                  <img 
                    src="/assets/doctor-hero.svg" 
                    alt="Healthcare professional"
                    className="w-full h-full object-cover rounded-3xl opacity-90"
                  />
                </div>
                
                {/* Achievement Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">95%</p>
                      <p className="text-white/70 text-sm">Success Rate</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary-500/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 font-semibold">10,000+</p>
                      <p className="text-white/70 text-sm">Patients</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" id="doctors">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Meet Our Expert Doctors</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Doctor 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:flex items-center mb-16 bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
          >
            <div className="md:w-1/3 mb-6 md:mb-0">
        <img src="/assets/dr-dhirendra-yadav.svg" alt="Dr. Dhirendra Yadav" 
                   className="rounded-2xl shadow-md w-full object-cover h-72 md:h-80" />
            </div>
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">Dr. Dhirendra Yadav</h3>
              <p className="text-gray-700 font-medium mb-3">Consultant Physician & Diabetologist</p>
              <p className="text-sm text-gray-600 mb-4"><b>Qualifications:</b> MBBS, MD (Internal Medicine), CCDM</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dr. Dhirendra Yadav is a highly experienced Consultant Physician and Diabetologist with <b>19 years of clinical expertise</b> in Internal Medicine and Diabetes Management.
              </p>
              <div className="bg-emerald-50 p-4 rounded-xl mt-4">
                <p className="italic text-emerald-700 font-semibold">"Good medicine begins with understanding the person, not just the disease."</p>
              </div>
            </div>
          </motion.div>

          {/* Doctor 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:flex items-center bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
          >
            <div className="md:w-1/3 mb-6 md:mb-0 md:order-2">
        <img src="/assets/dr-sunitha-yadav.svg" alt="Dr. Sunitha Yadav" 
                   className="rounded-2xl shadow-md w-full object-cover h-72 md:h-80" />
            </div>
            <div className="md:w-2/3 md:pr-10 md:order-1">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">Dr. Sunitha Yadav</h3>
              <p className="text-gray-700 font-medium mb-3">Consultant Ayurveda Physician</p>
              <p className="text-sm text-gray-600 mb-4"><b>Qualifications:</b> BAMS, MD (Ayurveda Medicine)</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dr. Sunitha Yadav is a renowned Ayurveda physician with <b>14 years of experience</b> in traditional and integrative Ayurvedic medicine.
              </p>
              <div className="bg-emerald-50 p-4 rounded-xl mt-4">
                <p className="italic text-emerald-700 font-semibold">"True healing happens when the body, mind, and soul are aligned."</p>
              </div>
            </div>
          </motion.div>

          {/* Integration Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Integrated Healing at Saanvi Healthcare Centre</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our doctors work together, combining modern medicine with Ayurvedic wisdom to provide comprehensive, 
              compassionate care that addresses the root cause of health issues, not just the symptoms.
            </p>
            <p className="text-emerald-700 font-semibold mt-4">
              "Health, Harmony, and Hope — through Science, Compassion, and Tradition."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900 font-playfair">Patient Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
              >
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-xl">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 font-playfair">Start Your Healing Journey</h2>
              <p className="text-lg text-gray-600 mb-8">
                Schedule a consultation and discover the perfect balance of modern and traditional healing.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book an Appointment
                  <i className="fas fa-calendar-alt ml-2"></i>
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Chat on WhatsApp
                  <i className="fab fa-whatsapp ml-2"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;