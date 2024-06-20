import bullsEye from "../assets/bulls-eye.webp";
import thumnbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "24px" },
    4: { src: thumnbsUp, alt: "recommended", boxSize: "24px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
  };

  return (
    <Image
      {...emojiMap[rating]}
      alt={emojiMap[rating].alt}
      objectFit={"cover"}
      marginTop={2}
    />
  );
};

export default Emoji;
