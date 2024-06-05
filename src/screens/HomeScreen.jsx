//Main screen, where the gameplay occurs


import React, { useState } from 'react';
import campus from '../assets/UMD-campus.jpg';
import '../styles/HomeScreen.css';

const MainPage = () => {
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);

    const handleInputChange = (event) => {
        setGuess(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addGuess(guess);
    };

    const addGuess = (newGuess) => {
        setGuesses([...guesses, newGuess]);
        // Clear the input field after adding the guess
        setGuess('');

        // Update the output element
        printGuesses(guesses.push(newGuess));
    };

    const printGuesses = () => {
        document.getElementById('output').textContent = `Your Guesses: ${guesses.at(0)}`;
    }

    return (
        <>
            <h1>UMDble</h1>
            <form id="userForm" onSubmit={handleSubmit}>
                <label htmlFor="guess">Enter Guess: </label>
                <input 
                    type="text" 
                    id="guess" 
                    name="guess" 
                    value={guess} 
                    onChange={handleInputChange} 
                    required
                />
                <br />
                <button type="submit">GUESS</button>
            </form>
            <p id="output"></p>
            <div id="closest"></div>
            <div id="container">
                <img src={campus} alt="UMD Campus" />
            </div>
        </>
    );
};

export default MainPage;
