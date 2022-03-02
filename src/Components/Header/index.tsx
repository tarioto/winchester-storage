import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/pro-duotone-svg-icons'

function Header() {
  return (
    <div>
      <FontAwesomeIcon icon={faWarehouse} className="d-inline-block"/>{' '}
      <span>Winchester RV & Boat Storage</span>
    </div>
  );
}

export default Header;
