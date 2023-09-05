const data = [
  {
    title: "Emotions Analysis",
    desc: "Utilizing Streamlit to create an Emotion Analyzer. Preprocessed text data, extracts features using n-grams, and converts emotion labels. It currently trains four machine learning models (SVC, LinearSVC, RandomForest, DecisionTree) on the data. Users can input text, and the script predicts emotions using the best-performing model, displaying the result as an emoji. The script provides a user-friendly interface for real-time emotion prediction based on input text",
    url: "https://github.com/DHIWAHAR-K/Emotions-Analysis ",
  },
  {
    title: "Heart Disease Prediction",
    desc: "Analyzing the data  using Pandas, exploring its characteristics and preparing it for machine learning. It visualizes data relationships with heatmaps and pair plots and investigates categorical variables using count plots. After splitting the data into training and testing sets, it employs Logistic Regression for binary classification to predict coronary heart disease risk. The model's accuracy is evaluated, and performance metrics, including a confusion matrix and classification report, are provided. Finally, the script presents a visual representation of the confusion matrix to assess the model's effectiveness in predicting heart disease risk.",
    url: "https://github.com/DHIWAHAR-K/Heart-Disease-Prediction",
  },
  {
    title: "Netflix Recommendation System",
    desc: "Analyzing the netflix movie dataset and generating movie recommendations based on textual features. Preprocessed the data by cleaning and transforming text, focusing on titles and genres. TF-IDF vectorization is used to convert genre descriptions into numerical representations. The script calculates movie similarity using cosine similarity and builds a recommendation function. It provides personalized movie recommendations, with an example given for the given title.",
    url: "https://github.com/DHIWAHAR-K/Netflix-Recommendation-System",
  },
  {
    title: "Social Media Ads Classification",
    desc: "The python script analyzes a social media marketing dataset to predict product purchases. It loads, explores, and visualizes the data to understand the relationship between age, estimated salary, and purchase outcomes. The script then splits the data into training and testing sets, employs a Decision Tree Classifier for prediction, and evaluates the model's performance using metrics like precision, recall, and F1-score. Overall, it aims to determine how age and estimated salary influence product purchasing decisions through social media marketing.",
    url: "https://github.com/DHIWAHAR-K/Social-Media-Ads-Classification",
  },
  {
    title: "Text Summarization",
    desc: "This application is designed for text reformulation. It integrates two powerful language models, BERT and GPT-2, to enhance and generate text creatively. Users input a sentence, and the script utilizes BERT for context understanding, predicting missing words within the sentence. These BERT predictions are then used as prompts for GPT-2, which generates reformed text, offering alternative versions of the input sentence. The app displays both the original user input and the reformed text, making it a valuable tool for content improvement and creative writing assistance. This interactive application seamlessly combines the strengths of these two language models to assist users in refining and enhancing their text content.",
    url: "https://github.com/DHIWAHAR-K/Text-Summarization/tree/main",
  },
];

const skills = [
  "communication",
  "collaboration",
  "adaptability",
  "python",
  "data science",
  "machine learning",
  "iot",
  "data analytics",
];

export  { data, skills };
