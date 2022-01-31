import React from 'react'
import { FormContainer, FormWrapper, Input, SbmtButton, MutedLink} from './Form.styled'

const LoginForm = (props) => {
  return (
    <FormWrapper>
      <FormContainer>
          <Input type="name" placeholder='username' /> 
          <Input type="password" placeholder='password' />
          <SbmtButton>Signin</SbmtButton>
      </FormContainer>
    </FormWrapper>
  )
}

export default LoginForm
