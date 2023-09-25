import './LoginForm.css';

export const LoginForm = () => (
  <div className='container'>
    <h1 className='title_bold' id='LoginForm-title'>
      in Safari Montserrat font works fine, but in Chrome used Times New Roman instead.
      you can fix this if remove all page.route() in test
    </h1>
    <div>
      Username
      <input />
    </div>
    <div>
      Password
      <input type='password'/>
    </div>
  </div>
);
