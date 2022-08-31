import {observer} from "mobx-react";
import styled, {css} from "styled-components";
import {useStore} from "../../hooks/hooks";
import {colors} from "../../theme/colors";

const Container = styled.div`
    margin: 48px 0;
`
const Links = styled.div<{ showBorder?: boolean }>`
    margin-top: 48px;
	padding: 26px 48px;
    background: #FFFFFF;
    border: 3px solid #1F232C;
    border-radius: 5px;
	display: flex;
	flex-wrap: wrap;
	gap: 26px;
	
	${props => !props.showBorder && css`
		border: none;
		padding: 0;
	`}
`
const Link = styled.a<{ active: boolean }>`
	height: 50px;
	padding: 0 34px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
	border-radius: 5px;
	
	background: ${props => props.active ? '#1F232C' : 'rgba(31, 35, 44, 0.7)'};
	pointer-events: ${props => !props.active && 'none'};
	
	&:hover {
		background: ${props => props.active && colors.dark.hover};
	}
	
    &:active {
        background: ${props => props.active && colors.dark.pressed};
    }
`

const getLinkName = (key: string) => {
	switch (key) {
		case "site": return "Cайт"
		case "miro": return "MIRO"
		case "files": return "Файлы"
		case "figma": return "FIGMA"
		case "old_site": return "Прошлый сайт"
		case "github": return "GitHub"
	}
}

const keys = ["site", "miro", "files", "figma", "old_site", "github"]

type Props = {
	showBorder?: boolean
}

export const ProjectLinks = observer((props: Props) => {
	const {showBorder} = props
	const store = useStore()
	const links = Object
		.entries(store.projectLinksObjectStore.objects?.at(0) ?? {})
		.filter(([key, value]) => keys.includes(key))

	const filledLinks = links.filter(([key, value]) => value !== "")
	const emptyLinks = links.filter(([key, value]) => value === "")

	return (
		<Container>
			<Links showBorder={showBorder}>
				{filledLinks.map(([key, value]) =>
					<Link href={value} key={key} target={"_blank"} active={true}>
						{getLinkName(key)}
					</Link>
				)}
				{emptyLinks.map(([key, value]) =>
					<Link href={value} key={key} target={"_blank"} active={false}>
						{getLinkName(key)}
					</Link>
				)}
			</Links>
		</Container>
	)
})