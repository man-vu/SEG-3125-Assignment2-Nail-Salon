import { useState } from "react";
import { Button } from "../../components/ui/button";
import "./GiftCardPage.css";

const giftCardOptions = [25, 50, 75, 100];

const GiftCardPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would call your backend or Stripe integration
  };

  return (
    <section className="giftcard-demo-bg">
      <div className="giftcard-demo-container">
        <h1 className="giftcard-title">🎁 Get a Dreamy Gift Card</h1>
        <p className="giftcard-desc">
          Treat your loved ones to a relaxing self-care experience! <br />
          Choose an amount and send a gift instantly by email.
        </p>
        <form className="giftcard-form" onSubmit={handleSubmit}>
          <label className="giftcard-label">Select Card Amount:</label>
          <div className="giftcard-amounts">
            {giftCardOptions.map((amt) => (
              <button
                type="button"
                key={amt}
                className={`giftcard-amount-btn${selected === amt ? " selected" : ""}`}
                onClick={() => setSelected(amt)}
              >
                ${amt}
              </button>
            ))}
          </div>
          <label className="giftcard-label" htmlFor="recipientName">
            Recipient Name
          </label>
          <input
            className="giftcard-input"
            id="recipientName"
            type="text"
            required
            placeholder="Enter recipient's name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label className="giftcard-label" htmlFor="recipientEmail">
            Recipient Email
          </label>
          <input
            className="giftcard-input"
            id="recipientEmail"
            type="email"
            required
            placeholder="Enter recipient's email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button className="giftcard-purchase-btn" type="submit" disabled={!selected || !email || !name}>
            {submitted ? "Purchased!" : "Purchase Gift Card"}
          </Button>
          {submitted && <div className="giftcard-success">Thank you! The gift card will be sent shortly.</div>}
        </form>
      </div>
    </section>
  );
};

export default GiftCardPage;
