import { fetchCategories } from "../hooks/quizApi.js";
import { useQuery } from "@tanstack/react-query";
import { use, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SettingsForm() {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: categories = [],
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [settings, setSettings] = useState({
    name: "",
    category: "",
    amount: "",
    difficulty: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/quiz", { state: settings });
  };

  return (
    <main className="h-[85vh] w-[85vw] max-w[1024px] flex flex-col  items-center font-raleway mx-auto lg:pt-15">
      <h1 className="text-4xl text-white font-bold text-center uppercase pb-2">
        Ready to put your brain to the test?
      </h1>
      <p className="pb-10 text-white text-center">
        Pick a category below and see how many questions you can nail! Each quiz
        is a little adventure — let’s see how far you can go!
      </p>
      <fieldset className="flex w-[90vw]  sm:w-[70vw] md:w-[60vw] lg:w-[480px] flex-col sm:justify-center items-center gap-y-2 text-white rounded p-2">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your name"
            className="select"
            name="name"
            onChange={handleChange}
            value={settings.name}
          />
        </div>
        <div>
          {/* <legend className="text-center">Choose your settings:</legend> */}
        </div>
        <div className="w-full">
          <select
            className="select"
            name="category"
            onChange={handleChange}
            value={settings.category}
          >
            <option value="" disabled hidden>
              Choose a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <select
            name="amount"
            onChange={handleChange}
            value={settings.amount}
            className="select"
          >
            <option key="0" value="" disabled hidden>
              How many questions?
            </option>
            <option key="10" value={10}>
              10
            </option>
            <option key="15" value={15}>
              15
            </option>
            <option key="20" value={20}>
              20
            </option>
          </select>
        </div>
        <div className="w-full">
          <select
            name="difficulty"
            onChange={handleChange}
            value={settings.difficulty}
            className="select"
          >
            <option key={1} value="" disabled hidden>
              Choose difficulty
            </option>
            <option key={2} value="easy">
              Easy
            </option>
            <option key={3} value="medium">
              Medium
            </option>
            <option key={4} value="hard">
              Hard
            </option>
          </select>
        </div>
        <div className="w-full">
          <select
            name="type"
            onChange={handleChange}
            value={settings.type}
            className="select"
          >
            <option key={1} value="" disabled hidden>
              Type
            </option>
            <option key={2} value="multiple">
              Multiple Choice
            </option>
            <option key={3} value="boolean">
              True/False
            </option>
          </select>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-purple text-white rounded-xl w-full p-2 sm:w-70 cursor-pointer"
        >
          Start Quiz
        </button>
      </fieldset>
    </main>
  );
}
