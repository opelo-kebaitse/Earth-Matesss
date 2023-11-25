import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUser.ts'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const { user, getAccessTokenSilently } = useAuth0()
  const userDB = useUser()
  const navigate = useNavigate()
  const initialFormData = {
    name: '',
    email: '',
    auth0Id: '',
  }
  console.log(user)
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (userDB.data) navigate('/')
  }, [userDB.data, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!user || user.email == undefined || user.sub == undefined) {
      return console.error('No user logged in')
    }
    setFormData({ email: user.email, auth0Id: user.sub, name: value })
  }

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    userDB.add.mutate({ formData, token })
    navigate('/')
  }
  // to do:
  // mutation that adds user --> use add from useEvents
  // write api function in apis/users
  // write the post call in routes to call db function
  // write a db function

  // also we need to run lint and fix the errors and warnings before code review

  return (
    <>
      <h2>Welcome to EarthMates</h2>
      <form className="form-group">
        <label htmlFor="firstName"> First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={formData.name}
          required
        />
        {/* <label HTMLfor='lastName'>Last Name</label>
    <input id='lastName' name='lastName' type='text' onchange={handleChange} value={formData.lastName}/>
    <label HTMLfor='location'>Location</label>
    <input id='location' name='location' type='text' onchange={handleChange} value={formData.location}/> */}
        <button className="post-event" onClick={handleRegister}>
          Register
        </button>
      </form>
    </>
  )
}
