// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 100px 20px;
  text-align: center;
`;

const QuizButton = styled(motion.button)`
  padding: 15px 40px;
  font-size: 1.2em;
  margin: 20px 10px;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  background-color: #8e44ad;
  color: #fff;
  &:hover {
    background-color: #9b59b6;
    transform: scale(1.05);
  }
`;

const Feedback = styled(motion.p)`
  font-size: 1.5em;
  margin-top: 30px;
`;

function Quiz() {
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        document.title = 'Quiz Interactif';
    }, []);

    const checkAnswer = (isTrue) => {
        if (isTrue) {
            setFeedback('✅ Correct! Il peut fonctionner avec la lumière diffuse.');
        } else {
            setFeedback('❌ Incorrect. Il fonctionne même sans soleil direct.');
        }
    };

    return (
        <Container>
            <h2>
                <HelpCircle size={48} /> Quiz Interactif
            </h2>
            <p>Le climatiseur solaire portable peut fonctionner sans soleil direct.</p>
            <QuizButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => checkAnswer(true)}
            >
                Vrai
            </QuizButton>
            <QuizButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => checkAnswer(false)}
            >
                Faux
            </QuizButton>
            {feedback && (
                <Feedback
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {feedback}
                </Feedback>
            )}
        </Container>
    );
}

export default Quiz;
