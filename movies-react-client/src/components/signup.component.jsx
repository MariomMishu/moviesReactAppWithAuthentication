import React from 'react';
import Form from '../common/form.component';
import Input from '../common/input.component';
import { register } from '../services/user-service';

class SignUp extends Form {
    state = {
        data: {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        },
        errors: {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        }
    }

    doSubmit = async () => {
        try{
            await register(this.state.data);
            this.props.history.push('/login');
        }catch(error){
            console.log(error);
        }
      
    }

    render() {
		return (
			<div className="container w-50 mx-auto">
				<form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <Input 
                            label="First Name"
                            name="firstName"
                            id="firstName"
                            type="text"
                            value={this.state.data.firstName}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
                    <div className="mb-3">
                        <Input 
                            label="Last Name"
                            name="lastName"
                            id="lastName"
                            type="text"
                            value={this.state.data.lastName}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					<div className="mb-3">
                        <Input 
                            label="User Name"
                            name="username"
                            id="username"
                            type="text"
                            value={this.state.data.username}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					<div className="mb-3">
                        <Input 
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                            value={this.state.data.password}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					<button type="submit" className="btn btn-primary">
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}
 
export default SignUp;