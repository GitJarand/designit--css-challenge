import Text from './Text';
import Heading from './Heading';

type CardProps = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function Card({ heading, body, image, imageAlt }: CardProps) {
  return (
    <article className="card-container">
      <img src={image} alt={imageAlt} className="card-image"/>
      <Heading heading={heading} size="medium"/>
      <Text body={body}/>
    </article>
  );
}
