import { useState } from "react";

export default function HDIWSection() {
  const [activeTabWorkflow, setActiveTabWorkflow] = useState(0);

  return (
    <section id="description" className="">
      <div className="container">
        <h2 className="section_title">How does it work?</h2>
        <div className="wrapper">
          <div className="tabs mt-[10px] md:mt-5">
            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-1"
                className="tab-switch"
                checked={activeTabWorkflow === 0}
                onChange={() => setActiveTabWorkflow(0)}
              />
              <label htmlFor="tab-1" className="tab-label">
                Purchase Gas
              </label>
            </div>
            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-2"
                className="tab-switch"
                checked={activeTabWorkflow === 1}
                onChange={() => setActiveTabWorkflow(1)}
              />
              <label htmlFor="tab-2" className="tab-label">
                Manage Orders
              </label>
            </div>
            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-3"
                className="tab-switch"
                checked={activeTabWorkflow === 2}
                onChange={() => setActiveTabWorkflow(2)}
              />
              <label htmlFor="tab-3" className="tab-label">
                Request tx Executions
              </label>
            </div>
          </div>
          <div className="content text-xl md:text-2xl font-light ">
            <div
              className={`tab-content ${
                activeTabWorkflow == 0 ? "active" : ""
              }`}
            >
              The user creates an order specifying the amount of Gas they want
              to purchase, setting a timeframe, proposing a price, and
              specifying the required security deposit.
              <img src="/images/workflow/createOrder-min.png" alt="" />
            </div>
            <div
              className={`tab-content ${
                activeTabWorkflow == 1 ? "active" : ""
              }`}
            >
              A user reviews orders they are willing to proceed with, gets
              information on the status of the orders, and manages the amount of
              gas remaining in their order. Additionally, they have the ability
              to transfer gas to other users or utilize it themselves.
              <img src="/images/workflow/searchOrder-min.png" alt="" />
            </div>
            <div
              className={`tab-content ${
                activeTabWorkflow == 2 ? "active" : ""
              }`}
            >
              The user signs a transaction request within the specified
              timeframe, setting a deadline. This request is sent to the
              executor and relevant parties. The executor includes the signature
              in the blockchain.
              <img src="/images/workflow/requestTransaction-min.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center my-4">
            <a target="_blank" href="https://app.prepaidgas.io/">
              <button className="btn font-raleway">
                <p>Launch app</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
