import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import SEO from "../../components/seo/SEO";
import GoogleMap from "../../components/map/GoogleMap";
import { company } from "../../data/company";
import {
  CONTACT_NUMBER,
  EMAIL,
  POSTAL_BOX,
  TELEPHONE,
  WORKING_HOURS,
  WHATSAPP_URL,
  PHONE_URL,
  EMAIL_URL,
  GOOGLE_MAPS_LINK,
} from "../../constants";
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS } from "../../constants/seo";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-orange-500" size={28} />,
      label: "Phone",
      value: CONTACT_NUMBER,
      link: PHONE_URL,
    },
    {
      icon: <Phone className="text-orange-500" size={28} />,
      label: "Telephone",
      value: TELEPHONE,
      link: PHONE_URL,
    },
    {
      icon: <Mail className="text-orange-500" size={28} />,
      label: "Email",
      value: EMAIL,
      link: EMAIL_URL,
    },
    {
      icon: <MapPin className="text-orange-500" size={28} />,
      label: "Address",
      value: company.address,
      link: GOOGLE_MAPS_LINK,
    },
    {
      icon: <Clock className="text-orange-500" size={28} />,
      label: "Working Hours",
      value: WORKING_HOURS,
      link: undefined,
    },
  ];

  return (
    <>
      <SEO
        title={SEO_TITLES.CONTACT}
        description={SEO_DESCRIPTIONS.CONTACT}
        keywords={SEO_KEYWORDS.CONTACT}
        pathname="/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with us for all your building materials needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{info.label}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-orange-500 transition-colors"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <p className="text-gray-600 mb-4">{POSTAL_BOX}</p>
              <p className="text-gray-600">{company.city}, {company.country}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Quick Actions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-8 rounded-xl shadow-md transition-colors flex flex-col items-center gap-4"
              >
                <MessageCircle size={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Chat on WhatsApp</h3>
                  <p className="text-green-100">Get instant responses to your queries</p>
                </div>
              </a>

              <a
                href={PHONE_URL}
                className="bg-orange-500 hover:bg-orange-600 text-white p-8 rounded-xl shadow-md transition-colors flex flex-col items-center gap-4"
              >
                <Phone size={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Call Us Now</h3>
                  <p className="text-orange-100">Speak directly with our team</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>

            <GoogleMap showLink />
          </motion.div>
        </div>
      </section>
    </>
  );
}
