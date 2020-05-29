import React from 'react';
import User from '../../../components/User';
import BgImage from '../../../components/images/bg-login.jpg';

const AuthUser = () => {
  return (
    <div className="grid sm:grid-cols-2 h-full h-screen">
      <div className="bg-cover" style={{ backgroundImage: `url(${BgImage})` }}>
        {/* <img src="" alt="bg_image" /> */}
      </div>
      <div className="bg-teal-200">
        <User />
      </div>
    </div>
  );
};

export default AuthUser;
