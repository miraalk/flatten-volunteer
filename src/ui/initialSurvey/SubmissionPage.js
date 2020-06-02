import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Types } from "./actions";
import { LocationPicker } from "./elements/location/LocationPicker";
import Form from "../components/Form";
import FormDef from "../../forms/VolunteerForm.json";
import flattenApi from "../../backend/api/api";
import backend from "../../backend/api/backend";
import { push } from "connected-react-router";
import { Consent } from "./elements/Consent";

const SubmissionPageContent = () => {
  const formData = useSelector((state) => state.volunteerForm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Types.RESTART_FORM });
  }, [dispatch]);

  const onSubmit = async (data) => {
    const endTime = Date.now();
    const reformatted = {
      household: {
        followUpId: formData.followUpId,
      },
      people: data.personGrid,
      deaths: data.deathGrid,
      metadata: {
        endTime: endTime,
        timeToComplete: endTime - formData.startTime,
        location: formData.location,
        consentGiven: formData.consent,
      },
      schema: {
        form: "volunteerInitialForm",
        version: "0.1",
      },
    };

    Object.entries(data).forEach(([k, v]) => {
      if (!(k === "personGrid" || k === "deathGrid"))
        reformatted.household[k] = v;
    });

    // need to actually add the submission in here!
    await backend.request({
      ...flattenApi.volunteerForm,
      data: reformatted,
    });

    dispatch(push("/success"));
  };

  if (!formData.consent) return <Consent />;

  if (!formData.location) return <LocationPicker />;

  return (
    <Form
      formioForm={FormDef}
      submitHook={onSubmit}
      formioOptions={{ noAlerts: false }}
    />
  );
};

const SubmissionPage = () => {
  const { t } = useTranslation("InitialSurvey");

  return (
    <div>
      <h3> {t("title")} </h3>
      <SubmissionPageContent />
    </div>
  );
};

export default SubmissionPage;