type IconProps = {
    width?: number | string;
    height?: number | string;
    fill?: string;
};

function MinusIcon({ }: IconProps) {
    return (
        <svg width="12px" height="2px" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <rect y="2" width="2" height="12" transform="rotate(-90 0 2)" fill="#212529"></rect>
        </svg>
    );
}

export default MinusIcon;