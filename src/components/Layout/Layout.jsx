import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, A } from './Layout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          {navItems.map(({ href, text }) => (
            <A to={href} key={href}>
              {text}
            </A>
          ))}
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
