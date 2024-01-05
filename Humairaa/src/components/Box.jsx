// Dummy data for demonstration purposes
const projects = [
    {
      image: '/path-to-your-image/image1.jpg',
      imageAlt: 'Project 1 Image',
      projectTitle: 'Project 1',
      projectDescription: 'This is the description for Project 1.',
      projectLink: '/projects/project1',
    },
    // Add more project objects as needed
  ];
  
  // Parent component or page
  export default function ProjectsPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through projects and render ProjectCard for each */}
          {projects.map((project, index) => (
            <ProjectCard key={index} projectObj={project} />
          ))}
        </div>
      </div>
    );
  }