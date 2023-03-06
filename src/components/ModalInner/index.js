import React, {useState} from 'react';
import {Container, H3, P, P2, Socials, H4, SuccessContainer} from './styles';
import Form from '../Form';
import {ReactComponent as Facebook} from './face.svg';
import {ReactComponent as Insta} from './insta.svg';
import {ReactComponent as Twitter} from './twit.svg';

function ModalInner() {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <Container>
      {showSuccess ? (
        <SuccessContainer>
          <H4>Yay! We're so excited!</H4>
          <P2>
            We hope you are too. You can follow us on social media to keep up to
            do date:
          </P2>
          <Socials>
            <Insta />
            <Facebook />
            <Twitter />
          </Socials>
        </SuccessContainer>
      ) : (
        <>
          <H3>Sign Up</H3>
          <P>Join our newsletter to be notifed</P>
          <Form handleSuccess={handleSuccess} />
        </>
      )}
    </Container>
  );
}

export default ModalInner;
