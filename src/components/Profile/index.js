import React from 'react';

import { Container } from './styles';
import TitleSection from '../../UI/TitleSection';

function Profile() {
  return (<Container id="profile">
        <TitleSection title="Perfil" variant="lg" bar="13"/>
  </Container>);
}

export default Profile;