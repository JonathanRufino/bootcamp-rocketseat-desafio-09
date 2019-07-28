import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Jonathan Rufino</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>

          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
