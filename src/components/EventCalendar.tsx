import { Calendar } from "antd";
import { Moment } from "moment";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { formateDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formateDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (event) => event.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((event, id) => (
          <div key={id}>{event.description}</div>
        ))}
      </div>
    );
  };
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
