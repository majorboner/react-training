import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
	const { className, comment, isLoading } = props;

	if (isLoading) {
		return (
			<div className={classNames('', {}, [className, cls.loading])}>
				<HStack align="center">
					<Skeleton
						width={30}
						height={30}
						border="50%"
					/>
					<Skeleton
						className={cls.username}
						width={100}
						height={16}
					/>
				</HStack>
				<Skeleton
					className={cls.text}
					width="100%"
					height={50}
				/>
			</div>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<VStack
			max
			className={classNames('', {}, [className])}
			data-testid="CommentCard"
		>
			<AppLink
				theme={AppLinkTheme.PRIMARY}
				className={cls.header}
				to={getRouteProfile(comment.user.id)}
			>
				{comment.user.avatar ? (
					<Avatar
						size={30}
						src={comment.user.avatar}
					/>
				) : null}
				<Text
					className={cls.username}
					title={comment.user.username}
				/>
			</AppLink>
			<Text
				className={cls.text}
				text={comment.text}
			/>
		</VStack>
	);
});
