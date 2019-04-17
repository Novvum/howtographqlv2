import * as React from 'react';
import { Step } from '../types';
import Logo from './Logo';

// interface Props {
//   steps: { [key: string]: Step[] };
//   location: any;
// }

export default function Header({ steps, location }) {
  return (
    <div>
      <Logo />
    </div>
  );
}
