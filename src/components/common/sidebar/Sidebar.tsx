import styled from "styled-components";
import sidebarLogo from "assets/sidebar/sidebarLogo.svg"
import sidebarLine from "assets/sidebar/sidebarLine.svg"
import sidebarReport from "assets/sidebar/sidebarReport.svg"
import {sidebarRoutes} from "../../../routes/routes";
import {NavLink} from "react-router-dom";

const Container = styled.div`
    width: 100px;
    height: 100%;
    background: #1F232C;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
    row-gap: 48px;
	z-index: 15;
`
const Link = styled.img<{ active?: boolean }>`
    opacity: ${props => props.active ? 1 : 0.5};
    cursor: pointer;
	user-select: none;

    &:hover {
        opacity: ${props => !props.active && 0.7};
    }
`
const ReportButton = styled(Link)`
    margin-top: auto;
`

export const Sidebar = () => {
	return (
		<Container>
			<img src={sidebarLogo} alt={""}/>
			<img src={sidebarLine} alt={""}/>

			{sidebarRoutes.map(route =>
				<NavLink
					to={route.path}
					key={route.path}
				>
					{({isActive}) => (
						<Link
							active={isActive}
							src={route.icon}
						/>
					)}
				</NavLink>
			)}

			<ReportButton src={sidebarReport}/>
		</Container>
	)
}