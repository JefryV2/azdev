import React, { useState } from 'react';

const FlyTraderPreview: React.FC = () => {
  const [src, setSrc] = useState('/assets/flytrader.gif');

  return (
    <div className="flytrader-preview absolute inset-0 overflow-hidden bg-[#09090B] pointer-events-none">
      <img
        src={src}
        alt="FlyTrader dashboard preview"
        onError={() => {
          if (src !== '/assets/flytrader.png') {
            setSrc('/assets/flytrader.png');
          }
        }}
        className="no-hover-zoom absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default FlyTraderPreview;
