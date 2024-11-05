


const getAllFavourite = () => {
  const all = localStorage.getItem("favourite");

  if (all) {
    const favourite = JSON.parse(all);
    return favourite;
  } else {
    return [];
  }
};

const addFavourite = (product) => {
  const favourite = getAllFavourite();
  favourite.push(product);
  localStorage.setItem("favourite", JSON.stringify(favourite));
};

const removeFavorite = (cart) => {
  console.log(cart);
  const favorites = getAllFavourite();
  console.log(favorites);
  const remaining = favorites.filter((p) => p.product_id !== cart);
  console.log(remaining);
  localStorage.setItem("favourite", JSON.stringify(remaining));
};

const favouriteCount = getAllFavourite().length;

const getAllWishlist = () => {
  const all = localStorage.getItem("wishlist");

  if (all) {
    const wishlist = JSON.parse(all);
    return wishlist;
  } else {
    return [];
  }
};

const addWishlist = (product) => {
  const wishlist = getAllWishlist();
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const removeWishlist = (cart) => {
  console.log(cart);
  const favorites = getAllWishlist();
  console.log(favorites);
  const remaining = favorites.filter((p) => p.product_id !== cart);
  console.log(remaining);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
};

const wishlistCount = getAllWishlist().length;

export {
  addFavourite,
  getAllFavourite,
  getAllWishlist,
  addWishlist,
  removeFavorite,
  removeWishlist,
  favouriteCount,
  wishlistCount,
};
