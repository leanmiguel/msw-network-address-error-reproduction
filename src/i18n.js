import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getLanguage = async () => {
  const user = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}users/random_user`
  );

  const json = await user.json();

  console.log("the json returned from user is", json);
  return json.language ?? "en";
};

const init = async () => {
  i18n.use(initReactI18next).init({
    lng: await getLanguage(),
    resources: {},
    interpolation: {
      escapeValue: false,
    },
  });
};

init();

export default i18n;
