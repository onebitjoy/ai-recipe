import { useEffect } from "react";
import Markdown from "react-markdown";

export default function RecipeFromAI({ recipe, recipeScrollRef }) {
  useEffect(() => {
    if (recipeScrollRef?.current) {
      recipeScrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [recipe, recipeScrollRef]);

  return (
    <section
      aria-live="polite"
      className="suggested-recipe-container"
      ref={recipeScrollRef}
      tabIndex={-1} // Adding tabIndex to make the element focusable
    >
      {recipe && (
        <>
          <h1>AI chef suggests:</h1>
          <br />
          <Markdown>{recipe}</Markdown>
        </>
      )}
    </section>
  );
}
