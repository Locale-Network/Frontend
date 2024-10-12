import { useEffect, useRef } from 'react';
import { create as blockies } from 'ethereum-blockies';

const Identicon = ({ address }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && address) {
      const icon = blockies({
        seed: address.toLowerCase(),
        size: 8,
        scale: 5
      });

      ref.current.innerHTML = '';
      ref.current.appendChild(icon);
    }
  }, [address]);

  return (
    <div ref={ref} style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }} />
  );
};

export default Identicon;