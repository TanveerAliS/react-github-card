import React, { PureComponent } from 'react';

export default class SearchBox extends PureComponent {
    handleClick = e => {
        e.preventDefault();
        let username = this.refs.search.value;
        this.props.fetchUser(username);
        this.refs.search.value = "";
    };

    render() {
        return (
            <form
                className="searchbox"
                onSubmit={this.handleClick.bind(this)}>
                <input
                    ref="search"
                    className="searchbox-input"
                    type="text"
                    placeholder="Type username..."/>
                <input
                    type="submit"
                    className="searchbox-button"
                    value="Search Github user" />
            </form>
        )
    }
}
