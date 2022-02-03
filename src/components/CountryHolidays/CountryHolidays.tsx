import { Button } from '@mui/material';
import { FC } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CountryHolidays: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/countries/${params.countryCode}`);
  };

  return (
    <div>
      Country Holidays: {params.countryCode}

      <Link to="/">Go To Home</Link>
      <Button onClick={handleOnClick}>Go To Country Info Page</Button>
    </div>
  );
};

export default CountryHolidays;
