import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:prajwalgaonkar24@gmail.com';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-anonymous-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text">
            Let's Connect
          </span>
        </h2>

        <div className="flex flex-col gap-6">
          {/* Email */}
          <div
            onClick={handleEmailClick}
            className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/20">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400">Email Me</h3>
                <p className="text-sm text-gray-400 break-all">prajwalgaonkar24@gmail.com</p>
              </div>
              <svg className="w-5 h-5 text-purple-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/OP-Prajwal"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-black border border-orange-900/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-500/20">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 
                    11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61
                    -.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 
                    1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605
                    -2.665-.3-5.466-1.332-5.466-5.932 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 
                    1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 
                    .405 2.28-1.552 3.285-1.23 3.285-1.23 .645 1.653.24 2.873.12 3.176.765.84 
                    1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 
                    0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
                    21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-400">GitHub</h3>
                <p className="text-sm text-gray-400">Check out my projects</p>
              </div>
              <svg className="w-5 h-5 text-orange-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Anonymous Message */}
         {/* Anonymous Message */}
<div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-900/50 hover:border-blue-500/50 transition-all duration-300">
  <div className="flex items-center gap-4 mb-4">
    <div className="p-3 rounded-full bg-blue-500/20">
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-2 8a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    </div>
    <div className="flex-1">
      <h3 className="text-lg sm:text-xl font-semibold text-blue-400">Send Anonymous Message</h3>
      <p className="text-sm text-gray-400">No email required</p>
    </div>
  </div>

  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label htmlFor="subject" className="block text-sm text-gray-300 mb-1">Subject (optional)</label>
      <input
        id="subject"
        type="text"
        value={formData.subject}
        onChange={handleInputChange}
        disabled={isSubmitting}
        placeholder="What's this about?"
        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-blue-900/50 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Your Message</label>
      <textarea
        id="message"
        value={formData.message}
        onChange={handleInputChange}
        rows={4}
        required
        disabled={isSubmitting}
        placeholder="Type your message here..."
        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-blue-900/50 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none"
      />
    </div>

    {submitStatus === 'success' && (
      <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
    )}

    <button
      type="submit"
      disabled={isSubmitting || !formData.message.trim()}
      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-medium hover:from-blue-500 hover:to-blue-300 transition-all duration-200 disabled:opacity-50"
    >
      {isSubmitting ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0..." />
        </svg>
      ) : (
        <>
          <span>Send Message</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </>
      )}
    </button>
  </form>
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
