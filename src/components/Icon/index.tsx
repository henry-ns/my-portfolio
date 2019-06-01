import React from 'react';
import { SVG } from './styles';

const github = `M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
	c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
	c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
	c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
	c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
	c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
	c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
	c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
	c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
	c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
	c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
	c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
	c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
	c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
	c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
	c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
	c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
	c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
	c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
	C438.536,184.851,428.728,148.168,409.132,114.573z`;

const twitter = `M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826
	C49.652,11.137,38.516,0,24.826,0z M35.901,19.144c0.011,0.246,0.017,0.494,0.017,0.742c0,7.551-5.746,16.255-16.259,16.255
	c-3.227,0-6.231-0.943-8.759-2.565c0.447,0.053,0.902,0.08,1.363,0.08c2.678,0,5.141-0.914,7.097-2.446
	c-2.5-0.046-4.611-1.698-5.338-3.969c0.348,0.066,0.707,0.103,1.074,0.103c0.521,0,1.027-0.068,1.506-0.199
	c-2.614-0.524-4.583-2.833-4.583-5.603c0-0.024,0-0.049,0.001-0.072c0.77,0.427,1.651,0.685,2.587,0.714
	c-1.532-1.023-2.541-2.773-2.541-4.755c0-1.048,0.281-2.03,0.773-2.874c2.817,3.458,7.029,5.732,11.777,5.972
	c-0.098-0.419-0.147-0.854-0.147-1.303c0-3.155,2.558-5.714,5.713-5.714c1.644,0,3.127,0.694,4.171,1.804
	c1.303-0.256,2.523-0.73,3.63-1.387c-0.43,1.335-1.333,2.454-2.516,3.162c1.157-0.138,2.261-0.444,3.282-0.899
	C37.987,17.334,37.018,18.341,35.901,19.144z`;

const linkedin = `m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625
	387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625
	13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438
	32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469
	11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562
	0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593
	71.777344 84.421874zm0 0`;

const email = `M306,612c-28.152,0-55.284-3.672-81.396-11.016c-26.112-7.347-50.49-17.646-73.134-30.906
	s-43.248-29.172-61.812-47.736c-18.564-18.562-34.476-39.168-47.736-61.812c-13.26-22.646-23.562-47.022-30.906-73.135
	C3.672,361.284,0,334.152,0,306s3.672-55.284,11.016-81.396s17.646-50.49,30.906-73.134s29.172-43.248,47.736-61.812
	s39.168-34.476,61.812-47.736s47.022-23.562,73.134-30.906S277.848,0,306,0c42.024,0,81.702,8.058,119.034,24.174
	s69.768,37.944,97.308,65.484s49.368,59.976,65.484,97.308S612,263.976,612,306c0,28.152-3.672,55.284-11.016,81.396
	c-7.347,26.109-17.646,50.487-30.906,73.134c-13.26,22.644-29.172,43.248-47.736,61.812
	c-18.562,18.564-39.168,34.479-61.812,47.736c-22.646,13.26-47.022,23.562-73.136,30.906C361.284,608.328,334.152,612,306,612z
	M453.492,179.928H163.404c-2.856,0-5.304,0.918-7.344,2.754s-3.06,4.386-3.06,7.65v32.436c0,1.632,0.612,2.448,1.836,2.448
	l152.388,86.904l1.227,0.612c0.813,0,1.428-0.204,1.836-0.612l147.492-86.904c0.813-0.408,1.428-0.612,1.836-0.612
	c0.405,0,1.02-0.204,1.836-0.612c1.632,0,2.448-0.816,2.448-2.448v-31.212c0-3.264-1.021-5.814-3.063-7.65
	S456.348,179.928,453.492,179.928z M245.412,310.284c0.408-0.408,0.612-1.021,0.612-1.836c0-1.227-0.408-1.836-1.224-1.836
	l-87.516-50.185c-1.224-0.408-2.244-0.408-3.06,0c-0.816,0-1.224,0.612-1.224,1.836v131.58c0,1.227,0.612,2.04,1.836,2.448h1.224
	c0.816,0,1.224-0.204,1.224-0.612L245.412,310.284z M351.9,320.076c-0.408-1.227-1.431-1.428-3.063-0.612l-33.66,19.584
	c-4.08,2.448-8.361,2.448-12.852,0l-29.376-16.521c-1.224-0.816-2.244-0.816-3.06,0l-111.996,104.04
	c-0.408,0.405-0.612,1.224-0.612,2.445c0,0.408,0.408,1.021,1.224,1.836c2.448,0.816,4.08,1.227,4.896,1.227H450.43
	c0.816,0,1.635-0.408,2.448-1.227c0-1.632-0.204-2.649-0.612-3.06L351.9,320.076z M462.06,253.98h-2.445l-83.232,49.572
	c-0.813,0-1.224,0.612-1.224,1.836c-0.408,0.408-0.204,1.02,0.609,1.833L459,397.188c0.816,0.816,1.428,1.227,1.836,1.227h1.224
	c1.227-1.227,1.839-2.04,1.839-2.448V256.429C463.896,255.612,463.284,254.796,462.06,253.98z`;

