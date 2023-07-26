import california from '../images/california.png';

function Card() {
	return (
        <div className="col">
            <div className="card" style="width: 18rem;">
                <img src={california} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">California Roll</h5>
                    <p className="card-text">€1.99</p>
                    <button className="btn btn-outline-danger">Elimina</button>
                </div>
            </div>
        </div>
	);
}

export default Card;