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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // This would typically be replaced with actual form submission logic
      console.log(formData);
      alert('Thank you for your message. We will get back to you soon!');
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
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
          <Image src="/images/68D23C2B-E509-42BE-85D3-3BBE1CDC9738.png" alt="Contact Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl mb-12">
          Questions, demos, or partnerships—reach out and we&apos;ll respond quickly.
        </p>
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
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
        
        {/* Responsive Gallery Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Connect with Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Image src="/images/AB9921D6-B042-481E-85D8-6D5FF7E5DECB.png" alt="Support" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Support</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/B854FFF6-9442-4BAC-8A38-9578C7EF52A3.png" alt="Partnerships" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Partnerships</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/BDBF1CB5-846C-4FAD-81DD-EA6470CCF0C1.png" alt="Demo" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Demo</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/DA40EC32-B0FA-40DB-9040-C59FBDB8B214.png" alt="Quick Response" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Quick Response</span>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>Email: <a href="mailto:vendoora2025@gmail.com" className="text-blue-600">vendoora2025@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a></p>
          <p>Or use the form above to send us a message directly.</p>
        </section>
      </div>
    </div>
  );
}
