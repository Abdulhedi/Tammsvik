import React, { createContext, useContext, useEffect, useState } from 'react';

const AnswerContext = createContext(null);

export const useHue = () => {
	return useContext(AnswerContext);
};

export const AnswerProvider = ({ children }) => {
	const [answers, setAnswers] = useState([]);
	const [colors, setColors] = useState([]);
	useEffect(() => {
		const fetchItems = async () => {
			const storageItem = await localStorage.getItem('answers');

			return JSON.parse(storageItem) || [];
		};

		const fetchColors = async () => {
			const storageItem = await localStorage.getItem('colors');

			return JSON.parse(storageItem) || [];
		};
		if (!answers || !answers.length) {
			fetchItems().then((localAnswers) => setAnswers(localAnswers));
		}
		if (!colors || !colors.length) {
			fetchColors().then((localColors) => setColors(localColors));
		}
	}, []);

	useEffect(() => {
		if (answers && answers.length) localStorage.setItem('answers', JSON.stringify(answers));
	}, [answers]);

	useEffect(() => {
		if (colors && colors.length) localStorage.setItem('colors', JSON.stringify(colors));
	}, [colors]);
	return (
		<AnswerContext.Provider value={{ answers, setAnswers, colors, setColors }}>
			{children}
		</AnswerContext.Provider>
	);
};
