interface ButtonProps {
  onClick: () => void;
}

function Footer({ onClick }: ButtonProps) {
  return (
    <div className="pt-[3.75rem] lg:pt-[7.5rem] flex justify-center">
      <button
        className="bg-info mt-30 text-secondary rounded-lg px-6 py-3 shadow-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 font-semibold"
        onClick={onClick}
      >
        Načíst další
      </button>
    </div>
  );
}

export default Footer;
