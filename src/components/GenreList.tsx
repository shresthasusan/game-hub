import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();

  return (
    <div>
      {genres.map((genre) => (
        <ul>
          <li key={genre.id}>{genre.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default GenreList;
