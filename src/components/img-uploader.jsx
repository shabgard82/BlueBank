import React, { useState } from 'react'
import styles from './styles.module.css';
import Webcam from 'react-webcam'
import { Button, Stack, Typography } from '@mui/material';
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const UploadImg = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  return (
    <Stack sx={{padding:"0px 10px"}}>
      <Stack pt={1} display="flex" direction="row"justifyContent="center">
        {picture == '' ? (
          <Webcam
            audio={false}
            height={100}
            ref={webcamRef}
            width={200}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </Stack>
      <Stack className={styles.btn} pt={2} display="flex" direction="row" justifyContent="center">
        {picture != '' ? (
          <Button
					variant="contained" href="#contained-buttons"
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            
          >
            Retake
          </Button>
        ) : (
          <Button
					variant="contained" href="#contained-buttons"
					
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className={styles.btn}
          >
            take photo
          </Button>
        )}
      </Stack>
    </Stack>
  )
}
export default UploadImg;
