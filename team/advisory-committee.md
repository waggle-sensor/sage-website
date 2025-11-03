---
sidebar_position: 6
breadcrumbs: false
---
import Team from './components/Team';
import {getTeam} from './directory';

# Advisory Committee

<ul>
  {getTeam('advisory').map(({name, institution}) =>
    <li key={name}>{name} ({institution})</li>
  )}
</ul>
