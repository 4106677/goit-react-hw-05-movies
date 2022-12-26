// import Container from 'components/Container';
// import RequestError from 'components/RequestError';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastId, IMAGE_URL } from 'services/Api';
import { Container, Item, Poster, Description } from './Casts.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCastId(movieId)
      .then(actors => {
        setActors(actors);

        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error);
        setActors([]);
      });
  }, [movieId]);

  return (
    <>
      {actors.length > 0 && (
        <Container>
          {actors.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              <Poster src={IMAGE_URL + profile_path} alt={name} width={200} />
              <Description>
                <b>{name}</b>
                <p>
                  <b>Character:</b> {character}
                </p>
              </Description>
            </Item>
          ))}
        </Container>
      )}
      {actors.length === 0 && !error && <p>Not actors</p>}
    </>
  );
};

export default Cast;
