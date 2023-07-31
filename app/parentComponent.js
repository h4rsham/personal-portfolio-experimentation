// ParentComponent.js
import { useClient } from "next/server-components";

function ParentComponent({ children }) {
  // Mark this component as a client component using "useClient"
  useClient();
  return <>{children}</>; // Render the children components inside the parent
}

export default ParentComponent;
