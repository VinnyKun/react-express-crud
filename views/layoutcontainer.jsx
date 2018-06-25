var React = require('react');

class LayoutContainer extends React.Component {
  render() {

    return (
    	<html>
    		<head ><title> {this.props.title}</title> </head>
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
  	

