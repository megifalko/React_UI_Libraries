import Mantine from "./components/MantineCard";
import MantineBlur from "./components/MantineBlur";
import NextUIBlur from "./components/NextUIBlur";
import NextUI from "./components/NextUICard";
import img from "./images/img";
import {SegmentedControl, Group} from "@mantine/core";
import {useState} from "react";

const App = () => {
	const images: string[] = img;
	const [value, setValue] = useState("0");
	return (
		<div className="App">
			<Group style={{width: "100%"}}>
				<SegmentedControl
					value={value}
					onChange={setValue}
					fullWidth
					radius="lg"
					color={"khaki-green"}
					transitionDuration={500}
					transitionTimingFunction="linear"
					data={[
						{label: "Mantine Card", value: "0"},
						{label: "Simple Mantine Card", value: "1"},
						{label: "NextUI Card", value: "2"},
						{label: "Simple NextUI Card", value: "3"},
					]}
				/>
			</Group>

			{images.map((image) => {
				switch (value) {
					case "0":
						return <MantineBlur url={image} key={image}/>;
					case "1":
						return <Mantine url={image} key={image}/>;
					case "2":
						return <NextUIBlur url={image} key={image}/>;
					default:
						return <NextUI url={image} key={image}/>;
				}
			})}
		</div>
	);
};

export default App;
