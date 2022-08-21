import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import NavBar from './component/Navbar/NavBar';
import ContactList from './component/contacts/ContactList/ContactList';
import AddContact from './component/contacts/AddContact/AddContact';
import ViewContact from './component/contacts/ViewContact/ViewContact';
import EditContact from './component/contacts/EditContact/EditContact';



let App = ()=> {
  return (

    <React.Fragment>
      <NavBar/>
      <Routes>
(/*مسار الهوم بيج*/)
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>

(/* اعدادات مسارات الصفحات*/)
      
      <Route path={'/contacts/list'} element={ <ContactList/> } />
      <Route path={'/contacts/Add'} element={ <AddContact/> } />
      <Route path={'/contacts/View/:contactId'} element={ <ViewContact /> } />
      <Route path={'/contacts/edit/:contactId'} element={ <EditContact /> } />
      
      </Routes>
    </React.Fragment>
  );
}

export default App;
