import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('api/auth/login', data)

    localStorage.setItem('token', res.data.token)
    console.log('signed in')
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('api/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('api/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
