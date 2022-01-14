import { NavLink } from 'react-router-dom';
import h from '../Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={h.dialog + ' ' + h.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;