import {useContext, useEffect, useState} from "react";
import {MobXProviderContext} from "mobx-react";
import {AppStore} from "../store/AppStore";

export const useStore = () => {
	const ctx = useContext(MobXProviderContext);
	return ctx.store as AppStore;
};

function getWindowDimensions() {
	const {innerWidth: width, innerHeight: height} = window;
	return {width, height};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}