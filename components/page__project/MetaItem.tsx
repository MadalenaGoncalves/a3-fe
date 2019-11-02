import * as React from 'react';
import MetaItemContainer from './styles/MetaItemContainer';
import MetaItemTitle from './styles/MetaTitle';
import MetaItemText from './styles/MetaText';

interface IProjectMeta {
  title?: string,
  value?: any
};

const MetaItem = ({ title, value }: IProjectMeta) => {
  if (!value) return null;
  return (
    <MetaItemContainer>
      <MetaItemTitle>{title}</MetaItemTitle>
      <MetaItemText>{value}</MetaItemText>
    </MetaItemContainer>
  );
}

export default MetaItem;