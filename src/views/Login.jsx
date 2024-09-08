'use client'

// React Imports
import { useEffect, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
// import logoimage from "../assets/applogo.png"

// import Logo from '@components/layout/shared/applogo.png'
import Illustrations from '@components/Illustrations'


import themeConfig from '@configs/themeConfig'

import { useImageVariant } from '@core/hooks/useImageVariant'

const Login = ({ mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [Registerno, setRegisterno] = useState("")
  const [Password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const router = useRouter()
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const validate = () => {
    let tempErrors = {}

    if (!Registerno) tempErrors.Registerno = "Register No is required"
    if (!Password) tempErrors.Password = "Password is required"

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }
  
  useEffect(() => {
  localStorage.removeItem('Userinfo')
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const response = await fetch("/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registrationNumber: Registerno,
        password: Password
      }),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('Userinfo', JSON.stringify(data.user))

      router.push('/dashboard')
    } else {
      alert("Invalid Register No or Password. Please try again.")
    }
  }
  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href={{pathname: '/' }} className='flex justify-center items-center mbe-6'>
          <div className="hero-img">
          <img src='/images/logos/AppLogo.png' style={{height:'80px',width:'80px'}} alt="" />        </div>
            {/* App logo */}
            

          </Link>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4'>{`Login`}</Typography>
            </div>
            <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <TextField
                autoFocus
                fullWidth
                label='Register No'
                value={Registerno}
                onChange={e => setRegisterno(e.target.value)}
                error={!!errors.Registerno}
                helperText={errors.Registerno}
              />
              <TextField
                fullWidth
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                label='Password'
                id='outlined-adornment-password'
                type={isPasswordShown ? 'text' : 'password'}
                error={!!errors.Password}
                helperText={errors.Password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                {/* <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                  Forgot password?
                </Typography> */}
              </div>
              <Button fullWidth variant='contained' type='submit'>
                Log In
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default Login
