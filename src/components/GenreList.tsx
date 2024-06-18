import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <div>
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
