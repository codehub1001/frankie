import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "A contemporary living room with minimalist furniture and elegant lighting.",
    images: [
      "./img/img1.jpg", // Image 1
      "./img/img2.jpg", // Image 2
      "./img/img4.jpg", // Image 3
    ],
  },
  {
    id: 2,
    title: "Luxury Bedroom",
    description: "A luxurious bedroom featuring rich textures and modern amenities.",
    images: [
      "./img/img2.jpg", // Image 1
      "./img/img1.jpg", // Image 2
      "./img/img3.jpg", // Image 3
    ],
  },
  {
    id: 3,
    title: "Stylish Kitchen",
    description: "A stylish and functional kitchen with state-of-the-art appliances.",
    images: [
      "./img/img3.jpg", // Image 1
      "./img/img4.jpg", // Image 2
      "./img/img3.jpg", // Image 3
    ],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Control auto-slide

  // Set interval for auto-sliding images
  useEffect(() => {
    let interval;
    if (selectedProject && autoSlide) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
      }, 3000); // Change image every 3 seconds
    }
    
    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted or modal is closed
    };
  }, [selectedProject, autoSlide]);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image
    setAutoSlide(true); // Enable auto-sliding when modal is opened
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    setAutoSlide(false); // Disable auto-sliding when modal is closed
    document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    setAutoSlide(false); // Pause auto-sliding when user manually navigates
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
    setAutoSlide(false); // Pause auto-sliding when user manually navigates
  };

  if (selectedProject) {
    document.addEventListener("keydown", handleKeyDown);
  } else {
    document.removeEventListener("keydown", handleKeyDown);
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our Latest Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openModal(project)}
          >
            <img
              src={project.images[0]} // Display the first image in the gallery
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white p-4 text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Multiple Images */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out opacity-100">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full shadow-lg transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl font-semibold text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">{selectedProject.title}</h3>

            {/* Image Carousel */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]} // Display the current image
                alt={selectedProject.title}
                className="w-full h-96 object-cover mb-4 rounded-lg shadow-md"
              />
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 text-2xl text-white transform -translate-y-1/2"
              >
                ◁
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 text-2xl text-white transform -translate-y-1/2"
              >
                ▷
              </button>
            </div>

            <p className="text-lg text-gray-700">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
