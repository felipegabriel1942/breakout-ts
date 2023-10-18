import { Game } from './application/game';

// TODO: Criar arquivo config onde serão guardados todas as constantes e mensagens do jogo
const main = () => {
  const game = new Game();
  game.execute();
};

main();
