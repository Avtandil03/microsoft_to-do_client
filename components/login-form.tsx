import AuthService from '@/services/authService'
import { AxiosError } from 'axios'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState(`Email can't be empty`)
  const [formValid, setformValid] = useState(false)
  const [passwordError, setPasswordError] = useState(`Password can't be empty`)
  const [responseError, setResponseError] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

  useEffect(() => {
    if (emailError || passwordError) {
      setformValid(false)
    } else {
      setformValid(true)
    }
  }, [emailError, passwordError])

  function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    const isValid = !!String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    if (isValid) {
      setEmailError('')
    } else {
      setEmailError('Incorrect email')
    }
  }

  function passwordHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
    if (e.target.value.length >= 4 && e.target.value.length <= 50) {
      setPasswordError('')
    } else {
      setPasswordError(
        `Password can't be less than 4 and more than 50 characters.`
      )
    }
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setResponseError('')
    try {
      let response = await AuthService.login(email, password)
      let user = response.data.user
      localStorage.setItem('token', response.data.accessToken)
      if (user.isActivated) {
        router.push('/')
      } else {
        setResponseMessage(
          `You have successfully logged in. But you can still confirm your mail ${user.email}`
        )
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error)
        setResponseError(error.response?.data.message)
      }
    }
  }

  return (
    <form className="px-10 select-none" onSubmit={handleSubmit}>
      <p className="text-red-800 text-xs h-4">{emailDirty && emailError}</p>
      <input
        className={clsx(
          'border-b-2 bg-transparent outline-none border-blue-600 w-full h-10 mb-3',
          emailDirty
            ? emailError.length
              ? 'border-red-600'
              : 'border-green-600'
            : ''
        )}
        type="email"
        name="email"
        placeholder="Email..."
        value={email}
        onChange={emailHandler}
        onBlur={onBlur}
      />

      <p className="text-red-800 text-xs h-4">
        {passwordDirty && passwordError}
      </p>
      <input
        className={clsx(
          'border-b-2 bg-transparent outline-none border-blue-600 w-full h-10 mb-3',
          passwordDirty
            ? passwordError.length
              ? 'border-red-600'
              : 'border-green-600'
            : ''
        )}
        type="password"
        name="password"
        placeholder="Password..."
        value={password}
        onChange={passwordHandler}
        onBlur={onBlur}
      />
      <div className="flex justify-end">
        <button
          className="w-48 h-8 box-border bg-[#333] hover:border-2 border-[#808080active:brightness-150 active:scale-[98%] text-sm disabled:hover:border-red-600 mb-3"
          type="submit"
          disabled={!formValid}
        >
          Login
        </button>
      </div>
      <p className="text-red-800 text-xs min-h-4">
        {responseError && responseError}
      </p>

      {responseMessage && (
        <>
          <p className="text-green-600 text-xs min-h-4">{responseMessage}</p>
          <Link className="text-sm underline text-blue-700" href="/">
            Go to home
          </Link>
        </>
      )}
    </form>
  )
}
