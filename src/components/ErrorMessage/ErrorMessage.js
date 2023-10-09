import { Alert } from "react-bootstrap";

export default function ErrorMessage({ errorMessages }) {

  return (<>
      {errorMessages.map((item) => {
        return <Alert variant="danger" key={item}>{item}</Alert>;
      })}
   </>
  );
}
