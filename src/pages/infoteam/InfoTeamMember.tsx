import { useParams, useNavigate } from 'react-router-dom';

import InfoTeam1 from '../../infoteam/1';
import InfoTeam2 from '../../infoteam/2';
import InfoTeam3 from '../../infoteam/3';
import InfoTeam12 from '../../infoteam/12';
import InfoTeam13 from '../../infoteam/13';
import InfoTeam14 from '../../infoteam/14';
import InfoTeam21 from '../../infoteam/21';
import InfoTeam22 from '../../infoteam/22';
import InfoTeam23 from '../../infoteam/23';
import InfoTeam24 from '../../infoteam/24';
import InfoTeam31 from '../../infoteam/31';
import InfoTeam32 from '../../infoteam/32';

const InfoTeamMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  switch (id) {
    case '1':
      return <InfoTeam1 />;
    case '2':
      return <InfoTeam2 />;
    case '3':
      return <InfoTeam3 />;
    case '12':
      return <InfoTeam12 />;
    case '13':
      return <InfoTeam13 />;
    case '14':
      return <InfoTeam14 />;
    case '21':
      return <InfoTeam21 />;
    case '22':
      return <InfoTeam22 />;
    case '23':
      return <InfoTeam23 />;
    case '24':
      return <InfoTeam24 />;
    case '31':
      return <InfoTeam31 />;
    case '32':
      return <InfoTeam32 />;
    default:
      // Redirection vers /about si id invalide
      navigate('/about');
      return <div>Redirecting...</div>;
  }
};

export default InfoTeamMember;
