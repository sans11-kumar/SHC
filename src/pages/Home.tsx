import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-600 to-accent-600">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50 to-accent-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_theme(colors.brand.600)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
        <div className="container relative mx-auto px-4 h-screen flex items-center justify-between">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400"
            >
              Your Health, Our Priority
            </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl"
              >
                Experience compassionate care and cutting-edge medical expertise that puts your well-being first.
              </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <Link
                to="/appointment"
                className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 hover:opacity-95 transition-all"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-white/20 border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                Our Services
              </Link>
            </motion.div>
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
            >
              Experience the perfect blend of modern medicine and compassionate care. Your health journey starts here.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/appointment" 
                className="btn-primary text-lg group"
              >
                Book Appointment
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                to="/services" 
                className="btn-secondary text-lg"
              >
                Our Services
              </Link>
            </motion.div>
            
          </div>
          {/* Floating Badges */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
              <div className="text-brand-600 mb-2">
                <i className="fas fa-user-md text-3xl"></i>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900">Expert Doctors</h3>
              <p className="text-gray-600 mt-1">Highly qualified specialists</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
              <div className="text-healing-600 mb-2">
                <i className="fas fa-heartbeat text-3xl"></i>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900">Modern Care</h3>
              <p className="text-gray-600 mt-1">Latest medical technologies</p>
            </div>
            </motion.div>
            <motion.div className="hidden lg:flex lg:items-center lg:justify-end w-1/3">
              {/* colorful image cluster: doctor + patient */}
              <div className="relative w-64 h-64 mr-6">
                <div className="absolute -left-6 -top-6 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                    alt="Patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-20 mix-blend-screen pointer-events-none"></div>
              </div>
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

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Wellness Journey",
    content: "The perfect blend of modern medicine and Ayurveda helped me achieve balanced health. The personalized care is exceptional!"
  },
  {
    name: "James Wilson",
    title: "Recovery Story",
    content: "Found lasting relief from chronic stress through their holistic approach. The results have been life-changing."
  },
  {
    name: "Emma Thompson",
    title: "Transformation",
    content: "Their integrated healing approach restored my energy and vitality. The doctors truly understand individual needs."
  }
];

export default Home;