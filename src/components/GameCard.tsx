import {
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import useGameDetails from "../hooks/useGameDetails";
import AgeRating from "./AgeRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // Fetch the game details using the useGameDetails hook
  const { data } = useGameDetails(game.id);
  // truncate the string to 100 characters
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
  // Track the hover state of the card

  return (
    <>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <CardBody>
          <HStack spacing={2} marginBottom={2} justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <HStack>
              <CriticScore score={game.metacritic} />
              <Emoji rating={game.rating_top}></Emoji>
            </HStack>
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name} {""}
            <AgeRating esrb_rating={data.esrb_rating?.slug} />
          </Heading>
          <div className="HiddenCard">
            {/* Display the released date using data?.released */}
            <HStack
              color="gray.500"
              justifyContent={"space-between"}
              fontSize={"small"}
              marginY={2}
            >
              <div>Released:</div> <div>{data.released}</div>
            </HStack>
            <Divider />
            <HStack
              justifyContent={"space-between"}
              color="gray.500"
              fontSize={"small"}
              marginY={2}
            >
              <div>Genres:</div>
              <div>{data?.genres.map((genre) => genre.name).join(", ")}</div>
            </HStack>
            <Divider />
            <Text marginY={2} color={"gray.500"} fontSize={"small"}>
              {/* Adjust 100 to your desired length */}
              {truncateString(data.description_raw, 300)}{" "}
              <a
                href={`/game/${game.id}`}
                style={{ textDecoration: "underline" }}
              >
                Read more
              </a>{" "}
            </Text>{" "}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
