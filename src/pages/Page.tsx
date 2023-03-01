import styled from 'styled-components'


const Page = styled.div`
  /**
  * Resets; back to MUI Global and Sage Portals CSS
  */
  h1, h2, h3, h4, h5, h6 {
    font-size: revert;  // ignore docusaurus
  }

  a {
    color: #0080c7;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover { text-decoration: underline; }

  width: 1280px;
  margin: 2em auto;
  height: 50vh;
`


export default Page