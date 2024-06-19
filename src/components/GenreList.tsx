import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { data, loading, error, skeletons } = useGenres();
  if (error) return null;

  return (
    <div>
      <Heading fontSize={"2xl"} marginY={5}>Genres</Heading>
      {loading && (
        <List>
          {skeletons.map((index) => (
            <ListItem key={index}>
              <HStack margin={2}>
                <Skeleton height="40px" borderRadius={8} width={"60px"} />
                <Skeleton height="20px" width="200px" />
              </HStack>
            </ListItem>
          ))}
        </List>
      )}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginY={2}>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                objectFit={"cover"}
              />
              <Button whiteSpace={"normal"} textAlign={"left"} fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onGenreSelect(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
