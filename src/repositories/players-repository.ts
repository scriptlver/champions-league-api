interface PlayerModel {
    id: number;
    name: string;
    age: number;
    team: string;
}

const database: PlayerModel[] = [
    { id: 1, name: 'Lionel Messi', age: 34, team: 'Paris Saint-Germain' },
    { id: 2, name: 'Cristiano Ronaldo', age: 36, team: 'Manchester United' },
    { id: 3, name: 'Neymar Jr', age: 29, team: 'Paris Saint-Germain' },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
};