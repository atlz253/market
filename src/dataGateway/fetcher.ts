import { default as errorMessages } from "./errorMessages";

const FETCH_TRIES: number = 3;

class Fetcher {
  public static tryGet<T>(URL: string): Promise<T> { // TODO: отменить fetch если изменен поисковый запрос
    let fetchTriesRemain = FETCH_TRIES;

    const tryToFetch = async (): Promise<T> => {
      fetchTriesRemain--;

      try {
        return await this.tryFetch<T>(URL);
      } catch (error) {
        if (fetchTriesRemain === 0) {
          throw error;
        }

        return await tryToFetch();
      }
    };

    return tryToFetch();
  }

  private static async tryFetch<T>(URL: string): Promise<T> {
    const response = await fetch(URL);

    if (response.ok) {
      return response.json() as Promise<T>;
    } else {
      throw new Error(errorMessages.fetchFail(response.status.toString()));
    }
  }
}

export default Fetcher;
