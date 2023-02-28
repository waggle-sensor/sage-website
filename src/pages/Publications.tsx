import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';

export default function Publications() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <Page
        style={{
          height: '50vh',
          fontSize: '20px',
        }}>
          <h1>Publications</h1>

          [publications go here]
      </Page>
    </Layout>
  );
}


const Page = styled.div`
  margin: 2em;

`