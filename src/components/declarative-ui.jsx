import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', 'sent'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((res) => setTimeout(res, 2000));
    setStatus("sent");
   
  }
 if(status==='sent'){
      return (<p>Thank for submitting the form</p>)
    }
  return (
    <>
    <form  onSubmit={handleSubmit}>
      {/* Implement form logic here */}
      <input
        placeholder="write your feedback"
        disabled={status === "submitting"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" disabled={status==='submitting' || text.trim().length===0}>
        {text.trim().length > 0 ? "Submit" : "Edit"}
      </button>
    </form>
    </>
  );
}
