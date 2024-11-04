# Hotel Project overview

Create an application for renting a hotel room. The user, after logging in, should be able to see a list of hotels, select one and make a reservation to rent a free room in that hotel if rooms are available.
The Hotel project is structured as follows:
A hotel has a: - Name; - Location; - List of available rooms; - Average rate.

A room has: - Capacity - the number of people who can sleep there; - A price for renting the room per day.

The user has: - A list of reservations; - A list of rates given to hotels.

Users can make a reservation to rent a room. A reservation has: - A starting date; - A ending date.

Users can rate their experience at a hotel. - One user can give only one rating to one hotel. - The rating is an integer number from 1 to 5.

## Models

Hotels:
| id | name | location |

- Hotels have many rooms.
- Hotels have many ratings.

Rooms:
| id | hotel_id | capacity | price |

- Rooms belong to a hotel.

Users:
| id | username | password |

Reservation:
| id | user_id | room_id | start_date | end_date |

- Reservations belong to a user.
- Reservations belong to a room.

Ratings:
| id | user_id | hotel_id | rate |

- Ratings belong to a user.
- Ratings belong to a hotel.
