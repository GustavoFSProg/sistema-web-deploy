import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import './style.css'
import Header from '../Header'
// import { useHistory } from 'react-router-dom'

export default function Register() {
  const [email, setEmail] = useState('ana@gmail.com')
  const [password, setPassword] = useState('ana@123')

  // const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // console.log(email, password)

    try {
      const { data } = await api.post('/login', { email, password })

      if (!data.data) {
        return alert('ERRO tudo CAGADO')
      } else {
        console.log('token: ', data.token)

        // localStorage.setItem(('Token': 'valueTeste'))
        // localStorage.setItem('ongId', data.email)

        localStorage.setItem('token', data.token)
        // history.push('/lista')
        return alert('Login realizado com sucesso!')
      }

      // eslint-disable-next-line no-unreachable
    } catch (error) {
      return alert(`Deu erro no front ${error}`)
    }
  }

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div className="container">
      <Header />

      <form onSubmit={handleSubmit} className="janela">
        <div className="profile-container">
          <fieldset>
            <legend>Login de Usuario</legend>

            <div className="input-block">
              <label htmlFor="name">Email</label>
              <br />
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="name">Password</label>
              <br />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-block">
              <button className="confirm-button" type="submit">
                Logar
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}
