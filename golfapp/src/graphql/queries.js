/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        homeCourse
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGamePlayer = /* GraphQL */ `
  query GetGamePlayer($id: ID!) {
    getGamePlayer(id: $id) {
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
export const listGamePlayers = /* GraphQL */ `
  query ListGamePlayers(
    $filter: ModelGamePlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGamePlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameId
        playerId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const gamePlayersByGameId = /* GraphQL */ `
  query GamePlayersByGameId(
    $gameId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGamePlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gamePlayersByGameId(
      gameId: $gameId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        gameId
        playerId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const gamePlayersByPlayerId = /* GraphQL */ `
  query GamePlayersByPlayerId(
    $playerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGamePlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gamePlayersByPlayerId(
      playerId: $playerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        gameId
        playerId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
