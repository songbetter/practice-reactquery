import { useState } from 'react'

const AuthForm = () => {
  const [isNew, setIsNew] = useState(false)
  const [isHello, setIsHello] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [auth, setAuth] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    passwordConfirm: '',
  })

  const onChange = (e) => {
    setAuth({ ...auth, ...{ [e.target.name]: e.target.value } })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    isHello && setIsHello(!isHello)
    isNew && setIsComplete(!isComplete)
  }

  const formValue = isNew
    ? SIGN_UP_VALUE
    : !isHello
    ? SIGN_IN_VALUE
    : EMAIL_VALUE

  return (
    <>
      <button
        className="mt-4 ml-4 p-2 border-dotted border-orange border-2"
        onClick={() => setIsNew(!isNew)}
      >
        나 신규인디
      </button>
      {isComplete ? (
        <div className="p-4 text-2xl">{auth.name}님 환영합니다</div>
      ) : (
        <form onSubmit={onSubmit} className="p-4">
          {formValue.map((data, index) => (
            <div key={index} className="py-2">
              <label className="text-lg">{data.label} </label>
              <input
                className="border-2 px-2 border-blue border-solid"
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                onChange={onChange}
                value={auth[data.name]}
              />
            </div>
          ))}
          <button className="btn-primary" typeof="submit">
            {isNew ? '회원가입' : '로그인'}
          </button>
        </form>
      )}
    </>
  )
}

export default AuthForm
const EMAIL_VALUE = [
  {
    label: 'email',
    type: 'email',
    name: 'email',
    placeholder: '예) abc@gmail.com',
  },
]

const SIGN_UP_VALUE = [
  EMAIL_VALUE[0],
  {
    label: 'name',
    type: 'text',
    name: 'name',
    placeholder: '예)',
  },
  {
    label: 'mobile',
    type: 'tel',
    name: 'mobile',
    placeholder: '예) 01012341234',
  },
  {
    label: 'password',
    type: 'password',
    name: 'password',
    placeholder: '예) abcabc11!',
  },
  {
    label: 'passwordConfirm',
    type: 'password',
    name: 'passwordConfirm',
    placeholder: '예) abcabc11!',
  },
]

const SIGN_IN_VALUE = [
  EMAIL_VALUE[0],
  {
    label: 'password',
    type: 'password',
    name: 'password',
    placeholder: '예) abcabc11!',
  },
]
