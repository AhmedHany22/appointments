import React, { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";

import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentList from "./components/AppointmentList";

const App = () => {
  let [appointments, setAppointments] = useState([]);
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");
  let [query, setQuery] = useState("");

  const filteredAppointments = appointments
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const onQueryChange = (myQuery) => setQuery(myQuery);
  const onOrderByChange = (mySort) => setOrderBy(mySort);
  const onSortByChange = (mySort) => setSortBy(mySort);

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

  const onSendAppointment = (myAppointment) => {
    setAppointments([...appointments, myAppointment]);
  };

  const lastId = () => {
    appointments.reduce(
      (max, item) => (Number(item.id) > max ? Number(item.id) : max),
      0
    );
  };

  return (
    <div className="App-header px-2">
      <div className="App mt-20 font-thin">
        <h1 className="text-5xl font-bold underline header">
          <BiCalendar className="inline-block text-red-400 align-center" />
          All Appointments
        </h1>
        <AddAppointment onSendAppointment={onSendAppointment} lastId={lastId} />
        <Search
          query={query}
          onQueryChange={onQueryChange}
          orderBy={orderBy}
          onOrderByChange={onOrderByChange}
          sortBy={sortBy}
          onSortByChange={onSortByChange}
        />
        <AppointmentList
          list={filteredAppointments}
          onDeleteAppointment={onDeleteAppointment}
        />
      </div>
    </div>
  );
};

export default App;
