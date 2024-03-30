import React from 'react';

const Login = props => (
    <LoginForm />
);
  

class LoginForm extends React.Component{
  render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <form onSubmit={() => console.log("EU TENTEIIIIII")}>
        <div>
            <FormInput description="Username" placeholder="Enter your username" type="text" />
            <FormInput description="Password" placeholder="Enter your password" type="password"/>
            <FormButton title="Log in"/>
        </div>
    </form>
);

const FormButton = props => (
  <div id="button" className="row">
    <button type='submit' onClick={() => console.log("SubMETEU")}>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

export default Login