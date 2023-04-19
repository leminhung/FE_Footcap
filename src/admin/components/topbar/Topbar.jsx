import "./topbar.scss";

const Topbar = () => {
  return (
    <div className='topbarComponent'>
      <div className='wrapper'>
        <div className='left'>
          <img
            src='/images/logo.svg'
            alt='FootCapAdmin'
            width={150}
            height={55}
          />
        </div>
        <div className='right'>
          {/* <div className="icon">
            <NotificationsNone />
            <span>2</span>
          </div>
          <div className="icon">
            <Language />
            <span>2</span>
          </div>
          <div className="icon">
            <Settings />
          </div> */}
          <div className='avatar-admin-hover'>
            <img
              className='avatar-admin'
              src='https://i.ibb.co/xG2ygZT/btter.jpg'
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
