import React, { useState } from "react";
import PropTypes from "prop-types";

export function Div(props) {
	return !props.tclick ? (
		<div className={props.name}>
			<div></div>
		</div>
	) : (
		<div className={props.name} onClick={props.tclick}>
			<div className="marcado">{props.value}</div>
		</div>
	);
}

Div.propTypes = {
	name: PropTypes.string,
	tclick: PropTypes.func,
	value: PropTypes.string
};
