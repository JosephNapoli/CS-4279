/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      email
      homeCourse
      games {
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      email
      homeCourse
      games {
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      email
      homeCourse
      games {
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createGamePlayer = /* GraphQL */ `
  mutation CreateGamePlayer(
    $input: CreateGamePlayerInput!
    $condition: ModelGamePlayerConditionInput
  ) {
    createGamePlayer(input: $input, condition: $condition) {
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
        name
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
export const updateGamePlayer = /* GraphQL */ `
  mutation UpdateGamePlayer(
    $input: UpdateGamePlayerInput!
    $condition: ModelGamePlayerConditionInput
  ) {
    updateGamePlayer(input: $input, condition: $condition) {
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
        name
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
export const deleteGamePlayer = /* GraphQL */ `
  mutation DeleteGamePlayer(
    $input: DeleteGamePlayerInput!
    $condition: ModelGamePlayerConditionInput
  ) {
    deleteGamePlayer(input: $input, condition: $condition) {
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
        name
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
