//MUI Imports
'use client'

import React, { useEffect, useState }from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data = [
  {
    stats: '50',
    title: ' Bonus',
    color: 'primary',
    icon: 'ri-pie-chart-2-line'
  },
  {
    stats: '0',
    title: 'Level',
    color: 'success',
    icon: 'ri-group-line'
  },
  {
    stats: '50',
    color: 'warning',
    title: 'Total',
    icon: 'ri-macbook-line'
  },
  {
    stats: '0',
    color: 'info',
    title: 'Widthdraw',
    icon: 'ri-money-dollar-circle-line'
  }
]

const Transactions = () => {
  const [Conincollecton, setConincollecton] = useState([])
  const [Userinfo, setUserinfo] = useState({})
  useEffect(() => {
    Getcoindetails()
  
    const data  = localStorage.getItem('Userinfo')
      setUserinfo(JSON.parse(data))
  }, [])
  
  const Getcoindetails = async() => {
    const response = await fetch("/api/CoinDetails", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({userid:JSON.parse(localStorage.getItem('Userinfo')).RegistrationId}),
  }).then((res) => res.json()).then((data) => {
    console.log(data.result)
    setConincollecton(data.result)

})
  
  }

  return (
    <Card className='bs-full'>
      <CardHeader
        title='Transactions'
        subheader={
          <p className='mbs-3'>
            <span className='font-medium text-textPrimary'>Coin Details</span>
            {/* <span className='text-textSecondary'>Coin Details</span> */}
          </p>
        }
      />
      <CardContent className='!pbs-5'>
        <Grid container spacing={2}>
        {Conincollecton.filter((d) => d.cointype ==="Bonus").map((data,index)=> (
            <Grid item xs={6} md={3} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color="primary" className='shadow-xs'>
                  <i className="ri-pie-chart-2-line"></i>
                </CustomAvatar>
                <div>
                  <Typography>Bonus</Typography>
                  <Typography variant='h5'>{data.coinsvalue ==  "" ? 0 : data.coinsvalue}</Typography>
                </div>
              </div>
            </Grid>
          ))}
            <Grid item xs={6} md={3} >
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color="success" className='shadow-xs'>
                  <i className="ri-group-line"></i>
                </CustomAvatar>
                <div>
                  <Typography>Level</Typography>
                 {Conincollecton.filter((d) => d.cointype === "Reference").map((data, index) => (
  <Typography key={index} variant='h5'>
    {data.coinsvalue !== 0 ? (data.coinsvalue ? data.coinsvalue : 0) : 0}
  </Typography>
))}
                </div>
              </div>
            </Grid>
      
            <Grid item xs={6} md={3} >
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color="warning" className='shadow-xs'>
                  <i className="ri-macbook-line"></i>
                </CustomAvatar>
                <div>
                  <Typography>Total</Typography>
                  <Typography variant='h5'>{Conincollecton.reduce((acc, item) =>  Number(acc) + Number(item.coinsvalue)  // Assuming 'value' is the key you want to sum
  

  , 0)}</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} >
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color="info" className='shadow-xs'>
                  <i className="ri-money-dollar-circle-line"></i>
                </CustomAvatar>
                <div>
                  <Typography>Widthdraw</Typography>
                  <Typography variant='h5'>0</Typography>
                </div>
              </div>
            </Grid>
        </Grid>
       
        
      </CardContent>
    </Card>
  )
}

export default Transactions
