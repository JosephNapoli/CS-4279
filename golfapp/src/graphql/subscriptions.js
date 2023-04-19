/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
      id
      player1
      player2
      player3
      player4
      date
      player1Score
      player2Score
      player3Score
      complete
      PlayGames {
        nextToken
      }
      leader
      player1Card
      player2Card
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
      id
      player1
      player2
      player3
      player4
      date
      player1Score
      player2Score
      player3Score
      complete
      PlayGames {
        nextToken
      }
      leader
      player1Card
      player2Card
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
      id
      player1
      player2
      player3
      player4
      date
      player1Score
      player2Score
      player3Score
      complete
      PlayGames {
        nextToken
      }
      leader
      player1Card
      player2Card
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
      id
      email
      homeCourse
      games {
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
      id
      email
      homeCourse
      games {
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
      id
      email
      homeCourse
      games {
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGamePlayer = /* GraphQL */ `
  subscription OnCreateGamePlayer(
    $filter: ModelSubscriptionGamePlayerFilterInput
  ) {
    onCreateGamePlayer(filter: $filter) {
      id
      gameId
      playerId
      game {
        id
        player1
        player2
        player3
        player4
        date
        player1Score
        player2Score
        player3Score
        complete
        leader
        player1Card
        player2Card
        createdAt
        updatedAt
      }
      player {
        id
        email
        homeCourse
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGamePlayer = /* GraphQL */ `
  subscription OnUpdateGamePlayer(
    $filter: ModelSubscriptionGamePlayerFilterInput
  ) {
    onUpdateGamePlayer(filter: $filter) {
      id
      gameId
      playerId
      game {
        id
        player1
        player2
        player3
        player4
        date
        player1Score
        player2Score
        player3Score
        complete
        leader
        player1Card
        player2Card
        createdAt
        updatedAt
      }
      player {
        id
        email
        homeCourse
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGamePlayer = /* GraphQL */ `
  subscription OnDeleteGamePlayer(
    $filter: ModelSubscriptionGamePlayerFilterInput
  ) {
    onDeleteGamePlayer(filter: $filter) {
      id
      gameId
      playerId
      game {
        id
        player1
        player2
        player3
        player4
        date
        player1Score
        player2Score
        player3Score
        complete
        leader
        player1Card
        player2Card
        createdAt
        updatedAt
      }
      player {
        id
        email
        homeCourse
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
