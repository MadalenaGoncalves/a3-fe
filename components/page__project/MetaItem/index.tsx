import * as React from 'react';
import { MetaTitle, MetaText } from './styles';

interface IProjectMeta {
  title?: string,
  value?: any
};

const MetaItem = ({ title, value }: IProjectMeta) => {
  if (!value) return null;
  return (
    <p>
      <MetaTitle>{title}|</MetaTitle><MetaText>{value}</MetaText>
    </p>
  );
}


export default MetaItem;