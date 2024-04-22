import { TButtonProp } from "../types/componentsProp";

const Button = ({ styles }: TButtonProp) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] outline-none ${styles}`}
    >Get Started</button>
  );
};

export { Button };
