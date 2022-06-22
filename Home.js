import React from "react";
//Import(s)
import { Link } from "react-router-dom";
/* ------  */

class homeComponent extends React.Component {
    constructor() {
        super();
        this.state = {categories: ['shows', 'movies', 'sports', 'news', 'music', 'comedy']};
    }

    render() {
        return(
            <div className="container-fluid">
                <h4 className="heading">Recommended Categories: </h4>
                <div className="row">
                {/* Mapping  */}
                {this.state.categories.map((category, i) => <div className="content col-sm-4" category={category} key={i}>
                {/* ------  */}
                        <div className="card text-white bg-dark mb-3" style={{height: '400px', marginLeft:'47px', marginRight:'37px'}}>
                            
                            {/* image location assets/images/imageName
                            Note: state 'categories' of every value is mapped to the corresponding image names given in the above path */}
                            <div className="card-header">
                                <img src={''} className="card-img-top" alt={"Not Found"} />
                            </div>
                            {/* ------  */}
                            
                            <div className="card-body text-justify">
                                <div className="card-title">
                                    <p className="text-center">{category}</p> 
                                </div>
                                    <p>This section list out top few trending <strong>{category}</strong>. Click on "View List" to see in the list in detail</p>

                                     {/* Link  */}
                                    <Link to={'/shows'} className="btn btn-info col-sm-12 mt-3">View List</Link>
                                     {/* ------  */}

                            </div>
                        </div>
                    </div>
                //Finish Mapping
                )}
                </div>
            </div>
        )
    }
}
export default homeComponent;