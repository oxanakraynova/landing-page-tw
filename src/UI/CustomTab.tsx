interface CustomTabProps {
  onChange: (newValue: string) => void;
  sortingOption: string;
}

function CustomTab({ onChange, sortingOption }: CustomTabProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };
  return (
    <>
      <div className="flex flex-wrap items-center lg:items-start lg:justify-start justify-center text-sm font-medium text-center text-secondary mb-30 mt-12 md:mt-15 lg:mt-30 pb-[3.75rem]">
        <button
          className={`mr-4 text-lg font-bold ${
            sortingOption === "best"
              ? "bg-secondary text-white border-secondary"
              : "text-secondary bg-transparent"
          }`}
          onClick={(event) => handleChange(event, "best")}
          role="tab"
          aria-selected={sortingOption === "best"}
        >
          Nejlepší
        </button>
        <button
          className={`text-lg font-bold ${
            sortingOption === "worst"
              ? "bg-secondary text-white border-secondary "
              : "text-secondary bg-transparent"
          }`}
          onClick={(event) => handleChange(event, "worst")}
          role="tab"
          aria-selected={sortingOption === "worst"}
        >
          Nejhorší
        </button>
      </div>
    </>
  );
}
export default CustomTab;
