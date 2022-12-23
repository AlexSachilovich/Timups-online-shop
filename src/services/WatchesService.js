import { WATCHES } from "../MOCK/watches";
class WatchesService {
  getWatches() {
    return Promise.resolve({ data: WATCHES });
  }
}

export const watchesService = new WatchesService();
