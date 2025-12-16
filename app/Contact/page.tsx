import { BiPhone, BiEnvelope } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <section className="px-[6%] lg:px-[16%] py-16 pb-28 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

        {/* Contact Form */}
        <div className="bg-gray-500/5 p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-unbounded font-normal 
            text-[color:var(--primary-color)] mb-3">
            Let’s work together
          </h2>

          <p className="text-sm sm:text-base text-gray-400 my-6 max-w-md">
            Have a question, opportunity, or collaboration in mind?
            Feel free to reach out using the form below.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
                px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary-color)]
                transition"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Type your message here..."
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg
              px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary-color)]
              transition resize-none"
            />

            <button
              type="submit"
              className="bg-[var(--primary-color)] hover:bg-white
              text-white hover:text-black px-6 py-3 mt-4 rounded-lg
              font-semibold transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 justify-center">

          {/* Phone */}
          <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
            <span className="bg-[#1a1b1f] p-3 border border-[var(--primary-color)]
            rounded-lg text-[color:var(--primary-color)]">
              <BiPhone size={22} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="font-medium text-sm sm:text-base">
                (+1) 609 289 7279
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
            <span className="bg-[#1a1b1f] p-3 border border-[var(--primary-color)]
            rounded-lg text-[color:var(--primary-color)]">
              <BiEnvelope size={22} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="font-medium text-sm sm:text-base">
                shrey9779@gmail.com
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <span className="bg-[#1a1b1f] p-3 border border-[var(--primary-color)]
            rounded-lg text-[color:var(--primary-color)]">
              <FaWhatsapp size={22} />
            </span>
            <div>
              <p className="text-xs text-gray-400">WhatsApp</p>
              <p className="font-medium text-sm sm:text-base">
                (+1) 609 289 7279
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
