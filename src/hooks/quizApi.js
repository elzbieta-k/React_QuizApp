import axios from "axios";


const BASE_URL = "https://opentdb.com";

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api_category.php`);
    return data.trivia_categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchQuestions = async ({
  amount,
  type,
  category,
  difficulty,
}) => {
  const params = new URLSearchParams({
    amount,
    category,
    type,
    difficulty,
  });

  try {
    const { data } = await axios.get(`${BASE_URL}/api.php?${params}&encode=base64`);
    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};
