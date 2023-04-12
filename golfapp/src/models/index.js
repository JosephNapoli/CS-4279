// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game, Player, GamePlayer } = initSchema(schema);

export {
  Game,
  Player,
  GamePlayer
};