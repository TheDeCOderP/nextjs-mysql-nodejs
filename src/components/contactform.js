import React, { useState } from "react";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Thank you for your message. Our team will contact you shortly.");
    } catch (error) {
      console.error("Submission error:", error);
      alert("We encountered an error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-8 ">
      <div className="w-full  mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:w-[70vw]">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-6 px-4">
          <h2 className="text-xl font-bold md:text-2xl">Contact Our Dental Practice</h2>
          <p className="text-sm text-blue-100 mt-2">
            We're here to help you achieve your best smile.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {[
            {
              label: "Full Name",
              id: "name",
              type: "text",
              placeholder: "Enter your full name",
              icon: <User className="text-blue-500" size={18} />,
            },
            {
              label: "Email Address",
              id: "email",
              type: "email",
              placeholder: "you@example.com",
              icon: <Mail className="text-blue-500" size={18} />,
            },
            {
              label: "Phone Number",
              id: "phone",
              type: "tel",
              placeholder: "(555) 123-4567",
              icon: <Phone className="text-blue-500" size={18} />,
            },
          ].map((field) => (
            <div className="relative" key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{field.icon}</div>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
            </div>
          ))}

          {/* Message Field */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-blue-500" size={18} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your dental care needs"
                rows={4}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-blue-800 px-4 py-4">
          We respect your privacy and will never share your information.
        </div>
      </div>
    </div>
  );
}
