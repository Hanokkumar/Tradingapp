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

import { Stack, Alert, Box } from '@mui/material';


function Page() {
    const [userinfo, setUserinfo] = useState({})
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [passworderror, setPassworderror] = useState(false)
    const [passwordsuccess, setPasswordsuccess] = useState(false)
    const [matchpassword, setMatchpassword] = useState(false)
    const [confirmpassworderror, setconfirmpassworderror] = useState(false)
    const router = useRouter()

  useEffect(() => {
  
    const data  = localStorage.getItem('Userinfo')
      setUserinfo(JSON.parse(data))
  }, [])
    const changepassword = async() => {
      if (password !== "" && confirmpassword !=="") {
        
      if(password == confirmpassword) {

      
        const response = await fetch("/api/Changepassword", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({Password:password,RegistrationId:JSON.parse(localStorage.getItem('Userinfo')).RegistrationId}
        ),
      }).then((res) => res.json()).then((data) => {
        setPasswordsuccess(true)
        setTimeout(() => {
          setPasswordsuccess(false)
        }, 3000);
        router.push('/Login')

    })
  }else {
    setMatchpassword(true)
    setTimeout(() => {
      setMatchpassword(false)
    },3000);
        }
    
      
      }else {
        if (password.length ===0) {
          setPassworderror(true)
        }
        if (confirmpassword.length === 0) {
        setconfirmpassworderror(true)  
        }
        setTimeout(() => {
          setPassworderror(false)
          setconfirmpassworderror(false)
        }, 3000);
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
            <Typography variant='h6'>{`Change Password`}</Typography>
          </div>
            <TextField
              autoFocus
              fullWidth
              label='New Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            />
            {passworderror &&         
             <p style={{color:"red"}}>Please Enter your New Password</p>
            }

<TextField
              autoFocus
              fullWidth
              label='Confirm Password'
            value={confirmpassword}
            onChange={(e)=>setConfirmpassword(e.target.value)}
            
            />
            {confirmpassworderror &&         
             <p style={{color:"red"}}>Please Enter your Confirm Password</p>
            }


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
    {passwordsuccess &&
      <Box sx={{ position: 'fixed', top: 0, right: 0, p: 2, zIndex: 9999 }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="success">
          Password Changed Successfully
        </Alert>
      </Stack>
    </Box>}
    {matchpassword &&
      <Box sx={{ position: 'fixed', top: 0, right: 0, p: 2, zIndex: 9999 }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="warning">
      Password and Confirm Password does not Match
        </Alert>
      </Stack>
    </Box>}





  </div>  )
}

export default Page