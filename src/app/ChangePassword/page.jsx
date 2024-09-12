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
import Illustrations from '@components/Illustrations'


import themeConfig from '@configs/themeConfig'

import { useImageVariant } from '@core/hooks/useImageVariant'


function page() {
    const [Userinfo, setUserinfo] = useState({})
  useEffect(() => {
  
    const data  = localStorage.getItem('Userinfo')
      setUserinfo(JSON.parse(data))
  }, [])
    const changepassword = async() => {
        const response = await fetch("/api/CoinDetails", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({Password:"2222",RegistrationId:JSON.parse(localStorage.getItem('Userinfo')).RegistrationId}
        ),
      }).then((res) => res.json()).then((data) => {
       
    })
      
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
            <Typography variant='h6'>{`Chage Password`}</Typography>
          </div>
            <TextField
              autoFocus
              fullWidth
              label='New Password'
            
            
            />
          
            <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
              {/* <FormControlLabel control={<Checkbox />} label='Remember me' />
              <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                Forgot password?
              </Typography> */}
            </div>
            <Button fullWidth onClick={changepassword} variant='contained' type='submit'>
              Change Password
            </Button>
        </div>
      </CardContent>
    </Card>
    {/* <Illustrations maskImg={{ src: authBackground }} /> */}
  </div>  )
}

export default page