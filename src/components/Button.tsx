import "../css/Components.css";

type IconButtonProps = {
  text: string;
};

export const Button = ({ text }: IconButtonProps) => {
  return (
    <div className="button-container">
      <button className="button">
        <p>{text}</p>
      </button>
    </div>
  );
};
