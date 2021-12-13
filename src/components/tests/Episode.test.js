import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: '',
    image: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
    season:1,
    number:1,
    summary: 'Heebie Jeebie 1 2 3',
    runtime: 1,
}

// const testEpisodeWithSummary = {
//     id:1,
//     name: '',
//     image: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
//     season:1,
//     number:1,
//     summary: 'Heebie Jeebie 1 2 3',
//     runtime: 1,
// }

const testEpisodeWithoutImage={
        id:1,
        name: '',
        image: null,
        season:1,
        number:1,
        summary: 'Heebie Jeebie 1 2 3',
        runtime: 1,
}

test("renders without error", () => {
    render(<Episode episode = {testEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode ={testEpisode}/>);

    const summaryExists = screen.queryByText(/Heebie Jeebie 1 2 3/i);
    
    expect(summaryExists).toBeTruthy();
    expect(summaryExists).toBeInTheDocument();
    expect(summaryExists).toHaveTextContent(/Heebie Jeebie 1 2 3/i)
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode = {testEpisodeWithoutImage}/>)

    const testImg = screen.queryAllByAltText('./stranger_things.png')
});
