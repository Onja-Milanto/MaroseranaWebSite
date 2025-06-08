import React from "react";

interface FlowingLinesProps {
    lineCount?: number;
    color?: string;
    width?: number | string;
    height?: number | string;
    speed?: number; // seconds per animation loop
}

const FlowingLines: React.FC<FlowingLinesProps> = ({
    lineCount = 5,
    color = "#4F8EF7",
    width = "100%",
    height = 120,
    speed = 3,
}) => {
    const lines = Array.from({ length: lineCount });

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 400 ${height}`}
            style={{ display: "block", width: "100%", height }}
        >
            {lines.map((_, i) => {
                const y = (height as number) / (lineCount + 1) * (i + 1);
                const delay = (i * speed) / lineCount;
                return (
                    <path
                        key={i}
                        d={`
                            M 0,${y}
                            C 100,${y - 20} 300,${y + 20} 400,${y}
                        `}
                        fill="none"
                        stroke={color}
                        strokeWidth={2}
                    >
                        <animate
                            attributeName="d"
                            values={`
                                M 0,${y}
                                C 100,${y - 20} 300,${y + 20} 400,${y};
                                M 0,${y}
                                C 100,${y + 20} 300,${y - 20} 400,${y};
                                M 0,${y}
                                C 100,${y - 20} 300,${y + 20} 400,${y}
                            `}
                            dur={`${speed}s`}
                            repeatCount="indefinite"
                            begin={`${delay}s`}
                        />
                    </path>
                );
            })}
        </svg>
    );
};

export default FlowingLines;