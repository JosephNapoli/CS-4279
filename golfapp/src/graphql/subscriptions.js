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
      player4Score
      complete
      PlayGames {
        nextToken
        startedAt
      }
      leader
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      player4Score
      complete
      PlayGames {
        nextToken
        startedAt
      }
      leader
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      player4Score
      complete
      PlayGames {
        nextToken
        startedAt
      }
      leader
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        player4Score
        complete
        leader
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      player {
        id
        email
        homeCourse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        player4Score
        complete
        leader
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      player {
        id
        email
        homeCourse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        player4Score
        complete
        leader
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      player {
        id
        email
        homeCourse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
