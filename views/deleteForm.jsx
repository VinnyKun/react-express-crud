var React = require('react');
var LayoutContainer = require('./layoutcontainer.jsx');

class DeletePokemon extends React.Component {
  render() {

    let url = "/pokemon/"+this.props.pokemon.id+"?_method=delete"
    return (
 
	    		<LayoutContainer>
	    			<div>
			    			
	    		<form method="POST" action={url}>
    					
             <h1> {this.props.pokemon.name} </h1>
             <img src={this.props.pokemon.img} />
    					<input name="id" type="hidden" value={this.props.pokemon.id}/>
    					
    					<input type="submit" value="delete this"/>
					
					</form>

				  	</div>	

			    </LayoutContainer>


    );

  }
}

module.exports = DeletePokemon;
  	

