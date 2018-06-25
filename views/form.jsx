var React = require('react');
var LayoutContainer = require('./layoutcontainer.jsx');

class NewPokemon extends React.Component {
  render() {

    return (
 
	    		<LayoutContainer>
	    			<div>
			    
			    	<form method="POST" action="/pokemon">

			    		<h1>New pokemon?!</h1>

				  		Id:	
				  		<input type="text" name="id"/>
				  		<br/>
				  		
				  		Number:
				  		<input type="text" name="num"/>
				  		<br/>

				  		Name:
				  		<input type="text" name="name"/>
				  		<br/>

				  		Image:
				  		<input type="text" name="img"/>
				  		<br/>

				  		Height:
				  		<input type="text" name="height"/>
				  		<br/>
				  		
				  		Weight:
				  		<input type="text" name="weight"/>
				  		<br/>
				  		
				  		<input type="submit" value="Submit"/>

				  		</form>

				  	</div>	

			    </LayoutContainer>


    );

  }
}

module.exports = NewPokemon;
  	

