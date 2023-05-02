import { Visibility } from "@mui/icons-material";

import "./widgetSm.scss";

const WidgetSm = ({ usersData }) => {
  const NewJoinUsersData = [...usersData].reverse();

  return (
    <div className='widgetSmComponent mt-5'>
      <span className='title'>New Join Members</span>
      <ul>
        {NewJoinUsersData.slice(0, 6).map((user) => {
          return (
            <li key={user._id} className='justify-content-start'>
              <img src={user.avatar} alt={user.name} />
              <div className='ml-2 w-50'>
                <span className='username'>{user.name}</span>
                <span className='userTitle text-truncate '>{user.email}</span>
              </div>
              <button className='ml-5'>
                <Visibility className='icon' />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
