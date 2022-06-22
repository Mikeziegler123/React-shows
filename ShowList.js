import React from 'react';

class ShowsListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // declare "showList" and assign "showSelected" props
            showList: props.showSelected  //Mine
        };
    }

    viewDetails = (selObj) => {
        // send whole OBJECT of details to ShowsComponent as a prop  --> SHows
        this.props.detailObj(selObj);   //Mine
    }

    render() {
        return(
            <div className="col-sm-4">
                <div className="content card text-white bg-dark mb-3" style={{height:'400px', marginLeft:'60px', width:'320px'}}>
                    <div className="card-header">
                        <img src={''} className="card-img-top" alt="Not Found " />
                    </div>
                    <div className="card-body text-justify">
                        <p className="card-title text-center">
                            <strong>{this.state.showList.showName}</strong>
                        </p>
                        <p className="card-text">{this.state.showList.description}</p>
                        <button className="btn btn-info col-sm-12" onClick={() => this.viewDetails(this.state.showList)}>View Details</button>
                    </div>
                </div>
             </div>
        )
    }
}
export default ShowsListComponent;