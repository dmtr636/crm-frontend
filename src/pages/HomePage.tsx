import {observer} from "mobx-react";
import {HomeLayout} from "../components/home/HomeLayout";

export const HomePage = observer(() => {
	return (
		<HomeLayout>
			<>123</>
			<>456</>
		</HomeLayout>
	)
})