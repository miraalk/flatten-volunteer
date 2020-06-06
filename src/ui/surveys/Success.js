import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Success = () => {
  const { t } = useTranslation("Surveys");
  return (
    <>
      {t("success")}
      <Link to="/"> {t("returnHomePrompt")} </Link>
    </>
  );
};

export default Success;
