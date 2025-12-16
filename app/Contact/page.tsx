import { BiPhone, BiEnvelope } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <div className="px-[8%] lg:px-[16%] py-20 text-white">
      <div className="grid lg:grid-cols-2 gap-12 w-full">

        {/* Contact Form */}
        <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg">
          <h2 className="text-5xl font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
            Let’s work together
          </h2>

          <p className="text-sm text-gray-400 my-8">
            Have a question, opportunity, or collaboration in mind?
            Feel free to reach out using the form below.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition-all duration-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition-all duration-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition-all duration-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition-all duration-500"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
              px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)]
              transition-all duration-500"
            ></textarea>

            <button
              type="submit"
              className="bg-[var(--primary-color)] hover:bg-white
              text-white hover:text-black px-6 py-3 mt-5 rounded-lg
              font-semibold transition-all duration-500 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6 justify-center">

          {/* Phone */}
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)]
            rounded-lg text-[color:var(--primary-color)]">
              <BiPhone size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">(+1) 609 289 7279</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] border border-[var(--primary-color)]
            p-4 rounded-lg text-[color:var(--primary-color)]">
              <BiEnvelope size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">shrey9779@gmail.com</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="contact-col flex items-center space-x-4">
            <span className="bg-[#1a1b1f] border border-[var(--primary-color)]
            p-4 rounded-lg text-[color:var(--primary-color)]">
              <FaWhatsapp size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">WhatsApp</p>
              <p className="font-medium">(+1) 609 289 7279</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
