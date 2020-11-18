import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function TripDetailsPage() {

  useProtectedPage()

  return (
    <div>
      TripDetailsPage
    </div>
  );
}

export default TripDetailsPage;