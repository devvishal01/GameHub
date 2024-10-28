import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
  genreId?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreID: (genreId: number) => void;
  setPlatformId: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQuerystore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
  setGenreID: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId: genreId },
    })),
  setPlatformId: (platformID) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformID: platformID },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Game Query store", useGameQuerystore);
}

export default useGameQuerystore;
