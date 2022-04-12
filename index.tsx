import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import {MantineProvider, MantineThemeOverride} from "@mantine/core";
import {NextUIProvider, createTheme} from "@nextui-org/react";

const theme = createTheme({
	type: "light",
	theme: {
		colors: {
			white: "#ffffff",
			primaryLight: "#becbb6",
			primary: "#5e684b",
			secondary: "#becbb6",
			primaryDark: "#5e684b",
		},
		space: {},
		letterSpacings: {tighter: "0.025em", wide: "0.05em"},
		fonts: {Nunito: "Nunito"},
	},
});

const mtheme: MantineThemeOverride = {
	colors: {
		"khaki-green": [
			"#f0f5e9",
			"#d6dfd0",
			"#bdcab5",
			"#a4b598",
			"#8ea07b",
			"#768661",
			"#5e684b",
			"#444a35",
			"#2a2d1e",
			"#0d1104",
		],
	},
	primaryColor: "khaki-green",
	loader: 'oval'
};

ReactDOM.render(
	<React.StrictMode>
		<NextUIProvider theme={theme}>
			<MantineProvider theme={mtheme}>
				<App />
			</MantineProvider>
		</NextUIProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
