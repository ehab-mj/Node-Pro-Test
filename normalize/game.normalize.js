import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const normalizeGames = async (games) => {
  try {
    let image = {
      url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      alt: "Business card image",
    };
    if (games.image && games.image.url) {
      image.url = games.image.url;
    }
    if (games.image && games.image.alt) {
      image.alt = games.image.alt;
    }
    return {
      ...games,
      image,
      address: {
        ...games.address,
        state: games.address.state || undefined,
      },
      web: games.web || undefined,
      zip: games.zip || undefined,
      bizNumber: games.bizNumber || (await generateUniqueNumber()),
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

export default normalizeGames;
