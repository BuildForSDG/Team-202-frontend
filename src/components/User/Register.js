import React from 'react';

const UserRegister = () => {
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" type="tel" />
        </div>
        <div>
          <div>
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input name="confirmPassword" type="password" />
          </div>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