const next = `M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
	l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
	C187.881,124.315,187.881,116.495,183.189,111.816z`;

const instagram = () => (
	<>
		<path
			d='M24.825,29.796c2.739,0,4.972-2.229,4.972-4.97c0-1.082-0.354-2.081-0.94-2.897c-0.903-1.252-2.371-2.073-4.029-2.073
				c-1.659,0-3.126,0.82-4.031,2.072c-0.588,0.816-0.939,1.815-0.94,2.897C19.854,27.566,22.085,29.796,24.825,29.796z'
		/>
		<polygon points='35.678,18.746 35.678,14.58 35.678,13.96 35.055,13.962 30.891,13.975 30.907,18.762' />
		<path
			d='M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826
				C49.652,11.137,38.516,0,24.826,0z M38.945,21.929v11.56c0,3.011-2.448,5.458-5.457,5.458H16.164
				c-3.01,0-5.457-2.447-5.457-5.458v-11.56v-5.764c0-3.01,2.447-5.457,5.457-5.457h17.323c3.01,0,5.458,2.447,5.458,5.457V21.929z'
		/>
		<path
			d='M32.549,24.826c0,4.257-3.464,7.723-7.723,7.723c-4.259,0-7.722-3.466-7.722-7.723c0-1.024,0.204-2.003,0.568-2.897
				h-4.215v11.56c0,1.494,1.213,2.704,2.706,2.704h17.323c1.491,0,2.706-1.21,2.706-2.704v-11.56h-4.217
				C32.342,22.823,32.549,23.802,32.549,24.826z'
		/>
	</>
);

const icon = (name: string) => {
	switch (name) {
		case 'Github':
			return github;
		case 'Twitter':
			return twitter;
		case 'Linkedin':
			return linkedin;
		case 'next':
			return next;
		case 'Instagram':
			return instagram();
		default:
			return email;
	}
};

const viewBox = (name: string) => {
	switch (name) {
		case 'Github':
			return '0 0 438.549 438.549';
		case 'Twitter':
			return '0 0 49.652 49.652';
		case 'Linkedin':
			return '0 0 512 512';
		case 'Instagram':
			return '0 0 49.652 49.652';
		case 'next':
			return '0 0 240.823 240.823';
		default:
			return '0 0 612 612';
	}
};

const Path = (name: string) =>
	name === 'Instagram' ? icon(name) : <path d={icon(name) as string} />;

interface IconProps {
	name: string;
	noHover?: boolean;
}

export default ({ name, noHover }: IconProps) => (
	<SVG
		noHover={noHover}
		id='Github'
		width='3.5em'
		height='3.5em'
		x='0px'
		y='0px'
		version='1.1'
		viewBox={viewBox(name)}
	>
		{Path(name)}
	</SVG>
);
