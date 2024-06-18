import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, loading, error, skeletons } = useGenres();
  if (error) return null;

  return (
    <div>
      {loading &&
        skeletons.map((skeleton) => (
          <List>
            <ListItem key={skeleton}>
              <HStack margin={2}>
                <Skeleton height="40px" borderRadius={8} width={"60px"} />
                <Skeleton height="20px" width="200px" />
              </HStack>
            </ListItem>
          </List>
        ))}

      {data.map((genre) => (
        <List>
          <ListItem key={genre.id}>
            <HStack margin={2}>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default GenreList;
