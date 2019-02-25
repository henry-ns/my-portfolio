import React from 'react';

import Icon from '../../components/Icon/Icon';
import Next from '../../components/Next/Next';

import { Section } from './Home.style';
import { Divider } from '../../styles/shapes';
import { Background } from '../../styles/grid.js';

export default () => (
    <Section>
        <Background />
        <h1>
            Henrique <span>Miranda</span>
        </h1>
        <h2>
            Telematics student, Full Stack Developer <span>&</span> Designer
        </h2>
        <Divider margin='20px 0px 20px 0px'/>
        <ul>
            <li>
                <a
                    href='https://github.com/henry-ns'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Github' />
                </a>
            </li>
            <li>
                <a
                    href='https://www.linkedin.com/in/henry-ns/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Linkedin' />
                </a>
            </li>
            <li>
                <a
                    href='https://instagram.com/h3nry.ns'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Instagram' />
                </a>
            </li>
            <li>
                <a
                    href='https://twitter.com/h3nry_ns'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Twitter' />
                </a>
            </li>
            <li final={true}>
                <a href='mailto:enrque.ns@gmail.com'>
                    <Icon name='Email' />
                </a>
            </li>
        </ul>
        <Next to='/education'/>
    </Section>
);
