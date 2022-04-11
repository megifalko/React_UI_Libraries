import {
	Modal,
	Button,
	Text,
	TextInput,
	SegmentedControl,
	Slider,
	ColorInput,
	Checkbox,
	Space,
    Group,
} from "@mantine/core";

interface propsType {
	opened: boolean;
	onClose: Function;
}

const MantineModal = (props: propsType) => {
	return (
		<Modal
			centered
			size="md"
            radius="lg"
			opened={props.opened}
			onClose={() => props.onClose()}
			title="Enter your data">
			<TextInput placeholder="Your name" radius="lg" label="Full name" required />
			<Space h="xl" />
			<Text size="sm">Pick a cactus size</Text>
			<SegmentedControl
				fullWidth
				radius="lg"
				color={"khaki-green"}
				transitionDuration={500}
				transitionTimingFunction="linear"
				data={[
					{label: "Small", value: "sm"},
					{label: "Medium", value: "md"},
					{label: "Large", value: "lg"},
				]}
			/>
			<Space h="xl" />
			<Space h="sm" />
			<Text size="sm">How awesome should your cactus be?</Text>
			<Slider
				label={null}
				marks={[
					{value: 20, label: "20%"},
					{value: 50, label: "50%"},
					{value: 80, label: "80%"},
				]}
			/>
			<Space h="xl" />
			<Space h="md" />
			<Group position="apart" spacing="xs" align="center">
				<ColorInput
					radius="lg"
					placeholder="Pick a color"
					label="Pick a flowerpot color"
				/>
				<Checkbox size="xs" radius="xl" label="I agree to sell my privacy" style={{marginTop: 25}}/>
			</Group>

			<Space h="md" />
			<Button
				onClick={() => props.onClose()}
				variant="filled"
				radius="lg"
				fullWidth
				style={{marginTop: 14}}>
				Buy now
			</Button>
		</Modal>
	);
};

export default MantineModal;
