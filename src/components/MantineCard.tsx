import {Card, Image, Text, Badge, Button, Group, useMantineTheme} from "@mantine/core";
import cactus from "../images/cactus.jpg";
import MantineModal from "./MantineModal";
import {useState} from "react";

interface propsType{
	url: string;
}

const Mantine = (props: propsType) => {
	const [modalOpened, setModalOpened] = useState(false);
	const theme = useMantineTheme();
	console.log(theme.colors.red[5]);
	const clr = theme.colors["khaki-green"][4];
	console.log(clr);

	const secondaryColor =
		theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<div style={{width: 340}}>
			<Card shadow="sm" p="lg" radius="lg">
				<Card.Section>
					<Image src={props.url} height={250} />
				</Card.Section>

				<Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
					<Text size="xl" weight={700}>Cactus</Text>
					<Badge
						variant="light"
						style={{background: theme.colors["khaki-green"][3], color: "white"}}>
						On Sale
					</Badge>
				</Group>

				<Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
					With our cactus you will become a happy cactus owner.
				</Text>
				<MantineModal opened={modalOpened} onClose={() => setModalOpened(false)} />
				<Button
					onClick={() => setModalOpened(true)}
					variant="light"
					radius="lg"
					color={"khaki-green"}
					fullWidth
					style={{marginTop: 14, color: theme.colors["khaki-green"][9]}}>
					Buy now
				</Button>
			</Card>
		</div>
	);
};

export default Mantine;
