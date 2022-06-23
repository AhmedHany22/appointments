import React, { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";

import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentList from "./components/AppointmentList";

const App = () => {
  let [appointments, setAppointments] = useState([]);

  let [query, setQuery] = useState("");

  const filteredAppointments = appointments.filter((item) => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    );
  });

  const onQueryChange = (myQuery) => setQuery(myQuery);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onDeleteAppointment = (appointmentId) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== appointmentId)
    );
  };

  return (
    <div className="App-header px-2">
      <div className="App mt-20 font-thin">
        <h1 className="text-5xl font-bold underline header">
          <BiCalendar className="inline-block text-red-400 align-center" />
          All Appointments
        </h1>
        <AddAppointment />
        <Search query={query} onQueryChange={onQueryChange} />
        <AppointmentList
          list={filteredAppointments}
          onDeleteAppointment={onDeleteAppointment}
        />
      </div>
    </div>
  );
};

export default App;
