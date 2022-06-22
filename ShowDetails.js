import React, { useState } from 'react';
import { Link } from 'react-router-dom';  //Mine

function ShowsDetailsComponent(props) {

    // declare state variable with "selectObjDetails" with value as "selectedObj"
    // HINT: USE HOOK
    const [selectedObjDetails] = useState(props.selectedObj);    //Mine

    console.log(props.selectedObj);


    const goBack = () => {
        // update "showSelected" of ShowsComponent to an empty object()
        // HINT CHILD TO PARENT DATA COMMUNICATION
    }

    return (
        <div className="row">
            <div className="cardStyle offset-sm-4 col-sm-5">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">
                        <h4>{selectedObjDetails.showName}</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={'imageUrl from selectedObjDetails to be added here'} height={'200px'} className="card-img-top" alt="Not Found" />
                            </div>
                        <div className="col-sm-6">
                            <p className="card-text text-justify">
                                <strong>Description: </strong>{selectedObjDetails.description}</p>

                            {/*  Create Subscribe Link here with className="btn btn-success" "*/}
                            <Link to='/subscribe' className="btn btn-success">Subscribe</Link>   {/*Mine*/}
                            
                           {/*  Create a Link as "back" with
                                * className="btn btn-info backBtn"
                                * and clicking on it, invoke with goBack()
                            */}
                            <Link className="btn btn-info backBtn" onClick={props.goBack}>Back</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShowsDetailsComponent;