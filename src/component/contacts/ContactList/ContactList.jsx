import React , {useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let ContactList = ()=>{

    let [state, setState] = useState({
        loading : false,
        contacts :[],
        errorMessage :'some'
    });

    useEffect(async()=> {
        try{
            let response = await ContactService.getAllContacts();
            //  console.log(response.data)        
        }
        catch(error){

        }
    },  []);


    return (
        /* we can use also empty elements <> </> */
        <React.Fragment>
            <section>
                <div className="contact-search p-3">
                    <div className="container">
                        <div className="grid">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 fw-bold">
                                        جهات الاتصال
                                        <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                            <i className="fa fa-plus-circle me-2"/>جهة اتصال جديدة</Link></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <form className="row">
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="text" className="form-control" placeholder="بحث عن اسم"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="submit" className="btn btn-outline-dark" value="بحث"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around">
                                        <div className="col-md-4">
                                            <img className="contact-img" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                    الاسم: <span className="fw-bold">حسام عزب
                                                    </span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                    موبايل : <span className="fw-bold">01015588467
                                                    </span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    البريد: <span className="fw-bold">hosam@gmail.com
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <Link to={`/contacts/View/:contactId`} className="btn btn-warning my-1">
                                                <i className="fa fa-eye"/>
                                            </Link>
                                            <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                                                <i className="fa fa-pen"/>
                                            </Link>
                                            <button className="btn btn-danger my-1">
                                                <i className="fa fa-trash"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
};

export default ContactList;