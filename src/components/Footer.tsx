interface ButtonProps {
  onClick: () => void;
}

function Footer({ onClick }: ButtonProps) {
  return (
    <div className="p-8 flex justify-center">
      <button
        className="bg-info mt-30 text-primary rounded-lg px-6 py-3 shadow-lg hover:bg-info focus:outline-none focus:ring focus:ring-info focus:ring-opacity-50 font-semibold"
        onClick={onClick}
      >
        Načíst další
      </button>
    </div>
  );
}

export default Footer;
