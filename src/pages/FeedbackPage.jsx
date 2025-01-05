import React, { useState, useEffect } from "react";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState({
    user_type: "placement_officer", // Set default value
    comment: "",
    rating: 5,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      // Update with your actual API endpoint
      const response = await fetch("http://localhost:8000/api/feedback/");
      if (!response.ok) throw new Error('Failed to fetch feedbacks');
      const data = await response.json();
      setFeedbacks(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError("Failed to load feedback");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Update with your actual API endpoint
      const response = await fetch("http://localhost:8000/api/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit feedback");
      }

      const data = await response.json();
      console.log('Submission successful:', data);
      
      await fetchFeedbacks();
      setNewFeedback({
        user_type: "placement_officer",
        comment: "",
        rating: 5,
      });
      setSuccess("Feedback submitted successfully!");
    } catch (err) {
      console.error('Submit error:', err);
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const StarRating = ({ rating, onSelect, readonly = false }) => {
    const handleStarClick = (selectedRating) => {
      if (!readonly) {
        onSelect(selectedRating);
      }
    };

    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(star)}
            className={`text-3xl focus:outline-none ${
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            } ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            disabled={readonly}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Feedback Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Submit Feedback</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="user_type" 
                className="block text-sm font-medium text-gray-700"
              >
                User Type
              </label>
              <select
                id="user_type"
                name="user_type"
                value={newFeedback.user_type}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="student">Student</option>
                <option value="company">Company</option>
                <option value="placement_officer">Placement Officer</option>
              </select>
            </div>

            <div className="space-y-2">
              <label 
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <StarRating
                rating={newFeedback.rating}
                onSelect={(rating) =>
                  setNewFeedback((prev) => ({ ...prev, rating }))
                }
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={newFeedback.comment}
                onChange={handleChange}
                className="w-full min-h-[100px] p-2 border rounded-md"
                required
              />
            </div>

            {error && (
              <div className="p-4 text-red-700 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            {success && (
              <div className="p-4 text-green-700 bg-green-100 rounded-md">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 disabled:bg-pink-300 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>

        {/* Existing Feedback */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Feedback</h2>
          <div className="space-y-4">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold capitalize">
                    {feedback.user_type.replace("_", " ")}
                  </span>
                  <StarRating rating={feedback.rating} readonly />
                </div>
                <p className="text-gray-700">{feedback.comment}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(feedback.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
            {feedbacks.length === 0 && (
              <p className="text-center text-gray-500">No feedback yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;