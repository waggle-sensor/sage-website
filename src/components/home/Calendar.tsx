import React, { useEffect, useState } from 'react'


const calID = '65dcf6922cf9f84679f598865716f1fea2b7d974896c300fda9d3e26810aa1e8@group.calendar.google.com'
const url = `https://www.googleapis.com/calendar/v3/calendars/${calID}/events?key=AIzaSyAchO5mV1RTkQvvQSqndYg3eM6MQSkIr9o&singleEvents=true&calendarID=primary`

const maxResults = 3
const orderBy = 'startTime'


const dateConfig = {
  month: 'short',
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}


const formatCalDate = (start, end) => {
  const config = {...dateConfig}

  const {dateTime} = start
  let {date} = start

  // if only date, add a day and remove time from config
  if (!dateTime && date) {
    date = new Date(date)
    date.setDate(date.getDate() + 1)
    delete config.hour
    delete config.minute
  }

  const startStr = `${new Date(dateTime || date).toLocaleString('en-US', config)}`

  // display the end date if multi-day event
  const startDay = new Date(date).getDate()
  const endDay = new Date(end.date).getDate()
  const endStr =
    endDay > startDay
      ? `${new Date(end.dateTime || end.date).toLocaleString('en-US', config)}`
      : null

  return `${startStr} ${endStr ? ` - ${endStr}` : ''}`
}


export default function Calendar() {
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents(calID)
      .then(events => {
        // sort and limit events
        events.sort(
          (a, b) => Date.parse(a.start.dateTime || a.start.date) - Date.parse(b.start.dateTime || b.start.date)
        ).slice(0, maxResults)

        setEvents(events)
      })
      .catch(err => setError(err))
  }, [])

  const fetchEvents = () => {
    const timeMin = new Date().toISOString()
    return fetch(`${url}&timeMin=${timeMin}&maxResults=${maxResults}&orderBy=${orderBy}`)
      .then(res => res.json())
      .then(data => data.items)
  }

  return (
    <>
      {events && (
        <ul className="px-0 list-none">
          {events.map((event, i) => {
            const {description = '', summary, start, end} = event

            return (
              <li key={i} className="mb-8">
                <h3 className="mb-2">
                  {summary}
                  <i className="fas fa-external-link-alt"
                    style={{ position: 'absolute', marginLeft: '5px' }}
                  ></i>
                </h3>

                <span className="text-gray-500 font-bold text-sm">{formatCalDate(start, end)}</span>

                <h4 className="text-gray-500">[<a href={description} target="_blank" rel="noreferrer">Read more...</a>]</h4>
              </li>
            )
          })}
        </ul>
      )}

      {error && 'There was an issue loading the event calendar.'}
    </>
  )
}
