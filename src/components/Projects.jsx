const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Machine Learning",
      description: "Intelligent analytics dashboard that provides real-time insights and predictive analytics for business decision making.",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      technologies: ["React Native", "Firebase", "Biometric API", "Redux"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Cloud Migration Solution",
      category: "Cloud Solutions",
      description: "Comprehensive cloud migration strategy and implementation for enterprise-level applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Cybersecurity Monitoring System",
      category: "Cybersecurity",
      description: "Advanced security monitoring system with real-time threat detection and automated response capabilities.",
      technologies: ["Python", "Elasticsearch", "Kibana", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Digital Transformation Platform",
      category: "Consulting",
      description: "End-to-end digital transformation platform helping businesses modernize their operations and workflows.",
      technologies: ["Microservices", "API Gateway", "Event Streaming", "CI/CD"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Explore our portfolio of successful projects that demonstrate our expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-orange-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="btn-secondary w-full">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 