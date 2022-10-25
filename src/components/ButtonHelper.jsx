import Button from "@mui/material/Button";

export default function ButtonHelper(props) {
  const { variant, action, color, text } = props;
  return (
    <Button variant={variant} onClick={action} color={color}>
      {text}
    </Button>
  );
}
