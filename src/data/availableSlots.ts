// src/data/availableSlots.ts
export interface BookingEvent {
  title: string;
  start: Date;
  end: Date;
}

export function getDummyBookings(baseDate = new Date()): BookingEvent[] {
  const getDateWithTime = (dayOffset: number, hour: number, minutes: number) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + dayOffset);
    date.setHours(hour, minutes, 0, 0);
    return date;
  };

  return [
    {
      title: 'Anna (Manicure)',
      start: getDateWithTime(1, 10, 0),
      end: getDateWithTime(1, 10, 30),
    },
    {
      title: 'Lisa (Pedicure)',
      start: getDateWithTime(2, 13, 0),
      end: getDateWithTime(2, 13, 30),
    },
    {
      title: 'Tom (Nail Art)',
      start: getDateWithTime(3, 11, 30),
      end: getDateWithTime(3, 12, 0),
    },
    {
      title: 'Mia (Spa)',
      start: getDateWithTime(4, 15, 0),
      end: getDateWithTime(4, 15, 30),
    },
    {
      title: 'Sara (Manicure)',
      start: getDateWithTime(1, 11, 0),
      end: getDateWithTime(1, 11, 30),
    },
    {
      title: 'John (Pedicure)',
      start: getDateWithTime(1, 12, 0),
      end: getDateWithTime(1, 12, 30),
    },
    {
      title: 'Sophia (Spa)',
      start: getDateWithTime(2, 14, 0),
      end: getDateWithTime(2, 14, 30),
    },
    {
      title: 'Olivia (Manicure)',
      start: getDateWithTime(3, 10, 0),
      end: getDateWithTime(3, 10, 30),
    },
    {
      title: 'James (Pedicure)',
      start: getDateWithTime(3, 13, 0),
      end: getDateWithTime(3, 13, 30),
    },
    {
      title: 'Lucas (Nail Art)',
      start: getDateWithTime(4, 11, 30),
      end: getDateWithTime(4, 12, 0),
    },
    {
      title: 'Ella (Spa)',
      start: getDateWithTime(4, 16, 0),
      end: getDateWithTime(4, 16, 30),
    },
    {
      title: 'William (Pedicure)',
      start: getDateWithTime(5, 10, 0),
      end: getDateWithTime(5, 10, 30),
    },
    {
      title: 'Mason (Nail Art)',
      start: getDateWithTime(5, 11, 0),
      end: getDateWithTime(5, 11, 30),
    },
    {
      title: 'Isabella (Spa)',
      start: getDateWithTime(5, 14, 0),
      end: getDateWithTime(5, 14, 30),
    },
    {
      title: 'Ethan (Manicure)',
      start: getDateWithTime(6, 12, 0),
      end: getDateWithTime(6, 12, 30),
    },
    {
      title: 'Charlotte (Pedicure)',
      start: getDateWithTime(6, 13, 0),
      end: getDateWithTime(6, 13, 30),
    },
    {
      title: 'Benjamin (Nail Art)',
      start: getDateWithTime(6, 15, 0),
      end: getDateWithTime(6, 15, 30),
    },
    {
      title: 'Amelia (Spa)',
      start: getDateWithTime(6, 16, 0),
      end: getDateWithTime(6, 16, 30),
    },
    {
      title: 'Henry (Manicure)',
      start: getDateWithTime(7, 10, 0),
      end: getDateWithTime(7, 10, 30),
    },
    {
      title: 'Mila (Pedicure)',
      start: getDateWithTime(7, 11, 0),
      end: getDateWithTime(7, 11, 30),
    },
    {
      title: 'Jack (Nail Art)',
      start: getDateWithTime(7, 13, 0),
      end: getDateWithTime(7, 13, 30),
    },
    {
      title: 'Harper (Spa)',
      start: getDateWithTime(7, 14, 0),
      end: getDateWithTime(7, 14, 30),
    },
    {
      title: 'Grace (Manicure)',
      start: getDateWithTime(2, 15, 0),
      end: getDateWithTime(2, 15, 30),
    },
    {
      title: 'Leo (Pedicure)',
      start: getDateWithTime(3, 16, 0),
      end: getDateWithTime(3, 16, 30),
    },
    {
      title: 'Zoe (Spa)',
      start: getDateWithTime(5, 15, 0),
      end: getDateWithTime(5, 15, 30),
    },
    {
      title: 'Emma (Pedicure)',
      start: getDateWithTime(7, 12, 0),
      end: getDateWithTime(7, 12, 30),
    },
  ];
}
