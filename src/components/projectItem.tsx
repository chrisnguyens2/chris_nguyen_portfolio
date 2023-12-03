import { TechnologyIcon } from "./technologyIcon";
import Image from "next/image";

export const ProjectItem = (props: {
    imageUrl: string;
    websiteUrl: string;
    name: string;
    description: string;
    technologiesUsed: string[];
  }) => {
    return (
      <li className="mb-10 flex gap-10">
        <div className="w-1/6">
          <Image
            className="rounded-md border-slate-400/50 border-2"
            src={props.imageUrl}
            alt={`image of ${props.name}`}
            width={200}
            height={60}
          />
        </div>
        <div className="w-5/6">
          <h3 className="font-bold">
            <div>
              <a
                className="hover:text-orange-300"
                href={props.websiteUrl}
                target="_blank"
              >
                {props.name}
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm">{props.description}</p>
          <ul className="mt-2 flex gap-2">
            {props.technologiesUsed.map((t) => {
              return <TechnologyIcon key={t} techName={t} />;
            })}
          </ul>
        </div>
      </li>
    );
  };