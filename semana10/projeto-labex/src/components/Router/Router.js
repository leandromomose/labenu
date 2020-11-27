import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../../components/HomePage/HomePage";
import ApplicationFormPage from "../../components/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../../components/LoginPage/LoginPage";
import CreateTripPage from "../../components/CreateTripPage/CreateTripPage";
import ListTripsPage from "../../components/ListTripsPage/ListTripsPage";
import TripDetailsPage from "../../components/TripDetailsPage/TripDetailsPage";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;