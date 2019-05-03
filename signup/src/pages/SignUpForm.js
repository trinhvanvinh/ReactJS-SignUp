import React,{Component} from 'react';

class SignUpForm extends Component{

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        }
    }

    handleChange=(e)=>{
       
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        console.log(target);
        this.setState({
          [name]: value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <div className="FormCenter" >
            <form className="FormFields" onSubmit={this.handleSubmit} >
              <div className="FormField" >
                <label className="FormField__Label" htmlFor="name" >Full Name</label>
                <input  onChange={this.handleChange} value={this.state.name} type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name='name' />
              </div>
  
              <div className="FormField" >
                <label className="FormField__Label" htmlFor="password" >Password</label>
                <input  onChange={this.handleChange} value={this.state.password} type="password" id="password" className="FormField__Input" placeholder="Enter your password" name='password' />
              </div>
  
              <div className="FormField" >
                <label className="FormField__Label" htmlFor="email" >E-Mail Address</label>
                <input  onChange={this.handleChange} value={this.state.email} type="email" id="email" className="FormField__Input" placeholder="Enter your email" name='email' />
              </div>
  
              <div className="FormField" >
                <label className="FormField__CheckBoxLabel" >
                  <input  onChange={this.handleChange} value={this.state.hasAgreed} className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements
                  <a href="" className="FormField__TermsLink" > terms of service </a>
                </label>
              </div>
            
              <div className="FormField" >  
                  <button className="FormField__Button mr-20"  >SignUp</button> 
                  <a href="#" className="FormField__Link" > I'm already member </a>
              </div>
  
            </form>
          </div>
        );
    }
}

export default SignUpForm;