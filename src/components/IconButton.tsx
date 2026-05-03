import "../css/Components.css";

type IconButtonProps = {
    source: string;
    linkable: boolean;
    link: string;
    large: boolean;
    ref?: React.Ref<HTMLDivElement> | undefined;
};

export const IconButton = ({
    source,
    linkable,
    link,
    large,
    ref,
}: IconButtonProps) => {
    return (
        <>
            {linkable ? (
                <a target="_blank" className="linkable-icon-button" href={link}>
                    <div
                        className={
                            !large
                                ? "icon-button-alt"
                                : "icon-button-alt icon-button-large"
                        }
                    >
                        <button className="button">
                            <img src={source} alt="" />
                        </button>
                    </div>
                </a>
            ) : (
                <div
                    ref={ref}
                    className={
                        !large ? "icon-button" : "icon-button icon-button-large"
                    }
                >
                    <button className="button">
                        <img draggable={false} src={source} alt="" />
                    </button>
                </div>
            )}
        </>
    );
};
