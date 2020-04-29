import { useMediaQuery } from 'react-responsive';


const Desktop = ({ children }) => {
  const isAboveMinScreenWidth = useMediaQuery({
    query: '(min-device-width: 960px)',
  });
  return isAboveMinScreenWidth ? children : null;
};

const Mobile = ({ children }) => {
  const isBelowScreenWidth = useMediaQuery({
    query: '(max-device-width: 960px)',
  });
  return isBelowScreenWidth ? children : null;
};

export { Desktop, Mobile };
