const posts = [
    { id: 1, title: 'Post One', body: 'This is post one' },
    { id: 2, title: 'Post Two', body: 'This is post two' },
];

// export const getPosts = () => posts;

const getPosts = () => posts;

// export { getPosts };

export const getPostsLength = () => posts.length;

export default getPosts;