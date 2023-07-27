import React, {Component} from 'react';

class Card extends Component {
	render(){
	return (
        <div className="col">
            <div className="card mb-4" style={{width: '18rem', textAlign: 'center'}}>
                <img src={this.props.card.figure} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.name} Roll</h5>
                    <p className="card-text">€{this.props.card.price}</p>
                    <button className="btn btn-outline-danger">Elimina</button>
                </div>
            </div>
        </div>
	);
 }
}

export default Card;