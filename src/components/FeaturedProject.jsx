const FeaturedProject = ({ project }) => {
  const header = project.attributes.Header;
  const baseUrl = 'http://localhost:1337';
  const thumbnailUrl = `${baseUrl}${header.data.attributes.formats.thumbnail.url}`;
  const smallUrl = `${baseUrl}${header.data.attributes.formats.small.url}`;
  const mediumUrl = `${baseUrl}${header.data.attributes.formats.medium.url}`;
  const largeUrl = `${baseUrl}${header.data.attributes.formats.large.url}`;

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
          <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">Django</div>
          <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">React</div>
          <div className="px-4 py-1 text-sm rounded-2xl bg-cyan-500">OpenStreetMap</div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
