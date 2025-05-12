import React from "react";
import { FaPalette, FaLeaf, FaUserAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-20 px-6 md:px-12">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          About Timeless Interiors
        </h2>
        <p className="text-xl md:text-2xl text-white mt-4 font-light max-w-3xl mx-auto">
          Transforming Spaces, Creating Lasting Impressions through timeless designs that exude sophistication and functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Company Section */}
        <div className="flex flex-col justify-center px-4">
          <h3 className="text-3xl font-semibold text-white mb-6 flex items-center justify-center">
            <FaPalette className="mr-3 text-[#F1C40F] text-3xl" />
            Our Story
          </h3>
          <p className="text-lg text-white leading-relaxed mb-6">
            At Timeless Interiors, we believe that interior design should be both functional and beautiful. Founded with a passion for design and a commitment to quality, we specialize in creating spaces that reflect your unique style. From luxurious living rooms to functional kitchens and serene bedrooms, our designs are timeless, sophisticated, and made to stand the test of time.
          </p>
          <p className="text-lg text-white leading-relaxed mb-6">
            Our team of experienced designers works closely with clients to ensure that every project reflects the essence of elegance, comfort, and style. Whether it's a residential or commercial space, we approach each project with creativity and dedication, crafting spaces that inspire and enhance the everyday experience.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex flex-col items-center justify-center px-4">
          <h3 className="text-3xl font-semibold text-white mb-6 flex items-center justify-center">
            <FaUserAlt className="mr-3 text-[#F1C40F] text-3xl" />
            Meet Our CEO - Ifeanyi Francis
          </h3>
          <div className="relative">
            <img
              src="https://via.placeholder.com/200"
              alt="Ifeanyi Francis"
              className="rounded-full w-48 h-48 mb-6 shadow-xl transform transition duration-300 hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-full"></div>
          </div>
          <p className="text-lg text-white leading-relaxed mb-4">
            Ifeanyi Francis is the visionary CEO and Founder of Timeless Interiors. With over 5 years of experience in the interior design industry, Ifeanyi has established a reputation for creating innovative and stunning designs that blend form with function.
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            His dedication to the art of interior design has transformed many residential and commercial spaces into masterpieces. Ifeanyi's attention to detail and passion for creating beautiful, practical environments has made Timeless Interiors a leading name in the industry.
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            As a thought leader in design, Ifeanyi is committed to using sustainable materials and eco-friendly design practices to create interiors that are not only beautiful but also environmentally conscious.
          </p>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-white mb-6 flex items-center justify-center">
          <FaLeaf className="mr-3 text-[#F1C40F] text-3xl" />
          Our Commitment to Sustainability
        </h3>
        <p className="text-lg text-white leading-relaxed mb-6 max-w-3xl mx-auto">
          We believe in creating designs that are not only beautiful but also environmentally responsible. Our team is committed to using sustainable materials and eco-friendly practices to minimize the environmental impact of our designs. From sourcing natural materials to implementing energy-efficient solutions, we are dedicated to making design a force for good.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
