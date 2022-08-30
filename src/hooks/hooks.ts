import {useContext, useEffect, useRef, useState} from "react";
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

export function useOuterClick(callback: () => void) {
	const callbackRef = useRef(null); // initialize mutable ref, which stores callback
	const innerRef = useRef(null); // returned to client, who marks "border" element

	// update cb on each render, so second useEffect has access to current value
	useEffect(() => { (callbackRef.current as any) = callback; });

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e: any) {
			if (innerRef.current
				&& callbackRef.current
				&& !(innerRef.current as any).contains(e.target)
			) {
				(callbackRef as any).current(e);
			}
		}
	}, []); // no dependencies -> stable click listener

	return innerRef; // convenience for client (doesn't need to init ref himself)
}