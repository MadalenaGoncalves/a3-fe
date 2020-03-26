import { NextPage } from 'next';

import { query, GET_CONTACTS } from '../api';
import { Response, isData, ContactsData } from '../models/response';

// import ErrorHandler from '../components/ErrorHandler';
import Contacts from '../components/page__contacts/Contacts';

const ContactsPage: NextPage<Response> = (props) => {
  // console.log(props);
  if (isData(props)) {
    return (
      <Contacts {...props.data as ContactsData} />
    );
  } else {
    return <div>TODO: handle error</div>
  }
  // const renderHandler = (response: Response) => {
  //   return (
  //     <Contacts contacts={response as Contact[]} />
  //   );
  // }
  // return (
  //   <ErrorHandler response={props} render={renderHandler} />
  // );
}

ContactsPage.getInitialProps = async () => {
  try {
    let response: Response;
    response = await query(GET_CONTACTS);
    return response;
  } catch (err) {
    console.log("ERRO", err);
    return err;
  }
};


export default ContactsPage;