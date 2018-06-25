var React = require('react');

class LayoutContainer extends React.Component {
  render() {

    return (
    	<html>
	    	<body>
	    		<div className="container">
			    
	    			{this.props.children}

		    	</div>
	    	</body>
    	</html>
    );

  }
}

module.exports = LayoutContainer;
  	

