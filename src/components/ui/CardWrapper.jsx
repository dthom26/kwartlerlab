import Card from "./Card";
const CardWrapper = ({ onClick, children, ...props }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <Card {...props}>{children}</Card>
    </div>
  );
};
export default CardWrapper;
