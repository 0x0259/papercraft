'use strict';

var littlest = require('littlest-isomorph');
var React = require('react');
var Banner = require('../banner.jsx');

var Login = React.createClass({
  mixins: [littlest.Mixin],
  mappings: {
    user: 'auth:user'
  },
  submitSignin: function () {
    event.preventDefault();

    var email = this.refs.emailField.getDOMNode().value.trim();
    var password = this.refs.passwordField.getDOMNode().value;

    this.context.performAction('auth:signin', {
      email: email,
      password: password
    });
  },
  render: function () {
    return (
      <div>
        <div className='grid-background' />
        <div className='login'>
          <Banner size='64' />
          <form className='login__form' onSubmit={this.submitSignin}>
            <input className='login__form__input' type='text' name='username' placeholder='Username' ref='emailField' />
            <input className='login__form__input' type='password' name='password' placeholder='Password' ref='passwordField' />
            <button className='login__form__button login__form__button--submit'>Login to Papercraft</button>
            <button type='submit' className='login__form__button login__form__button--register'>Register an Account</button>
          </form>
          <div>
            {this.state.user ? this.state.user.alias : ''}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Login;
