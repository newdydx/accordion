import SingleQuestion from './Questions';
import React, { useState } from "react";
import questions from "./Data";

const App = () => {
   return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((user) => {
          return (
            <SingleQuestion key={user.id} {...user} />
          )
        })}
      </section>
    </div>
   )
}

export default App;
