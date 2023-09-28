import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000)

const GrandPa = () => {
	const asset = "Diamond";
	const [money, setMoney] = useState(1000);
	return (
		<div className="grandpa">
			<h2>Grandpa</h2>
			<p>Net Money: {money}</p>

			<MoneyContext.Provider value={[money, setMoney]}>
				<AssetContext.Provider value="gold">
					<div className="flex">
						<Dad asset={asset}></Dad>
						<Aunty></Aunty>
						<Uncle asset={asset}></Uncle>
					</div>
				</AssetContext.Provider>
			</MoneyContext.Provider>

		</div>
	);
};

export default GrandPa;

/**
 * 1. Create a context and export it.
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API 
*/