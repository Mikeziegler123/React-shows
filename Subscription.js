import React from 'react';

class SubscriptionComponent extends React.Component {
    constructor() {
        super();
        this.state = { username: '', email: '', showName: '', duration: '', price: '', message: '' };
    }

    updateValue = (event) => {
        // update respective state variable here
        // based on the duration selected invoke calculate the price by calling calculatePrice() 
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    calculatePrice = (event) => {
        let price = Number(event.target.value) * 299;
        console.log(typeof price + ' type of price');
        //state variable price to be set here
        this.setState({
            price: price.toString(),
            duration: event.target.value
        })
    }

    subscribe = (event) => {
        event.preventDefault();
        // First check required validations here for username, email, showName, and duration fields
        // for invalid, set message value to 'Please enter values to all the fields'
        // if valid, then check whether email id has @ and .com in it, if valid, then set message value to 'Enjoy your {duration} months subscription for 
        //  message, 'Please enter a valid email ID'; 
        //---------------------------------------------------
        if(this.state.username !== '' && this.state.email !== '' && this.state.showName !== '' && this.state.duration !== ''){    
            if(this.state.email.match('[a-zA-Z0-9]+@[a-zA-Z]+.com')){
                
                this.setState({
                    message: 'Enjoy your ' + this.state.duration + ' months subcription for'
                })
            }
            else {

                this.setState({
                    message: 'Please enter a valid email ID'
                })
            }
        }

        else {
            this.setState({
                message: 'Please enter values to all the fields'
            })
        }
        //---------------------------------------------------
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className='cardStyle offset-sm-4 col-sm-5'>
                    <div className='card text-white bg-dark m-3'>
                        <div className='card-header'>
                            <h3>Subscription Form</h3>
                        </div>
                        <div className="card-body">

                            {   /*  (0) form  */    }
                            <form className="form" onSubmit={this.subscribe}>

                               {/*  (1) username  */}
                                <div className="form-group row m-3">
                                    <label htmlForm="Username" className="col-sm-3 col-form-label">User Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" onChange={this.updateValue} autoComplete="off" className="form-control" name="username" />
                                    </div>
                                </div> 
                               
                                {/*  (2) email  */}
                                <div className="form-group row m-3">
                                    <label htmlForm="Email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="text" onChange={this.updateValue} autoComplete="off" className="form-control" name="email" />
                                    </div>
                                </div>

                                {/*  (3) showName  */}
                                <div className="form-group row m-3">
                                    <label htmlForm="ShowName" className="col-sm-3 col-form-label">Show Name</label>
                                    <div className="col-sm-9">
                                        <select onChange={this.updateValue} className="form-control" name="showName">
                                            <option value=""></option>
                                            <option value="Got Talent">Got Talent</option>
                                            <option value="Dance For Tune">Dance For Tune</option>
                                            <option value="Search of Nightingale">Search of Nightingale</option>
                                            <option value="Comedian Community">Comedian Community</option>
                                            <option value="Candid of Hip Hip">Candid of Hip Hip</option>
                                            <option value="Ace of Fusion">Ace of Fusion</option>
                                        </select>
                                    </div>
                                </div>

                             {/*  (4) duration  */}
                            <div className="form-group row m-3">
                                <label htmlForm="Subscription Duration" className="col-sm-3 col-form-label">Duration</label>
                                <div className="col-sm-9">
                                    <select onChange={this.calculatePrice} className="form-control" name="duration">
                                        <option value=""></option>
                                        <option value="1">1 Month</option>
                                        <option value="2">2 Months</option>
                                        <option value="3">3 Months</option>
                                        <option value="6">6 Months</option>
                                        <option value="12">12 Months</option>
                                    </select>
                                </div>
                            </div>



                            {/* (A) Conditionally render price here, When the duration is selected */}
                           { /* Ternary */}

                            { (this.state.duration === "") ? 
                                <div className="offset-sm-3 col-sm-9">
                                    <p></p>
                                </div> : 
                                <div className="offset-sm-3 col-sm-9">
                                    <p>Price: R {this.state.price}</p>
                                </div> 
                            }

                            {/* (B) <div className="offset-sm-3 col-sm-9">
                                    <p>Price: Rs. Price</p>
                                 </div>
                                 If Price is 0
                                <div className="offset-sm-3 col-sm-9">
                                </div>} 
                            */}

                            <div className="col-sm-12"><br/>
                                <button type="submit" className="btn btn-success mb-2 offset-sm-3 col-sm-3">Subscribe</button>
                                <button type="reset" className="btn btn-info backBtn mb-2 offset-sm-1 col-sm-3">Cancel </button>
                            </div>

                            <br />

                            {this.state.message == 'Enjoy your ' + this.state.duration + ' months subcription for' &&
                                <div className="col-sm-12">
                                        <p className="text-success">{this.state.message}</p>
                                </div> 
                            }

                            {this.state.message == 'Please enter values to all the fields' &&
                                <div className="offset-sm-3 col-sm-9">
                                    <p className="text-danger">{this.state.message}</p>
                                </div>
                            }
                            
                            {this.state.message == 'Please enter a valid email ID' &&
                                <div className="offset-sm-3 col-sm-9">
                                    <p className="text-danger">{this.state.message}</p>
                                </div>
                            }

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default SubscriptionComponent;