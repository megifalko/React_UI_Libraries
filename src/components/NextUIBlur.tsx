import {Card, Col, Row, Button, Text} from "@nextui-org/react";
import { useState } from "react";
import NextUIModal from "./NextUIModal";

interface propsType{
	url: string;
}

const NextUIBlur = (props: propsType) => {
    const [modalOpened, setModalOpened] = useState(false);
	return (
		<Card cover css={{w: "340px", height: "400px"}}>
			<Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
				<Col>
					<Text size={14} weight="bold" transform="uppercase" color="#ffffffd2">
						On Sale
					</Text>
					<Text h3 color="white">
						Cactus
					</Text>
				</Col>
			</Card.Header>
			<Card.Body>
				<Card.Image src={props.url} height={400} width="100%" alt="Card example background" />
			</Card.Body>
			<Card.Footer
				blur
				css={{
					position: "absolute",
					bgBlur: "#828282",
					borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					bottom: 0,
					zIndex: 1,
				}}>
				<Row align="center">
					<Col>
						<Text color="#fff" size={14}>
							With our cactus you will become a happy cactus owner.
						</Text>
					</Col>
					<Col>
						<Row justify="flex-end">
                            <NextUIModal opened={modalOpened} onClose={() => setModalOpened(false)} />
							<Button auto rounded color="secondary" onClick={() => setModalOpened(true)}>
								<Text
									css={{color: "$primary", letterSpacings: "widest"}}
									size={12}
									weight="bold"
									transform="uppercase">
									Buy now
								</Text>
							</Button>
						</Row>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default NextUIBlur;
