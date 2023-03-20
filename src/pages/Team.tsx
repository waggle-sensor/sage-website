import React from 'react';
import styled from 'styled-components'
import Layout from '@theme/Layout';
import Page from './Page';

import team from '../team-list'

export default function Team() {
  return (
    <Layout title="Team" description="Sage Team">
      <Root>
        <h1>Sage Leadership</h1>

        {team.map(person => {
          const {name, image, institution, title, link} = person
          return (
            <div key={name} className="flex-col justify-items-center my-10">
              <div className="flex">
                {link ? <a href={link}><img src={image} /></a> : <img src={image} />}
                <div className="flex-col mx-5">
                  <h3>
                    {link ? <a href={link}>{name}</a> : name}
                  </h3>
                  <div>{institution}</div>
                  <div><i>{title}</i></div>
                </div>
              </div>
            </div>
          )
        })}
      </Root>
    </Layout>
  );
}


const Root = styled(Page)`
  img {
    width: 175px;
  }
`

