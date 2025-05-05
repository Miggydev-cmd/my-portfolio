export default function ProjectCard({ title, description }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    )
  }
  