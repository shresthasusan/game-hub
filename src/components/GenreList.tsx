import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ onGenreSelect }: Props) => {
  const { data, loading, error, skeletons } = useGenres();
  if (error) return null;

  return (
    <div>
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
            <HStack margin={2}>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
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
