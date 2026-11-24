'use client';

import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../services/firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setStatus('Sending...');

    try {

      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      setStatus('Error: Please try again later.');
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
                    required
                  />
                </div>

                {status && (
                  <div className={`mt-3 text-center ${status.startsWith('Error') ? 'text-danger' : 'text-success'}`}>
                    {status}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2"
                  >
                    Send
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
