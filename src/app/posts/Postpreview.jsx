export function PostPreview({post}) {
    return (
        <>
            <div className="post-preview">
                <a href={'/posts/'+post.id}>
                    <h2 className="post-title">
                        {post.title}
                    </h2>
                    {/* 有些文章有subtitle，有些沒有 */}
                    {post.subTitle &&
                        <h3 className="post-subtitle">
                            {post.subTitle}
                        </h3>
                    }
                </a>
                <p className="post-meta">
                    Posted by
                    <a href="#!">{post.author}</a>
                    on {post.date}
                </p>
            </div>
            
        </>
    );
}