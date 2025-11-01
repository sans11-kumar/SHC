import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeSlot {
  value: string;
  label: string;
  available?: boolean;
}

interface TimePickerProps {
  label?: string;
  error?: string;
  helpText?: string;
  value: string;
  onChange: (time: string) => void;
  timeSlots: TimeSlot[];
  required?: boolean;
}

const TimePicker = ({
  label,
  error,
  helpText,
  value,
  onChange,
  timeSlots,
  required
}: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (timeSlot: TimeSlot) => {
    if (!timeSlot.available) return;
    onChange(timeSlot.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-2 rounded-lg border text-left
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-emerald-500'}
          focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
        `}
      >
        {value ? timeSlots.find(slot => slot.value === value)?.label || 'Select time' : 'Select time'}
        <span className="absolute right-2 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 15 }}
              className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-2 max-h-64 overflow-auto"
            >
              <div className="grid grid-cols-2 gap-1">
                {timeSlots.map((slot, index) => (
                  <motion.button
                    key={slot.value}
                    type="button"
                    onClick={() => handleSelect(slot)}
                    disabled={!slot.available}
                    className={`
                      px-4 py-2 rounded-lg text-sm
                      ${slot.value === value ? 'bg-emerald-100 text-emerald-800' : 'text-gray-700'}
                      ${slot.available ? 'hover:bg-emerald-50' : 'opacity-50 cursor-not-allowed'}
                      transition-colors duration-200
                    `}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.03 }
                    }}
                  >
                    {slot.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helpText && !error && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
    </div>
  );
};

export default TimePicker;