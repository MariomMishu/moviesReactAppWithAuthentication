import React from 'react';
import Form from '../common/form.component';
import Input from '../common/input.component';
class MovieForm extends Form {

    state = {
        data: { 
            title: '',
            poster: '',
            rating: ''
        },
        errors: {}
    }

    doSubmit = (e) => {
        
    }
    
    render() {
        return (
            <div className="container w-50 mx-auto">
                 <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                    <Input
                            label="Title"
                            type="text"
                            name="title"
                            id="title"
                            value={this.state.data.title}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />                     
                    </div>
                    <div className="mb-3">
                    <Input
                            label="Poster"
                            type="text"
                            name="poster"
                            id="poster"
                            value={this.state.data.poster}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />                       
                    </div>
                    <div className="mb-3">
                    <Input
                            label="IMDB Rating"
                            type="text"
                            name="rating"
                            id="rating"
                            value={this.state.data.rating}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />                      
                    </div>                 
                    <button type="submit" className="btn btn-primary">Add New</button>
                </form>

            </div>
        )
    }

};
export default MovieForm;