import { useEffect, useState } from "react";
import { HStack, Divider, Text } from "@chakra-ui/react";
import { FetchDetailsResponse } from "../hooks/useGameDetails";

interface Props {
  hover: boolean;
  data: FetchDetailsResponse;
}

const HiddenCard = ({ data, hover }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hover) {
      setIsVisible(true);
    } else {
      // This will make the component return null when hover becomes false
      setIsVisible(false);
    }
  }, [hover]);

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  if (!isVisible) return null;

  return (
    <>
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
        {truncateString(data.description_raw, 300)}{" "}
        <a href={`/game/${data.id}`} style={{ textDecoration: "underline" }}>
          Read more
        </a>{" "}
      </Text>{" "}
    </>
  );
};

export default HiddenCard;
