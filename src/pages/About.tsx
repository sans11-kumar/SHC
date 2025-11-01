import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const doctors = [
  {
    name: 'Dr. John Smith',
    title: 'MBBS, MD (General Medicine)',
    specialty: 'General Medicine',
    experience: '15+ years',
    image: '/doctors/doctor1.jpg',
    description: 'Dr. Smith is a highly experienced general physician with expertise in managing chronic diseases and preventive healthcare.',
  },
  {
    name: 'Dr. Ayush Sharma',
    title: 'BAMS (Ayurveda Physician)',
    specialty: 'Ayurveda',
    experience: '12+ years',
    image: '/doctors/doctor2.jpg',
    description: 'Dr. Sharma specializes in traditional Ayurvedic treatments and has helped numerous patients achieve holistic wellness.',
  },
];

const About = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>About Us | Saanvi Healthcare Centre</title>
        <meta name="description" content="Learn more about Saanvi Healthcare Centre — your trusted clinic for integrated General Medicine and Ayurveda care." />
      </Helmet>
      {/* About Hero */}
      <section className="pt-24 pb-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-6">About Saanvi Healthcare Centre</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <b>Saanvi Healthcare Centre</b>, we believe true health is a harmony of body, mind, and nature. 
              Our clinic brings together the precision of modern medical science with the ancient wisdom of Ayurveda 
              to provide complete, compassionate care for every individual.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our mission is to provide comprehensive healthcare by integrating
                modern medical practices with traditional Ayurvedic wisdom. We
                believe in:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Holistic approach to healing</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Preventive healthcare</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-[url('/about-mission.jpg')] bg-cover bg-center rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Doctors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctor.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-primary-600 mb-2">{doctor.title}</p>
                  <p className="text-gray-600 mb-4">{doctor.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">
                      <strong>Specialty:</strong> {doctor.specialty}
                    </span>
                    <span>
                      <strong>Experience:</strong> {doctor.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Clinic?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrated Approach</h3>
              <p className="text-gray-600">
                Best of both modern medicine and traditional Ayurveda for
                comprehensive healing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
              <p className="text-gray-600">
                Tailored treatment plans based on individual needs and conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Facility</h3>
              <p className="text-gray-600">
                State-of-the-art infrastructure with traditional healing spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience Our Holistic Approach to Health
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book an appointment today and take the first step towards complete
            wellness.
          </p>
          <Link to="/appointment" className="btn">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;