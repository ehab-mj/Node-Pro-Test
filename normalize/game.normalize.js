import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const normalizeGames = async (game) => {
  try {
    let image = {};

    image = {
      ...game.image,
      url: game.image.url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      alt: game.image.alt || "default game image",
    };

    if (game.image.alt && game.image.url) {
      image = {
        url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        alt: "default movie image",
      };
    }

    return {
      ...game,
      image,
      trailer: game.trailer || undefined,
      // address: {
      //   ...games.address,
      //   state: games.address.state || undefined,
      // },
      // web: game.web || undefined,
      // zip: game.zip || undefined,
      // bizNumber: game.bizNumber || (await generateUniqueNumber()),
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

export default normalizeGames;
