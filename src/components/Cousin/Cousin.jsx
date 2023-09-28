import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
	return (
		<div className="grandpa">
			<h2>Cousin</h2>
			<p>{name}</p>
			<section>
				{ asset && <Special asset={asset}></Special>}
				{name === "Maria" && <Friend></Friend>}
			</section>
		</div>
	);
};

export default Cousin;