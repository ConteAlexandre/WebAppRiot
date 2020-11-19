const IRON = 100;
const BRONZE = 200;
const SILVER = 300;
const GOLD = 400;
const PLATINUM = 500;
const DIAMOND = 600;
const MASTER = 700;
const GRANDMASTER = 800;
const CHALLENGER = 900;

const I = 20;
const II = 40;
const III = 60;
const IV = 80;

const GAPRANK = 100;
const GAPKDA = 2.5;

const ONE = 1;
const FIVE  = 5;

export class AlgoService {

  public generateListSumMock(nb) {
    let result = [];
    for (let i = 0; i < nb; i++){
      let randRank = Math.round(Math.random()*(4 - 1)+1);
      let rank: string;
      switch (randRank){
        case 1 :
          rank = 'I';
          break;
        case 2 :
          rank = 'II';
          break;
        case 3 :
          rank = 'III';
          break;
        case 4 :
          rank = 'IV';
          break;
      }
      let randTier: Number = Math.round(Math.random()*(8 - 1)+1);
      let tier: string;
      switch (randTier){
        case 1 :
          tier = 'IRON';
          break;
        case 2 :
          tier = 'BRONZE';
          break;
        case 3 :
          tier = 'SILVER';
          break;
        case 4 :
          tier = 'GOLD';
          break;
        case 5 :
          tier = 'PLATINUM';
          break;
        case 6 :
          tier = 'DIAMOND';
          break;
        case 7 :
          tier = 'MASTER';
          break;
        case 8 :
          tier = 'CHALLENGER';
          break;
      }
      let poste1 = 0;
      let poste2 = 0;
      do {
        poste1 = Math.round(Math.random()*(5 - 1)+1);
        poste2 = Math.round(Math.random()*(5 - 1)+1);
      }while (poste1 === poste2);

      let poste = [];
      switch (poste1){
        case 1 :
          poste.push('TOP');
          break;
        case 2 :
          poste.push('JUNGLE')
          break;
        case 3 :
          poste.push('MID');
          break;
        case 4 :
          poste.push('ADC');
          break;
        case 5 :
          poste.push('SUPPORT');
          break;
      }
      switch (poste2){
        case 1 :
          poste.push('TOP');
          break;
        case 2 :
          poste.push('JUNGLE')
          break;
        case 3 :
          poste.push('MID');
          break;
        case 4 :
          poste.push('ADC');
          break;
        case 5 :
          poste.push('SUPPORT');
          break;
      }
      let kill = Math.floor(Math.random()*(15 - 5)+1);
      let assist = Math.floor(Math.random()*(15 - 5)+1);
      let mort = Math.floor(Math.random()*(15 - 5)+1);
      let sum = {
        id: i+1,
        rank: rank,
        tier: tier,
        poste: poste,
        kill: kill,
        assist: assist,
        mort: mort,
      }
      result.push(sum);
    }
    return result;
  }

  public calculScoreRank(summoner) {
    let result = 0;
    switch (summoner.tier){
      case "IRON":
        result = IRON;
        break;
      case "BRONZE":
        result = BRONZE;
        break;
      case "SILVER":
        result = SILVER;
        break;
      case "GOLD":
        result = GOLD;
        break;
      case "PLATINUM":
        result = PLATINUM;
        break;
      case "DIAMOND":
        result = DIAMOND;
        break;
      case "MASTER":
        result = MASTER;
        break;
      case "GRANDMASTER":
        result = GRANDMASTER;
        break;
      case "CHALLENGER":
        result = CHALLENGER;
        break;
    }
    switch (summoner.rank){
      case "I":
        result += I;
        break;
      case "II":
        result += II;
        break;
      case "III":
        result += III;
        break;
      case "IV":
        result += IV;
        break;
    }
    return result
  }

  public calculKDA(summoner) {
    return ( summoner.kill + summoner.assist ) / summoner.mort;
  }

