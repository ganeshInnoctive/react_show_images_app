import React from 'react'

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange(event) {
        console.log(event.target.value)
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit} >
                    <div className="ui icon input">
                        <i className="search icon"></i>
                        <input
                            type="text"
                            placeholder="Search Image"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar