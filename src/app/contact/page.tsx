"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Error: Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/Guest_app_Ai_model.png" alt="Contact Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl mb-12">
          Questions, demos, or partnerships—reach out and we&apos;ll respond quickly.
        </p>
        
        {/* Submit Message */}
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-md ${
            submitMessage.includes('Error') 
              ? 'bg-red-50 text-red-700 border border-red-200' 
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              rows={4}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg transition font-medium ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        {/* Responsive Gallery Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Connect with Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Image src="/images/Global_Operations.png" alt="Support" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Support</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Global_Security_Compliance.png" alt="Partnerships" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Partnerships</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/HavenOS-DockOS_Secure_by_Design.png" alt="Demo" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Demo</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Vendoora_Deployment_model.png" alt="Quick Response" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Quick Response</span>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>Email: <a href="mailto:vendoora2025@gmail.com" className="text-blue-600">vendoora2025@gmail.com</a></p>
          <p>Phone: <a href="tel:+15107302005" className="text-blue-600">+1 (510) 730-2005</a></p>
          <p>Or use the form above to send us a message directly.</p>
        </section>
      </div>
    </div>
  );
}
