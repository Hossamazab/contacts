import React from "react";
import {Link} from "react-router-dom";

let ViewContact = ()=>{
    return (
        /* we can use also empty elements <> </> */
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <p className="h4 text-warning fw-bold">
                                عرض جهة الاتصال
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contac mt-3">
                <div className="container">
                    <div className="card">
                        <div className="card-header h5 fw-bold">
                            عرض جهة الاتصال الخاصة بالموظف
                        </div>
                        <div className="card-body">

                       
                    <div className="row  align-items-center">
                        <div className="col-md-4">
                        <img className="contact-img" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
                        </div>
                        <div className="col-md-8">
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
                                <li className="list-group-item list-group-item-action">
                                الرقم القومي: <span className="fw-bold">28106220102112
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                القسم: <span className="fw-bold">الموارد البشرية
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                الظيفة: <span className="fw-bold">مسئول تطوير
                                    </span>
                                </li>

                            </ul>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">رجوع</Link>
                        </div>
                    </div>
                </div>
                </div>
                 </div>
            </section>
        </React.Fragment>
    )
};

export default ViewContact;