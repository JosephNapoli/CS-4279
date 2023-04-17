import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly player1: string;
  readonly player2: string;
  readonly player3?: string | null;
  readonly player4?: string | null;
  readonly date?: string | null;
  readonly player1Score?: number[] | null;
  readonly player2Score?: number[] | null;
  readonly player3Score?: (number | null)[] | null;
  readonly player4Score?: (number | null)[] | null;
  readonly complete?: boolean | null;
  readonly PlayGames?: (GamePlayer | null)[] | null;
  readonly leader?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly player1: string;
  readonly player2: string;
  readonly player3?: string | null;
  readonly player4?: string | null;
  readonly date?: string | null;
  readonly player1Score?: number[] | null;
  readonly player2Score?: number[] | null;
  readonly player3Score?: (number | null)[] | null;
  readonly player4Score?: (number | null)[] | null;
  readonly complete?: boolean | null;
  readonly PlayGames: AsyncCollection<GamePlayer>;
  readonly leader?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly homeCourse: string;
  readonly games?: (GamePlayer | null)[] | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly homeCourse: string;
  readonly games: AsyncCollection<GamePlayer>;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

type EagerGamePlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GamePlayer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gameId?: string | null;
  readonly playerId?: string | null;
  readonly game: Game;
  readonly player: Player;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGamePlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GamePlayer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gameId?: string | null;
  readonly playerId?: string | null;
  readonly game: AsyncItem<Game>;
  readonly player: AsyncItem<Player>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GamePlayer = LazyLoading extends LazyLoadingDisabled ? EagerGamePlayer : LazyGamePlayer

export declare const GamePlayer: (new (init: ModelInit<GamePlayer>) => GamePlayer) & {
  copyOf(source: GamePlayer, mutator: (draft: MutableModel<GamePlayer>) => MutableModel<GamePlayer> | void): GamePlayer;
}