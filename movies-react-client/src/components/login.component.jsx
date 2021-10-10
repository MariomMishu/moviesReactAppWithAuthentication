import React from 'react';
import Form from '../common/form.component';
import Input from '../common/input.component';
import { login } from '../services/user-service';
class Login extends Form {
    state = {
        data: { username: '', password: '' },
        errors: { username: '', password: '' }
    }

    doSubmit = async () => {
        const user = { username: this.state.data.username, password: this.state.data.password };
        try{
            await login(user);
           // localStorage.setItem('loggedin', true);
            window.location = '/movies';
        }catch(error){
            console.log(error);
            const errors = {...this.state.errors};
            
            errors.username = 'Username may be incorrect.';
            errors.password = 'Password may be incorrect.';

            this.setState({...this.state, errors });
        }

    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const userName = e.target[0].value;
    //     const password = e.target[1].value;
    //     const errors = {...this.state.errors};   

    //     if (userName === 'admin' && password === '12345') {
    //         this.props.history.push('/movies');
    //     }
    //     else {
    //         errors.userName = 'User Name may be incorrect';
    //         errors.password = 'Password may be incorrect';

    //     }
    //     this.setState({ ...this.state, errors });
    // }

    render() {
        return (
            <div className="container w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                    <Input
                            label="User Name"
                            type="text"
                            name="username"
                            id="username"
                            value={this.state.data.username}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />                    
                    </div>
                    <div className="mb-3">
                    <Input
                            label="Password"
                            type="text"
                            name="password"
                            id="password"
                            value={this.state.data.password}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
                       
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }

};
export default Login;