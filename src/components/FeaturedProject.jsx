const FeaturedProject = ({ project }) => {
  const baseUrl = import.meta.env.VITE_STRAPI_URL
  const header = project.attributes.Header;
  const thumbnailUrl = `${baseUrl}${header.data.attributes.formats.thumbnail.url}`;
  const smallUrl = `${baseUrl}${header.data.attributes.formats.small.url}`;
  const mediumUrl = `${baseUrl}${header.data.attributes.formats.medium.url}`;
  const largeUrl = `${baseUrl}${header.data.attributes.formats.large.url}`;

  const technologies = project.attributes.technologies
  // console.log(technologies.data)
  technologies.data.map(i => console.log(i))

  return (
    <div key={project.id} className="grid px-4 py-6 rounded group md:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-8 hover:bg-slate-800 hover:cursor-pointer">
      <div className="flex justify-center col-span-3 md:col-span-1 md:block">
        <img
          src={thumbnailUrl}
          srcSet={`${thumbnailUrl} 245w, ${smallUrl} 500w, ${mediumUrl} 750w, ${largeUrl} 1000w`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt=""
          className="object-cover border-2 border-gray-300 rounded group-hover:border-cyan-500"
        />
      </div>
      <div className="col-span-3 md:col-span-2">
        <h2 className="text-lg font-medium text-center group-hover:text-blue-400 md:text-left">{project.attributes.Title}</h2>
        <p className="mt-2 text-md">{project.attributes.Summary}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4 md:justify-start">
          {technologies.data.map((tech) => {
            return (
              <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">{tech.attributes.name}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
