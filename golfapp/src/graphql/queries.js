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
        player4Score
        complete
        leader
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        player4Score
        complete
        leader
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayers = /* GraphQL */ `
  query SyncPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        homeCourse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGamePlayers = /* GraphQL */ `
  query SyncGamePlayers(
    $filter: ModelGamePlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGamePlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        gameId
        playerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
