interface IHui {}

export default class LoginForm extends React.Component<IHui, IHui> {
	render() {
    return (
      <div className='login'>
        <div className='wrapper'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='brand text-center'>
                <h1>
                  <div className='logo-icon'>
                    <i className='icon-beer fa fa-rocket'></i>
                  </div>
                  <span id="logo-text">Protoconstructor</span>
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form>
                <fieldset className='text-center'>
                  <legend>Login to your account</legend>
                  <div className='form-group'>
                    <input className='form-control' placeholder='Email address' type='text'/>
                  </div>
                  <div className='form-group'>
                    <input className='form-control' placeholder='Password' type='password'/>
                  </div>
                  <div className='text-center'>
                    <div className='checkbox'>
                      <label>
                        <input type='checkbox'/>
                        Remember me on this computer
                      </label>
                    </div>
                    <a className="btn btn-default" href="/dashboard.html">Sign in</a>
                    <br/>
                    <a href="/forgot_password.html">Forgot password?</a>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}