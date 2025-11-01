import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';

const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase()
    .refine(email => email.endsWith('.com') || email.endsWith('.org') || email.endsWith('.net'), {
      message: 'Email must be from a common domain (.com, .org, .net)',
    }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, 'Invalid phone number')
    .refine(phone => {
      const digits = phone.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 15;
    }, 'Phone number must be between 10 and 15 digits'),
  date: z
    .string()
    .refine(date => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Date must be today or in the future')
    .refine(date => {
      const selectedDate = new Date(date);
      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3);
      return selectedDate <= maxDate;
    }, 'Cannot book appointments more than 3 months in advance'),
  time: z
    .string()
    .min(1, 'Please select a time')
    .refine(time => {
      const [hours] = time.split(':').map(Number);
      return hours >= 9 && hours <= 17;
    }, 'Appointments are only available between 9 AM and 5 PM'),
  service: z
    .string()
    .min(1, 'Please select a service'),
  doctor: z
    .string()
    .min(1, 'Please select a doctor'),
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional()
    .transform(str => str === '' ? undefined : str),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const services = [
    { value: 'general-medicine', label: 'General Medicine' },
    { value: 'ayurveda', label: 'Ayurveda Consultation' },
    { value: 'health-checkup', label: 'Health Check-up' },
    { value: 'wellness', label: 'Wellness Program' },
  ];

  const doctors = [
    { value: 'dr-smith', label: 'Dr. Smith - General Medicine' },
    { value: 'dr-patel', label: 'Dr. Patel - Ayurveda Specialist' },
  ];

  const timeSlots = [
    { value: '09:00', label: '09:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '02:00 PM' },
    { value: '15:00', label: '03:00 PM' },
    { value: '16:00', label: '04:00 PM' },
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      // Add your API call here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      console.log('Form submitted:', data);
      reset();
      // Show success message
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          required
        />

        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
        />

        <Input
          label="Phone"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          helpText="Include country code (e.g., +1 for USA)"
          required
        />

        <Input
          label="Preferred Date"
          type="date"
          {...register('date')}
          error={errors.date?.message}
          min={new Date().toISOString().split('T')[0]}
          required
        />

        <Select
          label="Preferred Time"
          options={timeSlots}
          {...register('time')}
          error={errors.time?.message}
          required
        />

        <Select
          label="Service"
          options={services}
          {...register('service')}
          error={errors.service?.message}
          required
        />

        <div className="col-span-full">
          <Select
            label="Preferred Doctor"
            options={doctors}
            {...register('doctor')}
            error={errors.doctor?.message}
            required
          />
        </div>

        <div className="col-span-full">
          <Textarea
            label="Additional Notes"
            {...register('message')}
            error={errors.message?.message}
            placeholder="Any specific concerns or requirements..."
          />
        </div>

        <div className="col-span-full">
          <Button
            type="submit"
            loading={isSubmitting}
            fullWidth
            size="lg"
          >
            Schedule Appointment
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {/* Success Message */}
        {false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-4">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Scheduled!</h2>
                <p className="text-gray-600 mb-6">We'll send you a confirmation email with all the details.</p>
                <Button variant="outline" onClick={() => null}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppointmentForm;
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    doctor: '',
    message: ''
  });

  const services = [
    'General Medicine',
    'Ayurveda Consultation',
    'Health Check-up',
    'Wellness Program'
  ];

  const doctors = [
    'Dr. Smith - General Medicine',
    'Dr. Patel - Ayurveda Specialist'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setSuccess(true);
      // Reset form or redirect
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Scheduled!</h2>
        <p className="text-gray-600 mb-6">We'll send you a confirmation email with all the details.</p>
        <Button 
          variant="outline"
          onClick={() => setSuccess(false)}
        >
          Schedule Another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Input
        label="Preferred Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={new Date().toISOString().split('T')[0]}
        required
      />
      
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Time
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="">Select Time</option>
          {timeSlots.map(slot => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="">Select Service</option>
          {services.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Doctor
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="">Select Doctor</option>
          {doctors.map(doctor => (
            <option key={doctor} value={doctor}>{doctor}</option>
          ))}
        </select>
      </div>

      <div className="col-span-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Any specific concerns or requirements..."
        ></textarea>
      </div>

      <div className="col-span-full">
        <Button
          type="submit"
          loading={loading}
          fullWidth
          size="lg"
        >
          Schedule Appointment
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;