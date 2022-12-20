import React, { useState, useEffect, useRef } from 'react'
import { useGetUserData } from '../modules/useGetUserData'
import UploadPicButton from './UploadPicButton'
import { Oval } from 'react-loader-spinner'
import { changeDBUserProfilePic, uploadPicToServer } from '../modules/changeUserProfilePicture'
import { logout } from '../modules/logout'

function UserInfo () {
  const handleImage = (pfp) => {
    setImage('https://img.mysweetdreams.es/img/pfp/' + pfp)
  }

  const { userData, isLoading, error } = useGetUserData(handleImage)
  const [image, setImage] = useState('https://img.mysweetdreams.es/img/pfp/' + userData.profilePic)
  const fileInput = useRef()
  const selectFile = () => {
    fileInput.current.click()
  }

  const onImageChange = (event) => {
    console.log(userData.profilePic)
    if (event.target.files && event.target.files[0]) {
      changeDBUserProfilePic(userData._id)
      setImage(URL.createObjectURL(event.target.files[0]))
      uploadPicToServer(event.target.files[0], userData._id)
    }
  }

  const profileUserInfo = (
    <div className='w-full flex flex-col justify-center items-center p-2'>
      <img title="Foto de perfil de usuario" src={image} alt="user profile picture" className='rounded-full h-[220px] w-[220px] border-2 border-black object-cover' />
      <input className='hidden' type="file" ref={fileInput} onChange={onImageChange} />
      <span onClick={selectFile}>
        <UploadPicButton />
      </span>
    </div>
  )

  const profileUserLoading = (
    <div className='w-full h-[300px] flex flex-col justify-center items-center p-2'>
      <Oval
        height={220}
        width={220}
        color="#60a5fa"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="60a5fa"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />
    </div>
  )
  const birthdate = new Date(userData.birthdate)

  return (
    <section className='w-full h-full bg-web-fondo dark:bg-web-formBgDarkMode'>
      {isLoading ? profileUserLoading : profileUserInfo}
      <div className='w-full h-fit p-2 flex flex-col justify-center items-center gap-2'>
        <section className='text-xl'>
          <h3 title='Nombre de usuario'>{userData.name} {userData.lastName}</h3>
        </section>
        <section className=''>
          <h3 title='Edad'>{birthdate.getDate()}/{birthdate.getMonth() + 1}/{birthdate.getFullYear()}</h3>
        </section>
      </div>
    </section>
  )
}

export default UserInfo
