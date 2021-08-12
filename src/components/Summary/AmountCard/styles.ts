import styled from "styled-components";

export const Card = styled.div<{ greenCard?: string }>`
	background: ${({ greenCard }) => greenCard === "true" ? "var(--green)" : "var(--shape)"};
	color: ${({ greenCard }) => greenCard === "true" ? "#ffffff" : "var(--text-title)"};
	padding: 1.5rem 2rem;
	border-radius: 0.25rem;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
`

export const CardHead = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: capitalize;
`

export const CardBody = styled.strong`
	display: block;
	margin-top: 1rem;
	font-size: 2rem;
	font-weight: 500;
	line-height: 3rem; 
`