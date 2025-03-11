import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sending, setSending] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!/[1-9]\d{1,14}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setSending(true);

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Thanks for your feedback", {
        position: "top-center",
        autoClose: 5000,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send your message. Please try again.", {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Contact Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.firstName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.lastName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
              rows={4}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Your Message"}
          </button>
        </form>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}
