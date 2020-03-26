import React, { ReactNode } from 'react';

import { Maybe, Project, UploadFile as Image, ProjectContentData, ProjectContentDynamicZone,
  ComponentProjectcontentImages, ComponentProjectcontentText, ComponentProjectcontentTextAndImage,
  Enum_ComponentProjectcontentType, 
  Enum_Componentprojectcontentimages_Span as ColumnSpan } from '../../../models/types';
import { buildImageUrl, buildFloorAreaString, buildAddressString } from '../../../models/utils';
import { PageSection } from '../../PageLayout';
import { ProjectTopContent, ProjectHeader, CoverPhoto, ContentGridLayout } from './styles';
// import { ProjectTopContent, ProjectHeader, CoverPhoto, Figure } from './styles';
import MetaItem from '../MetaItem';


interface JSXBlockProps {
  span: ColumnSpan;
  children: ReactNode | ReactNode[];
}
const JSXBlock = (props: JSXBlockProps) => {
  return <ContentGridLayout columns={props.span}>{props.children}</ContentGridLayout>
}

class ProjectContent extends React.PureComponent<Project> {
  protected buildTextImage(b: ComponentProjectcontentTextAndImage): JSX.Element {
    return (
      <JSXBlock span={ColumnSpan.Two} key={Math.random()}>
        {b.text_first && <div><p>{b.text}</p></div>}
        <>{<img src={buildImageUrl(b.image as Image)} alt="" />}</>
        {!b.text_first && <div><p>{b.text}</p></div>}
      </JSXBlock>
    );
  }
  protected buildText(b: ComponentProjectcontentText): JSX.Element {
    return (
      <JSXBlock span={ColumnSpan.One} key={Math.random()}>
        <p>{b.text}</p>
      </JSXBlock>
    );
  }
  
  protected buildImages(b: ComponentProjectcontentImages): JSX.Element {
    return (
      <JSXBlock span={b.span} key={Math.random()}>
        {b.images.map((img: Image) => <img key={Math.random()} src={buildImageUrl(img)} alt="" />)}
      </JSXBlock>
    );
  }
  
  protected buildBlocks(content: ProjectContentData): JSX.Element[] {
    const blocks: JSX.Element[] = [];
    content.forEach((b: Maybe<ProjectContentDynamicZone>) => {
      if (!b) return;
      if (b.__typename === Enum_ComponentProjectcontentType.TextImage) {
        blocks.push(this.buildTextImage(b as ComponentProjectcontentTextAndImage));
      } else if(b.__typename === Enum_ComponentProjectcontentType.Text) {
        blocks.push(this.buildText(b as ComponentProjectcontentText));
      } else {
        blocks.push(this.buildImages(b as ComponentProjectcontentImages));
      }
    })
    return blocks;
  }

  public render(): any {
    const { props } = this;

    return (
      <>
        <PageSection>
          <ProjectTopContent columns={ColumnSpan.Two}>
            <ProjectHeader className="header">{props.title}</ProjectHeader>
  
            {props.cover &&
              <CoverPhoto className="cover" src={buildImageUrl(props.cover)} alt={props.title} />}
            
            {props.description && <p className="description">{props.description}</p>}
  
            <div className="meta">  
              {(props.address || props.postcode || props.city) && 
                <MetaItem title="Adresse" value={buildAddressString(props)} />}
              {props.end_year && <MetaItem title="Fertigstellung" value={props.end_year} />}
              {props.floor_area && <MetaItem title="Wohnfläche" value={buildFloorAreaString(props)} />}
              {props.hoai_phases && <MetaItem title="HOAI Leistungsphasen" value={props.hoai_phases} />}
              {props.client && <MetaItem title="Bauherr" value={props.client} />}
            </div>
          </ProjectTopContent>
        </PageSection>
  
        {props.content &&
          <PageSection>
            {props.content && this.buildBlocks(props.content as ProjectContentData)}
            {/* {props.images.map((img: Image) => (
              <Figure key={img.id}>
                <img src={buildImageUrl(img)} alt="" />
              </Figure>
            ))} */}
          </PageSection>
        }
      </>
    );
  }
}

export default ProjectContent;
