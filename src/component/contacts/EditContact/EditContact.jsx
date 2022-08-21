import React from "react";
import {Link} from "react-router-dom";
let EditContact = ()=>{
    return (
        /* we can use also empty elements <> </> */
        <React.Fragment>
        <section className="add-contact">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <p className="h4 text-primary fw-bold p-3">
                                    تعديل جهة اتصال </p>
                                        <p className="h5 fw-bold">
                                            من فضلك قم بملئ جميع الحقول
                                        </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form>
                        <div className="mb-2">
                                <input type="text" className="form-control" placeholder="ادخل الاسم كاملا"/>
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="ادخل رقم الهاتف"/>
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="الرقم القومي"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="عنوان الصورة الشخصية"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="القسم التابع له"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="الوظيفة"/>
                            </div>
                            <div className="mb-2">
                            <input type="submit" className="btn btn-primary me-2" value="حفظ التعديل"/>
                            <Link to={'/contacts/list'} className="btn btn-dark me-2">الغاء التعديل</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                    <img className="contact-img" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>

    )
};

export default EditContact;