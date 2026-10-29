const nba = require('nba-api-client');

const nomeJogador = process.argv[2] || 'LeBron James';

function formatarValor(valor) {
  return valor === undefined || valor === null || valor === '' ? 'N/A' : valor;
}

(async () => {
  try {
    const player = await nba.getPlayerID(nomeJogador);
    const info = await nba.playerInfo({ PlayerID: player.PlayerID });
    const team = await nba.teamDetails({ TeamID: player.TeamID });
    const career = await nba.playerCareerStats({ PlayerID: player.PlayerID });

    const bio = info.CommonPlayerInfo;
    const headline = info.PlayerHeadlineStats;
    const totals = career.CareerTotalsRegularSeason;

    console.log('\n=== PERFIL DO JOGADOR ===');
    console.log(`Nome: ${bio.FIRST_NAME} ${bio.LAST_NAME}`);
    console.log(`Time atual: ${bio.TEAM_CITY} ${bio.TEAM_NAME}`);
    console.log(`Posição: ${bio.POSITION}`);
    console.log(`Número: ${bio.JERSEY}`);
    console.log(`Altura: ${bio.HEIGHT} | Peso: ${bio.WEIGHT}`);
    console.log(`País: ${bio.COUNTRY} | Escola: ${bio.SCHOOL}`);
    console.log(`Exp.: ${bio.SEASON_EXP} temporadas | Idade: ${new Date().getFullYear() - new Date(bio.BIRTHDATE).getFullYear()}`);
    console.log(`Time da franquia: ${team.TeamBackground.CITY} ${team.TeamBackground.NICKNAME}`);
    console.log(`Abreviação: ${team.TeamBackground.ABBREVIATION}`);
    console.log(`Arena: ${team.TeamBackground.ARENA}`);

    console.log('\n=== ESTATÍSTICAS MAIS RELEVANTES ===');
    console.log(`Temporada: ${headline.TimeFrame}`);
    console.log(`PTS: ${headline.PTS} | AST: ${headline.AST} | REB: ${headline.REB} | PIE: ${headline.PIE}`);

    console.log('\n=== RESUMO DA CARREIRA ===');
    console.log(`Jogos: ${totals.GP} | Minutos: ${totals.MIN} | Pontos: ${totals.PTS}`);
    console.log(`Assistências: ${totals.AST} | Rebotes: ${totals.REB} | Roubos: ${totals.STL} | Bloqueios: ${totals.BLK}`);
    console.log(`FG%: ${totals.FG_PCT} | 3P%: ${totals.FG3_PCT} | FT%: ${totals.FT_PCT}`);
    console.log(`Média de arremesso: ${totals.FGM}/${totals.FGA} | 3P: ${totals.FG3M}/${totals.FG3A}`);

    console.log('\n=== DADOS TÉCNICOS ===');
    console.log(`Jogos: ${formatarValor(totals.GP)} | Pontos por jogo: ${formatarValor(totals.PTS)} | Assistências por jogo: ${formatarValor(totals.AST)}`);
    console.log(`Rebotes por jogo: ${formatarValor(totals.REB)} | Fração de aproveitamento: ${formatarValor(totals.FG_PCT)}`);
  } catch (error) {
    console.error('\nErro ao buscar os dados do jogador.');
    console.error(error.message || error);
    process.exit(1);
  }
})();