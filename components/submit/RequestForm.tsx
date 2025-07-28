'use client';

import React, { useState } from 'react';
import { z } from 'zod';

// validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().optional(), // Phone number is optional
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

// Infer the TypeScript type from the schema
type FormData = z.infer<typeof formSchema>;

// a type for our errors state
type FormErrors = Partial<Record<keyof FormData, string>>;

const RequestForm = () => {
  // state management for form data, errors, and submission status
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for a field as the user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // mimic the submission logic with validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data against the schema
    const result = formSchema.safeParse(formData);

    // ! If validation fails, update the errors state and stop
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const newErrors: FormErrors = {};
      for (const key in fieldErrors) {
        newErrors[key as keyof FormData] = fieldErrors[key as keyof FormData]?.[0];
      }
      setErrors(newErrors);
      return;
    }

    // If validation succeeds, clear errors and proceed
    setErrors({});
    setIsSubmitting(true);

    // --- 5. Mimic an API call ---
    try {
      console.log('Submitting validated data:', result.data);
      // Fake a 2-second network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Submission successful!');
      setIsSubmitted(true); // Show the success message

    } catch (error) {
      console.error('Submission failed:', error);
      // In a real app, you might set a general error message here
      alert('An error occurred. Please try again.');

    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };
  
  // Todo -- Success Message Component might be replace with toast --
  if (isSubmitted) {
    return (
      <div className="bg-gray-100 p-8 rounded-2xl shadow-md text-center">
        <h3 className="text-2xl font-bold text-green-600">Request Sent!</h3>
        <p className="mt-2 text-gray-700">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
          }}
          className="mt-6 bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  // Todo Update JSX to display errors and handle submission state (toast) ---
  return (
    <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold text-gray-800">Let&lsquo;s Get Talking</h3>
      <p className="mt-2 text-gray-600">
        We will love to assist your business in its digital transformation
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange}
              className={`text-gray-700 bg-white w-full p-3 border rounded-lg transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange}
              className={`text-gray-700 bg-white w-full p-3 border rounded-lg transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
            className={`text-gray-700 bg-white w-full p-3 border rounded-lg transition-colors ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className='text-gray-400'>(Optional)</span></label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
            className="text-gray-700 bg-white w-full p-3 border border-gray-400 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange}
            className={`text-gray-700 bg-white w-full p-3 border rounded-lg transition-colors ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}
            className="w-full bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-colors hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;