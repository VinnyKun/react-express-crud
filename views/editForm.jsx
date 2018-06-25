var React = require('react');
var LayoutContainer = require('./layoutcontainer.jsx');

class EditPokemon extends React.Component {
  render() {

    return (
 
	    		<LayoutContainer>
	    			<div>
			    			
	    			<form method="POST" action="/pokemon/{this.props.pokemon.id}?_method=delete">
    					
    					<input name="id" type="hidden" value="{this.props.pokemon.id}"/>
    					
    					<input type="submit" value="delete this"/>
					
					</form>

				  	</div>	

			    </LayoutContainer>


    );

  }
}

module.exports = EditPokemon;
  	

