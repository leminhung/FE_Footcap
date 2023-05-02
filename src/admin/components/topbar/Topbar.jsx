import { useSelector } from "react-redux";
import "./topbar.scss";

const Topbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className='topbarComponent'>
      <div className='wrapper'>
        <div className='left'>
          <a href='/'>
            <img
              src='/images/logo.svg'
              alt='FootCapAdmin'
              width={150}
              height={55}
            />
          </a>
        </div>
        <div className='right'>
          <div className='avatar-admin-hover'>
            <img
              className='avatar-admin'
              src={
                userInfo?.actor.avatar
                  ? userInfo?.actor.avatar
                  : "https://i.ibb.co/xG2ygZT/btter.jpg"
              }
              alt='adminPic'
            />
            <ul className='account-option-list'>
              <a href='/'>
                <li>Home page</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
