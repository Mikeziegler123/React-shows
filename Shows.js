import React from 'react';

import ShowsListComponent from './ShowList';
import ShowsDetailsComponent from './ShowDetails';
//Import
import axios from 'axios';

class ShowsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showList: [], showSelected: {}, flag: false, errorMsg: ''};
        //Bind
        this.selectedObj = this.selectedObj.bind(this);
        /* ------  */
        }

        componentDidMount() {
            // make backend calls here with path => http://localhost:4000/posts
            // on success store the data in showList state
            axios.get('./assets/data/showList.json').then(result => this.setState({ showList: result.data }) )
            // error message to be set to errorMsg
             .catch(error => 
                 this.setState({
                     errorMsg: error
                 })
             );
        }

        selectedObj = (obj) => {
         // state variable/s to be set here
            let newValue = obj;
            this.setState({
                showSelected: newValue
            })
        }

        goBack = () => {
            // state variable/s to be set here
            this.setState({
                showSelected: {}
            })
        }

        errorView = () => {
            return <div className="offset-sm-4 col-sm-5">
                    <div className="card welcome">
                    <div className="card-body">
                        <span className="errorTextCenter offset-sm-4 col-sm-4">
                            {this.state.errorMsg}
                            </span>"
                        </div>
                    </div>
                </div>
        }
        render() {
            console.log(this.state.showSelected)
            /*  If errorMsg is '', render ShowsListComponent by passing element of 'showList' as a 'showSelected' prop. HINT: USE map() METHOD HERE.
                else invoke this.errorView()
                DONOT REMOVE THE EXISTING PROP HERE   */
            if(this.state.errorMsg === ''){
                if(Object.keys(this.state.showSelected).length == 0){
                    return (
                        <div className="row">

                            {this.state.showList.map((element, i) =>{
                                return (<ShowsListComponent showSelected={element} key={i} detailObj={ (obj) => this.selectedObj(obj)} />
                                )})
                            }
                        </div> 
                    )
                }  
                else{
                    /* render ShowsDetailComponent and
                    pass state variable "showSelected" as a prop(to the existing selectedObj prop) to ShowDetailsComponent
                    DONOT REMOVE THE EXISTING PROP HERE   */
                    return(
                        <div>
                         <ShowsDetailsComponent selectedObj={this.state.showSelected} goBack={() => this.goBack()} />
                        </div>
                    )
                }   
            }
            else{
                this.errorView();
            }
        }
}
export default ShowsComponent;