'use client';

import { useState } from 'react';
import { getSupabaseClient } from '../lib/supabase';
import { saveContactSubmission } from '../services/contact';

const emptyForm = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (Object.values(formData).some((value) => !value.trim())) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      await saveContactSubmission(getSupabaseClient(), formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData(emptyForm);
    } catch (error) {
      console.error('Error saving contact submission:', error);
      setStatus({ type: 'error', message: 'Unable to send your message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <article className="col-lg-8 col-md-10">
            <header className="text-center mb-4">
              <h1>Contact</h1>
            </header>
            <div className="text-justify">
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your name"
                    maxLength={200}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your email"
                    maxLength={320}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your subject"
                    maxLength={200}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your message"
                    rows="5"
                    maxLength={10000}
                    required
                  />
                </div>

                {status && (
                  <div role={status.type === 'error' ? 'alert' : 'status'} className={`mt-3 text-center ${status.type === 'error' ? 'text-danger' : 'text-success'}`}>
                    {status.message}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
