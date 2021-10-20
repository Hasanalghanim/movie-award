import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingContxtProvider = (props) => {
	const [isLoading, setIsLoading] = useState();
	return (
		<LoadingContext.Provider value={[isLoading, setIsLoading]}>
			{props.children}
		</LoadingContext.Provider>
	);
};
