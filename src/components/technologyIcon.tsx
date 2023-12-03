export const TechnologyIcon = (props: { techName: string }) => {
    return (
      <li>
        <div className="items-center rounded-full bg-red-800/80 px-3 py-1 text-xs font-semibold leading-5 text-orange-200">
          {props.techName}
        </div>
      </li>
    );
  };