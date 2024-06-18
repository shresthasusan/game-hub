import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <div>
      {data.map((genre) => (
        <ul>
          <li key={genre.id}>{genre.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default GenreList;
