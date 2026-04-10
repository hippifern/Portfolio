import "../css/Components.css";

type IconButtonProps = {
  source: string;
  linkable: boolean;
  link: string;
  large: boolean;
};

export const IconButton = ({
  source,
  linkable,
  link,
  large,
}: IconButtonProps) => {
  return (
    <>
      {linkable ? (
        <a href={link}>
          <div
            className={!large ? "icon-button" : "icon-button icon-button-large"}
          >
            <button className="button">
              <img src={source} alt="" />
            </button>
          </div>
        </a>
      ) : (
        <div className="icon-button">
          <button className="button">
            <img src={source} alt="" />
          </button>
        </div>
      )}
    </>
  );
};