  public algoSuggestion(team, listSummoners, gapRank) {
    let scoreRankTeam = 0;
    let KDATeam = 0;
    let listPoste = [];
    team.forEach((summoner) => {
      scoreRankTeam += this.calculScoreRank(summoner);
      KDATeam += this.calculKDA(summoner);
      listPoste.push(summoner.poste);
    });
    KDATeam = KDATeam / team.length;
    scoreRankTeam = scoreRankTeam / team.length;
    let listSummonersFiltered = listSummoners.filter((item) => {
      let scoreItem = this.calculScoreRank(item);
      if (scoreItem < scoreRankTeam+gapRank && scoreItem > scoreRankTeam-gapRank){
        return item;
      }
    });
    if (listSummonersFiltered.length > 0){
      let monNouvelObjet = JSON.parse(JSON.stringify(listSummonersFiltered));
      let listSummonersFilteredByPoste = monNouvelObjet.filter((item) => {
        if (!listPoste.includes(item.poste[0])){
          item.poste = item.poste[0];
          return item;
        }
      });
      if (listSummonersFilteredByPoste.length > 0){
        let listSummonersFilteredByKDA = listSummonersFilteredByPoste.filter((item) => {
          let KDAItem = this.calculKDA(item);
          if (KDAItem < KDATeam+GAPKDA && KDAItem > KDATeam-GAPKDA){
            return item;
          }
        });
        if (listSummonersFilteredByKDA.length > 0){
          return listSummonersFilteredByKDA;
        }else{
          return listSummonersFilteredByPoste;
        }
      }else{
        let monNouvelObjet = JSON.parse(JSON.stringify(listSummonersFiltered));
        let listSummonersFilteredByPoste = monNouvelObjet.filter((item) => {
          if (!listPoste.includes(item.poste[1])){
            item.poste = item.poste[1];
            return item;
          }
        });
        if (listSummonersFilteredByPoste.length > 0){
          let listSummonersFilteredByKDA = listSummonersFilteredByPoste.filter((item) => {
            let KDAItem = this.calculKDA(item);
            if (KDAItem < KDATeam+GAPKDA && KDAItem > KDATeam-GAPKDA){
              return item;
            }
          })
          if (listSummonersFilteredByKDA.length > 0){
            return listSummonersFilteredByKDA;
          }else{
            return listSummonersFilteredByPoste;
          }
        }else{
          if (gapRank-GAPRANK > 100 && listSummonersFilteredByPoste.length === 0){
            let summonerBolossed = monNouvelObjet[0];
            let listPosteAvailable = ['TOP','JUNGLE','MID','ADC','SUPPORT'];
            let listPosteAvailableFiltered = listPosteAvailable.filter((poste) => {
              if (!listPoste.includes(poste)){
                return poste
              }
            });
            summonerBolossed.poste = listPosteAvailableFiltered[Math.floor(Math.random()*(listPosteAvailableFiltered.length - 2)+1)];
            return [summonerBolossed];
          }
          return this.algoSuggestion(team,listSummoners,gapRank+20);
        }
      }
    }else{
      if (gapRank-GAPRANK > 100){
        let summonerBolossed = JSON.parse(JSON.stringify(listSummoners[0]));
        let listPosteAvailable = ['TOP','JUNGLE','MID','ADC','SUPPORT'];
        let listPosteAvailableFiltered = listPosteAvailable.filter((poste) => {
          if (!listPoste.includes(poste)){
            return poste;
          }
        });
        summonerBolossed.poste = listPosteAvailableFiltered[Math.floor(Math.random()*(listPosteAvailableFiltered.length - 2)+1)];
        return [summonerBolossed];
      }else{
        return this.algoSuggestion(team,listSummoners,gapRank+20);
      }
    }
  }

  public createTeamForSummoner(summoner,listSummoners,format){
    let firstSummoner = JSON.parse(JSON.stringify(summoner));
    firstSummoner.poste = firstSummoner.poste[0];
    let result = [firstSummoner];
    do {
      let resultAlgo = this.algoSuggestion(result,listSummoners,GAPRANK);
      result.push(resultAlgo[0]);
      listSummoners = listSummoners.filter((sum) => {
        if (resultAlgo[0].id !== sum.id && firstSummoner.id !== sum.id){
          return sum;
        }
      });
    }while (result.length !== format);
    let KDATeam = 0;
    let scoreRankTeam = 0;
    result.forEach((summoner) => {
      scoreRankTeam += this.calculScoreRank(summoner);
      KDATeam += this.calculKDA(summoner);
    });
    KDATeam = KDATeam / result.length;
    scoreRankTeam = scoreRankTeam / result.length;
    let team = {
      summoners: result,
      KDA: KDATeam,
      rank: scoreRankTeam
    };
    return team;
  }

  public createTeamsForTournament(listSummoners,format) {
    let scoreMoyenneTournament = 0
    listSummoners.forEach((summoner) => {
      scoreMoyenneTournament += this.calculScoreRank(summoner);
    })
    scoreMoyenneTournament = scoreMoyenneTournament/listSummoners.length;
    let count = 0;
    let upGap = 0;
    let listSummonersSelected = [];
    let listSummonersFiltered = [];
    let listId = [];
    do{
      listSummonersFiltered = listSummoners.filter((sum) => {
        if (!listId.includes(sum.id)){
          return sum
        }
      });
      let pushListSelected = listSummonersFiltered.filter((summoner) => {
        let scoreSummoner = this.calculScoreRank(summoner);
        if (scoreSummoner < scoreMoyenneTournament+GAPRANK+upGap && scoreSummoner > scoreMoyenneTournament-GAPRANK-upGap && count < Math.floor(listSummoners.length/format)){
          count++
          return summoner;
        }
      });
      listSummonersSelected.push(...pushListSelected);
      pushListSelected.forEach((item) => {
        listId.push(item.id);
      });
      upGap += 50;
    }while (count !== Math.floor(listSummoners.length/format));
    let resultTournament = [];
    listSummonersSelected.forEach((item) => {
      let team = this.createTeamForSummoner(item,listSummonersFiltered,format);
      team.summoners.forEach((item) => {
        listId.push(item.id);
      });
      listSummonersFiltered = listSummonersFiltered.filter((sum) => {
        if (!listId.includes(sum.id)){
          return sum
        }
      });
      resultTournament.push(team);
    });

    return resultTournament;
  }


  public algoTournament(listTeam) {
    listTeam.sort(function (a, b) {return a.rank - b.rank;}).reverse();
    listTeam.forEach((team, index) => {
      team.seed = index+1;
    });
    let resultTournament = [];
    for (let i = 0; i < listTeam.length/2; i++){
      resultTournament.push([listTeam[i],listTeam[(listTeam.length/2)+i]]);
    }
    return resultTournament;
  }

}
