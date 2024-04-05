'use client'

import { useState } from 'react';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import modal from '../app/styles/modal.module.sass'
import checkbox from '../app/styles/checkbox.module.sass'
import input from '../app/styles/input.module.sass'
import text from '../app/styles/text.module.sass'
import options from '../app/styles/options.module.sass'
import button from '../app/styles/button.module.sass'
import { socialMedia } from '@/app/utils/array';


export function Login() {
  const [password, setPassword] = useState(false);

  function togglePasswordVisibility() {
    setPassword(!password)
  }

  return (
      <div className={modal.form}>
        <div className={modal.login}>
          <h2 className={modal.modalTitle}>
            Login
          </h2>
          <section className={input.inputSection}>
            <p className={input.label}>
              Email
            </p>
            <input className={input.input} placeholder='robert.langster@gmail.com' />
            <p className={input.label}>
              Password
            </p>
            <div className={input.inputPasswordContainer}>
              <input
                type={password ? 'text' : 'password'}
                className={input.input}
              />
              {password ? (
                <VisibilityIcon
                  className={input.visibilityIcon}
                  onClick={togglePasswordVisibility}
                />
                ) : (
                <VisibilityOffIcon
                  className={input.visibilityIcon}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </section>
          <section className={checkbox.section}>
          <div className={checkbox.remember}>
            <input type="checkbox" className={input.inputCheckbox} />
            <p className={text.textRemember}>Remember me</p>
          </div>
          <p className={text.textForgot}>Forgot password?</p>
        </section>
        <div className={modal.space}>
          <section className={button.buttons}>
            <button className={button.loginButton}>
              <p className={modal.loginText}>Login</p>
            </button>
            <button className={button.signUpButton}>
              <p className={modal.SignUpText}>Sign Up</p>
            </button>
          </section>
          <section className={options.options}>
            <p className={text.textOptions}>Or, login with</p>
            <div className={button.buttonsSocialMedias}>
              {socialMedia.map((item) => (
                <button key={item.id} className={button.buttonSm}>
                  {item.name}
                </button>
              ))}
            </div>
          </section>
        </div>
        </div>
      </div>
  )
}