export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  ProjectContentDynamicZoneInput: any;
  Upload: any;
  Time: any;
  Date: any;
  Long: any;
};

export type Query = {
  __typename?: 'Query';
 a3ProjekteDatenschutz?: Maybe<A3ProjekteDatenschutz>;
 a3Projekte?: Maybe<A3Projekte>;
 about?: Maybe<About>;
 archive?: Maybe<Archive>;
 contact?: Maybe<Contact>;
 contacts?: Maybe<Array<Maybe<Contact>>>;
 datenschutz?: Maybe<Datenschutz>;
 impressum?: Maybe<Impressum>;
 project?: Maybe<Project>;
 projects?: Maybe<Array<Maybe<Project>>>;
};

export type Contact = {
  __typename?: 'Contact';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 name?: Maybe<Scalars['String']>;
 address?: Maybe<Scalars['String']>;
 postcode?: Maybe<Scalars['String']>;
 city?: Maybe<Scalars['String']>;
 phone?: Maybe<Scalars['String']>;
 fax?: Maybe<Scalars['String']>;
 email?: Maybe<Scalars['String']>;
 name2?: Maybe<Scalars['String']>;
};

export enum Enum_ComponentProjectcontentType {
  Text = 'ComponentProjectcontentText',
  TextImage = 'ComponentProjectcontentTextAndImage',
  Images = 'ComponentProjectcontentImages'
}

export enum Enum_Componentprojectcontentimages_Span {
  One = 'one',
  Two = 'two',
  Three = 'three'
}

export type ComponentProjectcontentImages = {
   __typename?: 'ComponentProjectcontentImages';
  id: Scalars['ID'];
  span: Enum_Componentprojectcontentimages_Span;
  images: Array<UploadFile>;
};

export type ComponentProjectcontentText = {
   __typename?: 'ComponentProjectcontentText';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentProjectcontentTextAndImage = {
   __typename?: 'ComponentProjectcontentTextAndImage';
  id: Scalars['ID'];
  text: Scalars['String'];
  image: UploadFile;
  text_first: Scalars['Boolean'];
};

export type Project = {
   __typename?: 'Project';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  floor_area?: Maybe<Scalars['Int']>;
  client?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  hoai_phases?: Maybe<Scalars['String']>;
  end_year?: Maybe<Scalars['Int']>;
  uuid: Scalars['String'];
  is_published: Scalars['Boolean'];
  cover?: Maybe<UploadFile>;
  content?: Maybe<ProjectContentData>;
};
export type ProjectContentData = Array<Maybe<ProjectContentDynamicZone>>;
export type ProjectContentDynamicZone = ComponentProjectcontentImages | ComponentProjectcontentText | ComponentProjectcontentTextAndImage;

export type UploadFile = {
  __typename?: 'UploadFile';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 name: Scalars['String'];
 hash: Scalars['String'];
 sha256?: Maybe<Scalars['String']>;
 ext?: Maybe<Scalars['String']>;
 mime: Scalars['String'];
 size: Scalars['Float'];
 url: Scalars['String'];
 provider: Scalars['String'];
 provider_metadata?: Maybe<Scalars['JSON']>;
//  related?: Maybe<Array<Maybe<Morph>>>;
};

export type Morph =
  | A3ProjekteDatenschutz
  | A3Projekte
  | About
  | Archive
  | Contact
  | Datenschutz
  | Impressum
  | Project
  | UploadFile
  | ComponentProjectcontentImages
  | ComponentProjectcontentTextAndImage
  | ComponentProjectcontentText;

export type A3Projekte = {
  __typename?: 'A3Projekte';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 title?: Maybe<Scalars['String']>;
 content?: Maybe<Scalars['String']>;
};

export type A3ProjekteDatenschutz = {
  __typename?: 'A3ProjekteDatenschutz';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 title?: Maybe<Scalars['String']>;
 content?: Maybe<Scalars['String']>;
};

export type About = {
  __typename?: 'About';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 title?: Maybe<Scalars['String']>;
 content?: Maybe<Scalars['String']>;
};

export type Archive = {
  __typename?: 'Archive';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 title?: Maybe<Scalars['String']>;
 content?: Maybe<Scalars['String']>;
};

export type Datenschutz = {
  __typename?: 'Datenschutz';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 title?: Maybe<Scalars['String']>;
 content?: Maybe<Scalars['String']>;
};

export type Impressum = {
  __typename?: 'Impressum';
 id: Scalars['ID'];
 created_at: Scalars['DateTime'];
 updated_at: Scalars['DateTime'];
 title?: Maybe<Scalars['String']>;
 content?: Maybe<Scalars['String']>;
};
