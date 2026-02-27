export const displayFancyLogs = () => {
  console.log(
        "%c _   _                                  \n| \\ | | ___  _ __ ___   __ _ _ __       \n|  \\| |/ _ \\| '_ ` _ \\ / _` | '_ \\      \n| |\\  | (_) | | | | | | (_| | | | |     \n|_| \\_|\\___/|_| |_| |_|\\__,_|_| |_|     \n",
    "color: #6b17e8;"
  );

  console.log(
    "%c Hope you like what you see :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
