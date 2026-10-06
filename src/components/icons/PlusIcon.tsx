type IconProps = {
    width?: number | string;
    height?: number | string;
    fill?: string;
};

function PlusIcon({ }: IconProps) {
    return (
        <svg width="12px" height="12px" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <g clip-path="url(#clip0_9075_1522)">
                <path d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z" fill="#212529"></path>
            </g>
            <defs>
                <clipPath id="clip0_9075_1522">
                    <rect width="12" height="12" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
}

export default PlusIcon;