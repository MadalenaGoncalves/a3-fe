import * as React from 'react';
import { Meta, MetaTitle, MetaText } from './styles';

interface IProjectMeta {
  title?: string,
  value?: any
};

const MetaItem = ({ title, value }: IProjectMeta) => {
  return (
    <Meta>
      <MetaTitle>{title}</MetaTitle>
      <MetaText>{value}</MetaText>
    </Meta>
  );
}


export default MetaItem;