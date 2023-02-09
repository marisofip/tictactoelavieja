import React, { useState, useEffect } from "react";


export function Home() {
	const [marca, setMarca] = useState(true);
	const [d0, setD0] = useState("");
	const [d1, setD1] = useState("");
	const [d2, setD2] = useState("");
	const [d3, setD3] = useState("");
	const [d4, setD4] = useState("");
	const [d5, setD5] = useState("");
	const [d6, setD6] = useState("");
	const [d7, setD7] = useState("");
	const [d8, setD8] = useState("");
	const [divWin, setDivWin] = useState(true);
	const [divInicio, setDivInicio] = useState(true);
	const listaDivs = [d0, d1, d2, d3, d4, d5, d6, d7, d8];

	let lista = [
		"topLeft",
		"topCenter",
		"topRight",
		"middleLeft",
		"middleCenter",
		"middleRight",
		"bottomLeft",
		"bottomCenter",
		"bottomRight"
	];

	useEffect(() => {
		if (
			(d0 == d1 && d0 == d2 && d0 != "") ||
			(d3 == d4 && d3 == d5 && d3 != "") ||
			(d6 == d7 && d6 == d8 && d6 != "") ||
			(d0 == d3 && d0 == d6 && d0 != "") ||
			(d1 == d4 && d1 == d7 && d1 != "") ||
			(d2 == d5 && d2 == d8 && d2 != "") ||
			(d0 == d4 && d0 == d8 && d0 != "") ||
			(d2 == d4 && d2 == d6 && d2 != "")
		) {
			setDivWin(false);
		}
	}, [listaDivs]);

	const Handler = evento => {
		let id = evento.target.id;
		if (id == 0 && d0 == "") {
			let div0 = "X";
			marca ? (div0 = "X") : (div0 = "O");
			setD0(div0);
			setMarca(!marca);
		} else if (id == 1 && d1 == "") {
			let div1 = "X";
			marca ? (div1 = "X") : (div1 = "O");
			setD1(div1);
			setMarca(!marca);
		} else if (id == 2 && d2 == "") {
			let div2 = "X";
			marca ? (div2 = "X") : (div2 = "O");
			setD2(div2);
			setMarca(!marca);
		} else if (id == 3 && d3 == "") {
			let div3 = "X";
			marca ? (div3 = "X") : (div3 = "O");
			setD3(div3);
			setMarca(!marca);
		} else if (id == 4 && d4 == "") {
			let div4 = "X";
			marca ? (div4 = "X") : (div4 = "O");
			setD4(div4);
			setMarca(!marca);
		} else if (id == 5 && d5 == "") {
			let div5 = "X";
			setMarca(!marca);
			marca ? (div5 = "X") : (div5 = "O");
			setD5(div5);
			setMarca(!marca);
		} else if (id == 6 && d6 == "") {
			let div6 = "X";
			marca ? (div6 = "X") : (div6 = "O");
			setD6(div6);
			setMarca(!marca);
		} else if (id == 7 && d7 == "") {
			let div7 = "X";
			marca ? (div7 = "X") : (div7 = "O");
			setD7(div7);
			setMarca(!marca);
		} else if (id == 8 && d8 == "") {
			let div8 = "X";
			marca ? (div8 = "X") : (div8 = "O");
			setD8(div8);
			setMarca(!marca);
		}
	};

	const SecondHandler = evento => {
		setDivInicio(false);
	};

	const DivTicToe = lista.map((divs, index) => {
		return (
			<div
				key={index}
				id={index}
				onClick={Handler}
				className={`marcado ${divs}`}>
				{listaDivs[index]}
			</div>
		);
	});

	return (
		<div className="text-center">
			<div className="superior text-white">
				<h1>
					<div className="display-4 d-inline">TicTacToe</div> in
					React.js
				</h1>
			</div>
			<div className="central d-flex justify-content-center py-3">
				<div className="game">
					<div
						className="inicio text-center"
						style={
							divInicio ? { display: "" } : { display: "none" }
						}>
						<div className="text-white p-5 my-1" id="juguemos">
							<h1>
								Juguemos!
							</h1>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span
										className="input-group-text"
										id="basic-addon1">
										X
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre del Jugador"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span
										className="input-group-text"
										id="basic-addon1">
										O
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre del Jugador"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<button onClick={SecondHandler} className="btn btn-light">Jugar</button>
						</div>
					</div>
					{DivTicToe}
					<div
						className="fin text-center"
						style={divWin ? { display: "none" } : { display: "" }}>
						<div className="bg-light text-dark my-5 p-5">
							<h1> Has Ganado!</h1>
							<button className="btn btn-dark"  type="button">
								<a href="/" className="text-white">Volver a Jugar</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
