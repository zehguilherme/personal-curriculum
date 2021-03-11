import React from 'react';

import { StylesKnowledge } from './styles';

import Item from './Components/Item';

import svnLogo from '../../assets/svn-logo.png';

const ContainerKnowledge = () => (
  <StylesKnowledge>
    <h2>Conhecimentos</h2>

    <div className="grid">
      <Item iconClassName="devicon-html5-plain-wordmark colored" />

      <Item iconClassName="devicon-css3-plain-wordmark colored" />

      <Item iconClassName="devicon-javascript-plain colored" />

      <Item iconClassName="devicon-jquery-plain-wordmark colored " />

      <Item iconClassName="devicon-react-original-wordmark colored" />

      <Item iconClassName="devicon-mysql-plain-wordmark colored" />

      <Item iconClassName="devicon-oracle-original colored" />

      <Item iconClassName="devicon-git-plain-wordmark colored" />

      <Item iconClassName="devicon-github-original-wordmark colored" />

      <Item
        image={svnLogo}
        imageAlt="SVN"
      />

      <Item iconClassName="devicon-cplusplus-line-wordmark colored" />

      <Item iconClassName="devicon-csharp-line colored" />

      <Item iconClassName="devicon-dot-net-plain-wordmark colored" />

      <Item
        iconClassName="fas fa-comments"
        title3="Inglês técnico"
      />
    </div>
  </StylesKnowledge>
);

export default ContainerKnowledge;
