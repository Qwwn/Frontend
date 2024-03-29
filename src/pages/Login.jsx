import React from "react"
import Wrapper from "../components/wrapper/Wrapper"
import { Link } from 'react-router-dom'
import Header from '../common/header/Header';


const Login = () => {
  return (
    <><Header />
  <section className="main-container col1-layout">
    <div className="inside-col">
      <div className="breadcrumbs-sec">
        <div className="container">
          <div className="breadcrumbs">
            <ul>
              <li className="home">
                <a href="index.html" title="go to home page">
                  Home
                </a>
                <span>/</span>
              </li>
              <li>
                <strong>Masuk</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <article className="col-main">
              <div className="account-login">
                <fieldset className="col2-set">
                  <div className="registered-users">
                    <strong>Masuk</strong>
                    <div className="content">
                      <p>
                        Jika anda memiliki akun dengan kami, silahkan masuk.
                      </p>
                      <ul className="form-list">
                        <li>
                          <label htmlFor="email">
                            Alamat Email
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            title="alamat email"
                            className="input-text required-entry"
                            id="email"
                            defaultValue=""
                            name="login[username]"
                          />
                        </li>
                        <li>
                          <label htmlFor="pass">
                            Password
                            <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            title="password"
                            className="input-text required-entry validate-password"
                            id="pass"
                            name="login[password]"
                          />
                        </li>
                      </ul>
                      <p className="required">* wajib diisi</p>
                      <div id="masuk">
                        <button className="normal">Masuk</button>
                        <a className="forgot-word" href="#">
                          Lupa Password Anda?
                        </a>
                      </div>
                      <div>
                        <br />
                        <br />
                        <p>
                          Belum punya akun?{" "}
                          <Link to="/register">Register</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
      <Wrapper />
    </>
  )
}

export default Login
