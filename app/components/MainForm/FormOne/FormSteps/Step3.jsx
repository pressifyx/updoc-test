// components/Step1.js
import { FNCButton } from "@/app/components/buttons/FNCButton";
import { SubmitButton } from "@/app/components/buttons/SubmitButton";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/public/images/logo.png";
import DatePicker from "react-datepicker";

import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import {
  addFormOne,
  removeFromOne,
} from "@/app/context/states/formOneCertificate/formOneCertificateSlice";
import DateRangePicker from "./logic/DateRangePicker";

const Step3 = ({ nextStep, prevStep }) => {
  const [fromDate, setFormDate] = useState(new Date());
  const [toDate, settoDate] = useState(new Date());
  const [isError, setIsError] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const dispatch = useDispatch();

  // if fill of the hide input its redirect to homepage and lock that ip
  const handleFillChange = () => {
    window.location.replace("/");
  };
  // Onboard Redux
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (fromDate === null || fromDate === "") &&
      (toDate === null || toDate === "")
    ) {
      toast.error("Plese use date then try");
      return;
    }
    dispatch(
      addFormOne({ fromDate: formattedFromDate, toDate: formattedToDate })
    );
    nextStep();
  };

  const backButtonFunc = () => {
    dispatch(removeFromOne());
    prevStep();
  };

  // const data = useSelector((state) => state.formOneCertificate.alldata);

  // console.log(data);

  return (
    <section>
      <Toaster />
      <div className="md:w-[661px] mx-auto">
        <div>
          <div>
            <Image
              width={200}
              height={93}
              alt="logo"
              src={logo}
              className="mx-auto mt-4"
            />
          </div>
          <div className="flex max-w-[400px] my-12 mx-auto justify-center gap-4 items-center">
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className=" w-1/6 h-1 bg-primary rounded"></div>
            <div className="w-1/6 h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold works text-uptexform">
              How long do you need this for?
            </h2>
            <p className="py-3 text-[12px] text-slate-500">
              If suitable, your Partner Doctor might change the end date based
              on what they believe is appropriate.
            </p>
          </div>

          {/* form data section start */}

          <DateRangePicker />

          {/* form data section start */}

          <div className="md:grid gap-4 grid-cols-2 mt-6">
            <FNCButton
              onClick={backButtonFunc}
              title="Back"
              className="border-2 md:mb-2 text-upurple border-upurple "
            />
            <SubmitButton
              title="Continue"
              className={
                isError || isFormError
                  ? "border-2 md:mb-2 text-white bg-upurple border-upurple cursor-pointer"
                  : "border-2 md:mb-2 text-white bg-upurple border-upurple"
              }
              disable={isError || isFormError ? true : false}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step3;

{
  /* <div className="mb-6 hidden">
          <label
            htmlFor="iffillformone"
            className="none mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dont fill this input
          </label>
          <input
            onChange={handleFillChange}
            name="iffillformone"
            value={formData.iffillformone}
            type="text"
            id="iffillformone"
            className="bg-gray-50 border-gray-300 hidden text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary "
            placeholder="Company/Legal Entity Name of the Sub-merchant"
          />
        </div> */
}
