const ProjectCard = ({ projectName, projectImage, projectDescription}) => {
    return (
        <div>
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={projectImage} alt="Project image" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{projectName}</h3>
              <p className="text-gray-600">{projectDescription}</p>
            </div>
        </div>
    )
}

export default ProjectCard;