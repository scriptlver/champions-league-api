import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "RW",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 87,
      Passing: 90,
      Dribbling: 94,
      Defending: 34,
      Physical: 65,
    }
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nationality: "Portugal",
    position: "ST",
    statistics: {
      Overall: 88,
      Pace: 82,
      Shooting: 92,
      Passing: 78,
      Dribbling: 84,
      Defending: 35,
      Physical: 77,
    }
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "CM",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 88,
      Defending: 64,
      Physical: 74,
    }
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "ST",
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 89,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 77,
    }
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "CB",
    statistics: {
      Overall: 89,
      Pace: 78,
      Shooting: 60,
      Passing: 71,
      Dribbling: 72,
      Defending: 91,
      Physical: 86,
    }
  },
  {
    id: 6,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "ST",
    statistics: {
      Overall: 90,
      Pace: 89,
      Shooting: 93,
      Passing: 65,
      Dribbling: 80,
      Defending: 45,
      Physical: 88,
    }
  },
  {
    id: 7,
    name: "Neymar Jr.",
    club: "Al-Hilal",
    nationality: "Brazil",
    position: "LW",
    statistics: {
      Overall: 88,
      Pace: 85,
      Shooting: 83,
      Passing: 87,
      Dribbling: 92,
      Defending: 38,
      Physical: 60,
    }
  },
  {
    id: 8,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "CM",
    statistics: {
      Overall: 87,
      Pace: 73,
      Shooting: 76,
      Passing: 89,
      Dribbling: 88,
      Defending: 72,
      Physical: 66,
    }
  },
  {
    id: 9,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "CAM",
    statistics: {
      Overall: 86,
      Pace: 78,
      Shooting: 82,
      Passing: 83,
      Dribbling: 86,
      Defending: 75,
      Physical: 84,
    }
  },
  {
    id: 10,
    name: "Pedri",
    club: "Barcelona",
    nationality: "Spain",
    position: "CM",
    statistics: {
      Overall: 85,
      Pace: 77,
      Shooting: 72,
      Passing: 86,
      Dribbling: 89,
      Defending: 67,
      Physical: 65,
    }
  }

];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
   database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(p=> p.id === id);

  if(index !== -1){
    database.splice(index, 1);
    return true;
  }

  return false;
}; 

export const findAndModifyPlayer = async(id: number, statistics: StatisticsModel) => {
  const playerIndex = database.findIndex(player => player.id === id)
  if (playerIndex ! -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}


