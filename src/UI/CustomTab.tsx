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
      <div className="flex flex-wrap text-sm font-medium text-center text-secondary mb-30 lg:mt-30 md:mt-15 sm:mt-12">
        <button
          className={`mr-4 text-lg font-bold ${
            sortingOption === "best"
              ? "bg-secondary text-white border-secondary"
              : "text-secondary"
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
              : "text-secondary"
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