import { memo } from 'react';

const Postitem = memo(({ title, body }) => {
    console.log('Рендер поста:', title); 
    return (
        <article style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{title}</h3>
            <p>{body}</p>
        </article>
    );
});
export default Postitem;