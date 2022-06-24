type HeadingProps = {
  heading: string;
  size: 'large' | 'medium' | 'small';
};

export default function Heading({ heading, size}: HeadingProps) {

  if(size === 'medium') {
    return <h1 className="card-heading">{heading}</h1>;
  } else {
    return <h1 className="main-heading">{heading}</h1>;
  }
  
}
