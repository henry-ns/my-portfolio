import styled from 'styled-components';
import Media from '../../styles/media';

export const Container = styled.div`
	padding-left: 17em;

	width: auto;
	height: auto;

	${Media.desktop`
        padding-top: 70px;
        padding-left: 0;
    `}
`;
