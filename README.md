# :rocket: meetapp-web-reactjs

## :computer: Preview

- You can see the web preview printscreens [here](/preview).

### :key: Authentication

- [x] The user can login using e-mail and password.
- [x] I have used JWT to authenticate the user.
- [x] All login fields are checked via Yup.

## :man: User register and update

- [x] The user can register using name, e-mail and password.
- [x] To update the password user need to send a password confirmation and the old password.
- [x] User passwords are all encripted.
- [x] All register and update field requests are checked via Yup.

## :calendar: MeetUp subscription

- [x] The user can subscribe to meetups that are not of him.
- [x] The user can't subscribe to meetups that already happened.
- [x] The user can't subscribe to the same meetup two times.
- [x] The user can't subscribe to meetups that happen at the same time.
- [x] The owner of the meetup receive a email when a user subscribe to one of his meetups.

## :bookmark_tabs: MeetUps list

- [x] MeetUps can be list by date and are paged by 10 meetups.

## :round_pushpin: Subscription list

- [x] There is a route to list all future meetups that the current user is subscribed.

## :exclamation: Possible improvements

- Add cache to routes like the meetup list route.

## :wrench: Running the project

- First you need to set up and initialize the [backend](https://github.com/maeldz/meetapp-backend-nodejs).
- Install docker and create a postgres and redis container.
- Clone this repository.
- Install all dependencies using the command `yarn`.
- Run `yarn start`.

## :fire: Used technologies

- ReactJS
- Styled Components
- Reactotron
- Redux
- Redux Saga
- Other React libs.

## :man: Contributors

- @maeldz
