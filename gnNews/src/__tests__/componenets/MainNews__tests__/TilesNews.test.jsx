import { render, screen } from '@testing-library/react';
import moment from 'moment';
import TilesNews from '../../../components/MainNews/TilesNews';

const mockNews = {
    articles: [
        {
            title: 'Test news 1',
            source: { name: 'Test source 1' },
            publishedAt: moment().subtract(1, 'days').toISOString(),
            content: 'Test content 1',
            author: 'Test author 1',
            url: 'http://test1.com',
        },
        {
            title: 'Test news 2',
            source: { name: 'Test source 2' },
            publishedAt: moment().toISOString(),
            content: 'Test content 2',
            author: 'Test author 2',
            url: 'http://test2.com',
        },
    ],
};

describe('TilsNews component', () => {
    it('renders news list with correct data', () => {
        render(<TilesNews newsall={mockNews} />);

        const newsTitles = screen.getAllByRole('heading', { level: 3 });
        expect(newsTitles).toHaveLength(mockNews.articles.length);

        newsTitles.forEach((title, index) => {
            expect(title).toHaveTextContent(mockNews.articles[index].title);

            const source = screen.getByText(mockNews.articles[index].source.name);
            expect(source).toBeVisible();

            const date = screen.getByText(
                moment(mockNews.articles[index].publishedAt).format('D MMMM YYYY, HH:mm')
            );
            expect(date).toBeVisible();

            const readMoreBtn = screen.getAllByRole('button')[index];
            expect(readMoreBtn).toHaveAttribute('aria-label', 'read more');
            readMoreBtn.click();
        });
    });
});