import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//region BuildTranslationResource
import addVolunteerEN from "./translations/en/translation/AddVolunteer.json";
import defaultsEN from "./translations/en/translation/Defaults.json";
import IVS_EN from "./translations/en/translation/InitialVolunteerSurvey.json";

import adminEN from "./translations/en/Admin.json";
import loginEN from "./translations/en/Login.json";
import footerEN from "./translations/en/Footer.json";
import homeEN from "./translations/en/Home.json";
import loadingEN from "./translations/en/Loading.json";
import navbarEN from "./translations/en/Navbar.json";
import volunteerFormEN from "./translations/en/InitialSurvey.json";
import FormIoCustomTextEn from "./translations/en/FormIoCustomText.json";
import SurveysEN from "./translations/en/Surveys.json";

import addVolunteerSO from "./translations/so/translation/AddVolunteer.json";
import defaultsSO from "./translations/so/translation/Defaults.json";
import IVS_SO from "./translations/so/translation/InitialVolunteerSurvey.json";
import volunteerLoginSO from "./translations/so/translation/VolunteerLogin.json";
import FormIoCustomTextSO from "./translations/so/FormIoCustomText.json";
import adminSO from "./translations/so/Admin.json";
import loginSO from "./translations/so/Login.json";
import footerSO from "./translations/so/Footer.json";
import homeSO from "./translations/so/Home.json";
import loadingSO from "./translations/so/Loading.json";
import navbarSO from "./translations/so/Navbar.json";
import initialSurveySO from "./translations/so/InitialSurvey.json";

const resources = {
  en: {
    translation: {
      ...addVolunteerEN,
      ...defaultsEN,
      ...IVS_EN,
      ...volunteerFormEN,
    },
    Admin: adminEN,
    Login: loginEN,
    Footer: footerEN,
    Home: homeEN,
    Loading: loadingEN,
    Navbar: navbarEN,
    InitialSurvey: volunteerFormEN,
    FormIOCustomText: FormIoCustomTextEn,
    Surveys: SurveysEN,
  },
  so: {
    translation: {
      ...addVolunteerSO,
      ...defaultsSO,
      ...IVS_SO,
      ...volunteerLoginSO,
    },
    Admin: adminSO,
    Login: loginSO,
    Footer: footerSO,
    Home: homeSO,
    Loading: loadingSO,
    Navbar: navbarSO,
    InitialSurvey: initialSurveySO,
    FormIOCustomText: FormIoCustomTextSO,
  },
};
//endregion

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(LanguageDetector)
  // init i18next
  .init({
    resources,
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
