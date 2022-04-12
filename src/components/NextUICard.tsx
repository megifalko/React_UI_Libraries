import {Card, Col, Spacer, Row, Button, Text} from "@nextui-org/react";
import cactus from "../images/cactus.jpg";

interface propsType {
	url: string;
}
const NextUI = (props: propsType) => {
	return (
		<Card id={props.url} cover css={{width: "340px", height: "400px"}}>
			<Card.Header css={{position: "absolute", top: 0}}>
				<Col>
					<Text size={14} weight="bold" transform="uppercase" color="#ffffffd2">
						On Sale
					</Text>
					<Text h3 color="white">
						Cactus
					</Text>
				</Col>
			</Card.Header>
			<Card.Body css={{p: 0}}>
				<Card.Image src={props.url} objectFit="cover" height={400} width="100%"/>
			</Card.Body>
			<Card.Footer
				css={{
					backgroundColor: "white",
					position: "absolute",
					bottom: 0,
					flexDirection: "column",
				}}>
				<Text size={14} color="black">
					With our cactus you can become a happy cactus owner.
				</Text>
				<Spacer y={1} />
				<Button auto rounded color="primary" css={{alignSelf: "stretch"}}>
					<Text
						css={{color: "white", letterSpacings: "widest"}}
						size={12}
						weight="bold"
						transform="uppercase">
						Buy now
					</Text>
				</Button>
				<Row wrap="wrap" justify="space-between"></Row>
			</Card.Footer>
		</Card>
	);
};

export default NextUI;
