import {useState} from "react";
import {
	Modal,
	Button,
	Text,
	Input,
	Row,
	Checkbox,
	Spacer,
	Radio,
	Progress,
} from "@nextui-org/react";
import {BsCaretDownFill, BsCaretUpFill} from "react-icons/bs";
interface propsType {
	opened: boolean;
	onClose: Function;
}

const NextUIModal = (props: propsType) => {
	const [value, setValue] = useState(50);
	return (
		<Modal closeButton open={props.opened} onClose={() => props.onClose()}>
			<Modal.Header>
				<Text size={18}>Enter your data</Text>
			</Modal.Header>
			<Modal.Body>
				<Spacer y={0.5} />
				<Input
					clearable
					bordered
					fullWidth
					color="primary"
					size="md"
					labelPlaceholder="Full name"
					helperText="Required"
				/>
				<Spacer y={0.3} />
				<Text size={14}>Pick a cactus size</Text>
				<Row justify="space-between">
					<Radio.Group size="sm" value="sm" row color="primary">
						<Radio value="sm">Small</Radio>
						<Radio value="md">Medium</Radio>
						<Radio value="lg">Large</Radio>
					</Radio.Group>
				</Row>
				<Spacer y={0.3} />
				<Text size={14}>How awesome should your cactus be?</Text>
				<Row justify="space-between" align="center">
					<Button
						css={{padding: "0", width: "20px", height: "16px"}}
						rounded
						auto
						color="primary"
						onClick={() => setValue(value - 5)}
						icon={<BsCaretDownFill color="white" size={9} />}
					/>
					<Spacer x={0.3} />
					<Progress color="primary" value={value} />
					<Spacer x={0.3} />
					<Button
						css={{padding: "0", width: "20px", height: "16px"}}
						rounded
						auto
						color="primary"
						onClick={() => setValue(value + 5)}
						icon={<BsCaretUpFill color="white" size={9} />}
					/>
				</Row>

				<Row justify="space-between">
					<Checkbox
						rounded
						size="sm">
						<Text size={14}>I agree to sell my privacy</Text>
					</Checkbox>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button rounded auto onClick={() => props.onClose()}>
					<Text color="white">Buy now</Text>
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default NextUIModal;
