import styled from "styled-components";
import {device} from "../../constants/breakpoints";

const Text = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0.04em;
    color: #1F232C;
    white-space: pre-line;

    display: flex;
    align-items: center;
    height: 121px;
    margin-bottom: 10px;

    @media screen and ${device.phone} {
        height: 62px;
        font-size: 30px;
    }
`

export const LoginFormHeader = () => {
	return (
		<Text>
			{`
				Логинься,
        		поехали
        	`}
		</Text>
	)
}