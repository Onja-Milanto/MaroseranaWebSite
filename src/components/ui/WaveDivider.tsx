import React from 'react';

const WaveDivider: React.FC<{ flip?: boolean }> = ({ flip = false }) => {
  return (
    <div className="relative w-full overflow-hidden leading-none">
      <svg
        className={`w-full h-16 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#003366"
          fillOpacity="1"
          d="M0,160L40,154.7C80,149,160,139,240,128C320,117,400,107,480,122.7C560,139,640,181,720,186.7C800,192,880,160,960,128C1040,96,1120,64,1200,58.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
