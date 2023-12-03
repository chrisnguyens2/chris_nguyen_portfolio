import { TechnologyIcon } from "./technologyIcon";

export const ExperienceRecord = (props: {
    startDate: string;
    endDate: string;
    websiteUrl: string;
    company: string;
    positionTitle: string;
    positionDesc: string;
    technologiesUsed: string[];
  }) => {
    return (
      <li className="mb-10 flex gap-10">
        <div className="w-1/6 text-xs uppercase">
          {props.startDate} - {props.endDate}
        </div>
        <div className="w-5/6">
          <h3 className="font-bold">
            <div>
              <a
                className="hover:text-orange-300"
                href={props.websiteUrl}
                target="_blank"
              >
                {props.company}
              </a>
            </div>
          </h3>
          <h3>{props.positionTitle}</h3>
          <p className="mt-2 text-sm">{props.positionDesc}</p>
          <ul className="mt-2 flex gap-2">
            {props.technologiesUsed.map((t) => {
              return <TechnologyIcon key={t} techName={t} />;
            })}
          </ul>
        </div>
      </li>
    );
  };