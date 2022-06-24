type TextProps = {
  body: string;
};

export default function Text({ body }: TextProps) {
  return <div className="card-text">{body}</div>;
}
