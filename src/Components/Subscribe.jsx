// SubscribePage.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Subscribe.css';

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('free');
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // You can add logic here to handle the subscription, e.g., send data to a server or store it in a database
    // For now, let's just set subscribed to true
    setSubscribed(true);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const renderFeePlans = () => {
    const feePlans = {
      basic: '$100/month',
      standard: '$399/3 months',
      premium: '$1599/Year',
    };

    return Object.keys(feePlans).map((plan) => (
      <div key={plan}>
        <label>
          <input
            type="radio"
            value={plan}
            checked={selectedPlan === plan}
            onChange={() => handlePlanChange(plan)}
          />
          {feePlans[plan]}
        </label>
        <br />
      </div>
    ));
  };

  return (
    <div>
      <nav>
        {/* Your navigation bar goes here */}
      </nav>

      <div className="subscribe-container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and announcements.</p>

        {subscribed ? (
          <div className="subscription-success">
            Thank you for subscribing! You will receive updates in your email.
          </div>
        ) : (
          <div className="subscribe-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="subscription-options">
              <label>
                <input
                  type="radio"
                  value="free"
                  checked={subscriptionType === 'free'}
                  onChange={() => setSubscriptionType('free')}
                />
                Free Subscription
              </label>
              <label>
                <input
                  type="radio"
                  value="paid"
                  checked={subscriptionType === 'paid'}
                  onChange={() => setSubscriptionType('paid')}
                />
                Paid Membership
              </label>

              {subscriptionType === 'paid' && (
                <div className="fee-plans">
                  <p>Select a Plan:</p>
                  {renderFeePlans()}
                </div>
              )}
            </div>

            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        )}

        <div className="back-to-home">
          <Link to="/">Back to Home</Link>
        </div>
      </div>

      <footer>
        <div className="footer-info">
          <p>&copy; 2024 H2B. All rights reserved.</p>
          <p>Email: H2Binfo@gmail.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default SubscribePage;
