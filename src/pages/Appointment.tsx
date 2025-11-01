import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Form validation schema
const appointmentSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  service: z.enum(['General Medicine', 'Ayurveda', 'Panchakarma Therapy', 'Follow-up Visit']),
  date: z.string().refine((val) => {
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'Please select a future date'),
  time: z.string().min(1, 'Please select a time slot'),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const timeSlots = [
  '10:00 AM - 12:00 PM',
  '12:00 PM - 2:00 PM',
  '4:00 PM - 6:00 PM',
  '6:00 PM - 8:00 PM',
];

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    // Format the message for WhatsApp
    const text = `Hello! I would like to book an appointment at Saanvi Healthcare Centre.
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
Message: ${data.message || 'No additional notes'}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Book your appointment with our General Medicine and Ayurveda doctors at Saanvi Healthcare Centre."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        className="pt-28 pb-12 bg-green-50 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Book Your Appointment</h1>
          <p className="text-gray-700">
            Consult our experienced <b>General Medicine</b> and <b>Ayurveda</b> doctors for holistic healing and personalized care.
          </p>
        </div>
      </motion.section>

      {/* Appointment Form Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-50 shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-green-800 text-center mb-6">Appointment Form</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-600 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter your email (optional)"
                />
                {errors.email && (
                  <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Consultation Type *</label>
                <select
                  {...register('service')}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value="">Select a service</option>
                  <option value="General Medicine">General Medicine Consultation</option>
                  <option value="Ayurveda">Ayurveda Consultation</option>
                  <option value="Panchakarma Therapy">Panchakarma / Detox Therapy</option>
                  <option value="Follow-up Visit">Follow-up Visit</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-red-600 text-sm">{errors.service.message}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Date *</label>
                <input
                  type="date"
                  {...register('date')}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                {errors.date && (
                  <p className="mt-1 text-red-600 text-sm">{errors.date.message}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Time *</label>
                <select
                  {...register('time')}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1 text-red-600 text-sm">{errors.time.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Mention any specific health concerns or details..."
                />
              </div>

              {/* Submit Buttons */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Appointment'}
                </button>
                <p className="text-gray-600 mt-4">or</p>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-2 bg-green-500 text-white font-semibold px-5 py-3 rounded-full hover:bg-green-600 transition-all"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Book via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Appointment;