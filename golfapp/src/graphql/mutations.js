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
      }
      leader
      player1Card
      player2Card
      createdAt
      updatedAt
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
      }
      leader
      player1Card
      player2Card
      createdAt
      updatedAt
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
      }
      leader
      player1Card
      player2Card
      createdAt
      updatedAt
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
      }
      name
      createdAt
      updatedAt
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
      }
      name
      createdAt
      updatedAt
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
      }
      name
      createdAt
      updatedAt
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
