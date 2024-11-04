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
| id | hotelId | capacity | price |

- Rooms belong to a hotel.

Users:
| id | username | password |

Reservation:
| id | userId | roomId | startDate | endDate |

- Reservations belong to a user.
- Reservations belong to a room.

Ratings:
| id | userId | hotelId | rating |

- Ratings belong to a user.
- Ratings belong to a hotel.
- One user can give only one rating to one hotel.

## Test data

INSERT INTO Users (FirstName, LastName)
VALUES ('John', 'Doe'),('Barbara', 'Stones');

INSERT INTO Hotels (Name, Location)
VALUES ('Street Motel', 'Chicago');

INSERT INTO Hotels (Name, Location)
VALUES ('Mariott', 'Warshaw');

INSERT INTO Rooms (Capacity, PricePerDay, HotelId)
VALUES (2, 22.50, 1),(4, 40, 1);

INSERT INTO Rates (UserId, HotelId, Value)
VALUES (1, 1, 4)
