import bullsEye from "../assets/bulls-eye.webp";
import thumnbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumnbsUp, alt: "recommended", boxSize: "20px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "24px" },
  };

  return (
    <img
      src={emojiMap[rating].src}
      alt={emojiMap[rating].alt}
      style={{
        width: emojiMap[rating].boxSize,
        height: emojiMap[rating].boxSize,
      }}
    />
  );
};

export default Emoji;
