var React = require('react');
var LayoutContainer = require('./layoutcontainer.jsx');

class EditPokemon extends React.Component {
  render() {

  	let url = "/pokemon/"+this.props.pokemon.id+"?_method=PUT"
    return (
 
	    		<LayoutContainer>
	    			<div>
			    			
	    			<form method="POST" action={url}>
    					
    					<input name="id" type="text" defaultValue={this.props.pokemon.id}/>
    					<input name="num" type="text" defaultValue={this.props.pokemon.num}/>
    					<input name="name" type="text" defaultValue={this.props.pokemon.name}/>
    					<input name="img" type="text" defaultValue={this.props.pokemon.img}/>
    					<input name="height" type="text" defaultValue={this.props.pokemon.height}/>
    					<input name="weight" type="text" defaultValue={this.props.pokemon.weight}/>
    					<input name="candy" type="text" defaultValue={this.props.pokemon.candy}/>
    					<input name="egg" type="text" defaultValue={this.props.pokemon.egg}/>
    					<input name="avg_spawns" type="text" defaultValue={this.props.pokemon.avg_spawns}/>
    					<input name="spawn_time" type="text" defaultValue={this.props.pokemon.spawn_time}/>
    					
    					<input type="submit" value="edit this"/>
					
					</form>

				  	</div>	

			    </LayoutContainer>


    );

  }
}

module.exports = EditPokemon;
  	

