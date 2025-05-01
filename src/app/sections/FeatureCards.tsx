import { projects } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {projects.map(({ techStack, title, desc, url }) => (
          <a
            href={url}
            target="_blank"
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="flex items-center justify-center">
              <p className="text-white-50 text-sm">{techStack}</p>
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2 ">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
