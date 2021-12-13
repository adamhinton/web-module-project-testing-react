import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: 'Stranger Things',
    summary: 'blah blah summary',
    seasons: [
        {id: 1, name: 'season 1', episodes: []},
        {id: 2, name: 'season 2', episodes: []},
    ],
}

test('renders without errors', ()=>{
    render(<Show show={testShow} selectedSeason = 'none'/>);
});


test('renders Loading component when prop show is null', () => {});
    render(<Show show= {null} selectedSeason = 'none'/>);
    const loading = screen.queryByTestId('loading-container');
    expect(loading).toBeInTheDocument()


test('renders same number of options seasons are passed in', ()=>{});

test('handleSelect is called when an season is selected', () => {});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
