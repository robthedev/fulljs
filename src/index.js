import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <div>
            <h2 className="text-center">
                {props.headerMessage}
            </h2>
            <div>...</div>
        </div>
    );
};

App.propTypes = {
    headerMessage: React.PropTypes.string
};

App.defaultProps = {
    headerMessage: 'mitel'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);