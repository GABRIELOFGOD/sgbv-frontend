const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 container mx-auto">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">
          Have a question or want to work together? Fill out the form below and we will get back to you.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Or reach us at:
          </p>
          <p className="text-gray-600 mt-2">
            📧 <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a>
          </p>
          <p className="text-gray-600 mt-2">
            📞 +1 (234) 567-890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
