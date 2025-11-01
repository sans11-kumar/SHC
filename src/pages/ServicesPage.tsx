import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = {
  generalMedicine: [
    {
      title: 'Comprehensive Health Check-ups',
      description: 'Full-body and routine diagnostic check-ups for all age groups.',
      icon: 'stethoscope',
    },
    {
      title: 'Chronic Disease Management',
      description: 'Management of diabetes, hypertension, thyroid disorders, and cardiac health.',
      icon: 'heartbeat',
    },
    {
      title: 'Acute Illness Care',
      description: 'Treatment for fever, infections, flu, allergies, and seasonal health issues.',
      icon: 'user-md',
    },
    {
      title: 'Respiratory Health',
      description: 'Asthma, bronchitis, and allergy management through evidence-based treatment.',
      icon: 'lungs',
    },
    {
      title: 'Pediatric & Geriatric Care',
      description: 'Holistic approach for children and elderly — gentle, effective, and safe.',
      icon: 'child',
    },
    {
      title: 'Vaccination & Preventive Care',
      description: 'Immunizations and preventive check-ups for long-term wellness.',
      icon: 'syringe',
    },
  ],
  ayurveda: [
    {
      title: 'Panchakarma Detox Therapies',
      description: 'Purify and rejuvenate your body with classic Ayurvedic cleansing therapies.',
      icon: 'leaf',
    },
    {
      title: 'Stress & Sleep Management',
      description: 'Relaxation therapies like Shirodhara and Abhyanga for calmness and better sleep.',
      icon: 'spa',
    },
    {
      title: 'Women\'s Health & PCOD Care',
      description: 'Ayurvedic hormonal balance therapies and nutrition guidance for women\'s wellness.',
      icon: 'female',
    },
    {
      title: 'Joint & Spine Treatments',
      description: 'Effective management for arthritis, back pain, and spondylitis using traditional oils.',
      icon: 'bone',
    },
    {
      title: 'Skin & Hair Therapies',
      description: 'Natural treatments for acne, pigmentation, and hair fall using herbal solutions.',
      icon: 'burn',
    },
    {
      title: 'Rejuvenation & Wellness',
      description: 'Customized therapies for vitality, immunity, and emotional balance.',
      icon: 'heart',
    },
  ],
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Explore our General Medicine and Ayurveda services at Saanvi Healthcare Centre — blending modern care with traditional healing."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        className="pt-28 pb-16 bg-green-50 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Medical & Ayurvedic Services</h1>
          <p className="text-gray-700 text-lg">
            Integrating modern diagnostics and Ayurveda's timeless wisdom to deliver holistic healing at <b>Saanvi Healthcare Centre</b>.
          </p>
        </div>
      </motion.section>

      {/* General Medicine Section */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">General Medicine Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {services.generalMedicine.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <i className={`fas fa-${service.icon} text-green-700 text-4xl mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/appointment" 
              className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Ayurveda Section */}
      <motion.section 
        className="py-16 bg-green-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Ayurveda & Panchakarma Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {services.ayurveda.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <i className={`fas fa-${service.icon} text-green-700 text-4xl mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/appointment" 
              className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Schedule Your Therapy
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Services;