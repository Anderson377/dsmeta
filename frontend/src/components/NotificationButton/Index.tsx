import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
  saleiD: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log("SUCESSO");
    });
}

function NotificationButton({ saleiD }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleiD)}>
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton