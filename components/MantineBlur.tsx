import {Card, Image, Text, Badge, Button, Group, useMantineTheme, Space, Loader} from "@mantine/core";
import {useState} from "react";
import MantineModal from "./MantineModal";

interface propsType{
	url: string;
}

const MantineBlur = (props: propsType) => {
	const [modalOpened, setModalOpened] = useState(false);
	const theme = useMantineTheme();
	return (
		<Card id={props.url} shadow="xl" p="lg" radius="lg" style={{width: "340px", paddingBottom: "0"}}>
			<Card.Section>
				<Image src={props.url} height={400} withPlaceholder placeholder={<Loader/>}></Image>
			</Card.Section>
			<div className="blurred">
				<Group position="apart">
					<Text color="white" size="xl" weight={700}>
						Cactus
					</Text>
					<Badge
						variant="light"
						style={{background: theme.colors["khaki-green"][3], color: "white"}}>
						On Sale
					</Badge>
				</Group>
				<Space h="sm" />
				<Text color="white" size="sm">
					With our cactus you will become a happy cactus owner.
				</Text>
				<Space h="md" />
				<MantineModal opened={modalOpened} onClose={() => setModalOpened(false)} />
				<Button radius="lg" color={"khaki-green"} onClick={() => setModalOpened(true)}>
					Buy now
				</Button>
			</div>
		</Card>
	);
};

export default MantineBlur;
