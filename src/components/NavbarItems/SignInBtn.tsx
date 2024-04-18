import styled from 'styled-components'
import Button from '@mui/material/Button'
import { LoginRounded } from '@mui/icons-material'


const portal = 'https://portal.sagecontinuum.org'


export default function SignInBtn() {
  return (
    <Root>
      <Button variant="outlined" href={portal} endIcon={<LoginRounded />} disableRipple>Portal</Button>
    </Root>
  )
}

const Root = styled.div`
  position: absolute;
  right: 10px;
  .MuiButton-root {
    text-transform: none;
  }

`
