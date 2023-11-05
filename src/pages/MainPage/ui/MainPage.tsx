import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/ArticleRating';
import { Page } from '@/widgets/Page';

const MainPage = () => (
	<Page data-testid="MainPage">
		<Counter />
		<ArticleRating articleId="7" />
	</Page>
);

export default MainPage;
