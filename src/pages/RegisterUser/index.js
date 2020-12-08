import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'
import './style.css'
import Header from '../Header'

export default function RegisterUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const data = {
        name,
        email,
        password,
      }

      console.log(data)

      await api.post('/user-register', data)

      alert('Cadastro realizado com sucesso!')
      return history.push('/')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <div className="container">
      <Header />

      <form onSubmit={handleSubmit} className="janela">
        <div className="profile-container">
          <fieldset>
            <legend>Cadastrar Usuário</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <br />
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
              <label htmlFor="name">Senha</label>
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
                Cadastrar
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}
