import React, { useState } from 'react';
import './Perspective.scss';

export function Perspective() {
    // Define an array of colors for each pentagon face
    const colors2 = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F4D03F', '#8E44AD'];
    const colors = ['#8E44AD', '#D9D9D9', '#33FF57', '#FF33A1', '#F4D03F', '#33FF57'];

    // Hover state for all pentagons
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="container"

        >
            <div className="floor"></div>
            <div             onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} className="cube">
                <div className="pentagon-cube">
                    {colors2.map((color, index) => (
                        <div key={index} className={`pentagon-face face-${index + 1}`}>
                            <PentagonSVG color={color} isHovered={isHovered} />
                        </div>
                    ))}
                </div>
                <div className="pentagon-cube2">
                    {colors.map((color, index) => (
                        <div key={index} className={`pentagon-face face-${index + 1}`}>
                            <PentagonSVG color={color} isHovered={isHovered} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// PentagonSVG component with dynamic color and size
const PentagonSVG = ({ color, isHovered }: { color: string; isHovered: boolean }) => {
    return (
        <svg
            width={isHovered ? "50" : "250"}
            height={isHovered ? "50" : "250"}
            viewBox="0 0 244 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transition: 'width 0.3s ease, height 0.3s ease' }}
        >
            <path
                d="M122 0L243.735 88.4458L197.237 231.554H46.7635L0.264763 88.4458L122 0Z"
                fill={color}
            />
        </svg>
    );
};
