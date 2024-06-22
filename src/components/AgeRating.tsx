import { Badge } from "@chakra-ui/react";

interface Props {
  esrb_rating: string;
}

const AgeRating = ({ esrb_rating }: Props) => {
  const iconMap: { [key: string]: string } = {
    // "everyone": TbRating12Plus,
    // "everyone-10-plus": TbRating14Plus,
    // "teen": TbRating16Plus,
    // "mature": TbRating18Plus,
    // "adults-only": TbRating21Plus,
    // "ratingpending": FcRatings,
    everyone: "E",
    "everyone-10-plus": "E 10+",
    teen: "T",
    mature: "M",
    "adults-only": "AO",
    ratingpending: "NR",
  };
  if (!esrb_rating) return null;
  return (
    <Badge>{iconMap[esrb_rating]}</Badge>
    //  <Icon transform={"translateY(5px)"} marginX={1} boxSize={"24px"}  as={iconMap[esrb_rating]} color="gray.300" />
  );
};

export default AgeRating;
