"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  Building2,
  CheckCircle
} from "lucide-react";

type Property = {
  name: string;
  location: string;
  price: string;
  bhk: string;
  size: string;
  beds: string;
  baths: string;
  image: string;

  overview?: string;
  description?: string;
  amenities?: string[];
  highlights?: string[];
};

export default function PropertyClient({ property }: { property: Property }) {
  return (
    <section className="pt-40 pb-20 px-6 sm:px-10 lg:px-24 bg-[#f8f7f4] text-[#0c1b2a]">

      <div className="max-w-6xl mx-auto px-2 sm:px-4 grid lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">

          {/* IMAGE */}
          <motion.img
            src={property.image}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
          />

          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-bold text-[#0c1b2a] mb-2">
              {property.name}
            </h1>

            <p className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin size={18} className="text-[#C5A24A]" />
              {property.location}
            </p>

            <p className="text-2xl font-semibold text-[#C5A24A]">
              {property.price}
            </p>
          </div>

          {/* PROPERTY INFO */}
          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
              <Square className="text-[#C5A24A]" />
              <div>
                <p className="text-gray-500 text-xs">Area</p>
                <p className="font-semibold text-[#0c1b2a]">{property.size}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
              <BedDouble className="text-[#C5A24A]" />
              <div>
                <p className="text-gray-500 text-xs">Bedrooms</p>
                <p className="font-semibold text-[#0c1b2a]">{property.beds}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
              <Bath className="text-[#C5A24A]" />
              <div>
                <p className="text-gray-500 text-xs">Bathrooms</p>
                <p className="font-semibold text-[#0c1b2a]">{property.baths}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
              <Building2 className="text-[#C5A24A]" />
              <div>
                <p className="text-gray-500 text-xs">Configuration</p>
                <p className="font-semibold text-[#0c1b2a]">{property.bhk}</p>
              </div>
            </div>

          </div>

          {/* OVERVIEW */}
          {property.overview && (
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-[#0c1b2a]">
                Overview
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {property.overview}
              </p>
            </div>
          )}

          {/* PROJECT HIGHLIGHTS */}
          {property.description && (
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">

              <h3 className="text-xl font-semibold mb-4 text-[#0c1b2a]">
                Project Highlights
              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-sm">

                {property.highlights?.map((item, i) => (
                  <p
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle size={16} className="text-[#C5A24A]" />
                    {item}
                  </p>
                ))}

              </div>

            </div>
          )}

          {/* AMENITIES */}
          {property.amenities && (
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">

              <h3 className="text-xl font-semibold mb-4 text-[#0c1b2a]">
                Amenities
              </h3>

              <div className="grid md:grid-cols-3 gap-3 text-sm">

                {property.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#f1eee7] p-3 rounded-lg flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle size={16} className="text-[#C5A24A]" />
                    {item}
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit sticky top-32">

          <h3 className="text-xl font-semibold mb-4 text-[#0c1b2a]">
            Enquire Now
          </h3>

          <div className="space-y-3">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C5A24A]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C5A24A]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C5A24A]"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#C5A24A]"
            />

            <a
              href="https://wa.me/917738384100"
              target="_blank"
              className="block text-center bg-[#C5A24A] hover:bg-[#b8963e] text-white py-3 rounded-lg font-semibold transition"
            >
              Send Enquiry
            </a>

          </div>

          {/* <div className="border-t mt-6 pt-4 text-xs text-gray-500 space-y-1">

            <p>Builder: Royal Builders</p>
            <p>Possession: September 2027</p>
            <p>Units Available: 20+</p>

          </div> */}

        </div>

      </div>

    </section>
  );
}